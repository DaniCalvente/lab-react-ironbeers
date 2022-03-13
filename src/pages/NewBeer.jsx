import React from "react";
import { useState } from 'react'
import Header from "../components/Header";
import {useNavigate} from "react-router-dom"
import axios from "axios";


function NewBeer() {

  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [first_brewed, setFirstBrewed] = useState("")
  const [brewers_tips, setBrewersTips] = useState("")
  const [attenuation_level, setAttenuationLevel] = useState(0)
  const [contributed_by, setContributedBy] = useState("")

  const navigate = useNavigate()


  const handleSubmit = async (event) => {

    // prevenir el comportamiento del form
    event.preventDefault()

    // enviar los estados al endpoint para crear una nueva cerveza
    const newBeer = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by}
    
    await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer )

    // redireccionar al usuario a "/beers"
    navigate("/beers")
    
  }

  return (
    <div>
      <Header />
      <h2>Add Your Beer</h2>

      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label>
        <input 
        type="text" 
        name="name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="tagline">Tagline</label>
        <input 
        type="text" 
        name="tagline" 
        value={tagline}
        onChange={(e) => setTagline(e.target.value)}
        />
        <br />
        <label htmlFor="description">Description</label>
        <input 
        type="text" 
        name="description" 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label htmlFor="firstBrewed">First Brewed</label>
        <input 
        type="text" 
        name="firstBrewed" 
        value={first_brewed}
        onChange={(e) => setFirstBrewed(e.target.value)}
        />
        <br />
        <label htmlFor="brewersTips">Brewers Tips</label>
        <input 
        type="text" 
        name="brewersTips" 
        value={brewers_tips}
        onChange={(e) => setBrewersTips(e.target.value)}
        />
        <br />
        <label htmlFor="attenuationLevel">Attenuation Level</label>
        <input 
        type="number" 
        name="attenuationLevel" 
        value={attenuation_level}
        onChange={(e) => setAttenuationLevel(e.target.value)}  
        />
        <br />
        <label htmlFor="contributedBy">Contributed By</label>
        <input 
        type="text" 
        name="contributedBy" 
        value={contributed_by}
        onChange={(e) => setContributedBy(e.target.value)} 

        />
        <br />
        <button>Add Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
