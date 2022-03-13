import React from 'react'
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RingLoader from "react-spinners/RingLoader";

function BeerDetails() {

    // 1. Crear el estado que manejara la info
    const [beerDetails, setBeerDetails] = useState(null)
    const [fetching, setFetching] = useState(true);

    const {id} = useParams()

    // 2. el useEffect que llamara el component didMount
    useEffect (() => {
        getBeerDetails()
    }, [])

    // 3. Funcion que va a llamar la data de la API
    const getBeerDetails = async () => {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        console.log(response.data)
        setBeerDetails(response.data)
        setFetching(false);
    }

    if (fetching) {
        return (
          <div>
            <RingLoader />
          </div>
        );
      }


  return (
    <div>

    <Header/>

    <h2>Beer Details</h2>
    <div>
        <img src={beerDetails.image_url} alt={beerDetails.name} width='50px' />
        <h3>{beerDetails.name}</h3>
        <p>{beerDetails.attenuation_level}</p>
        <p>{beerDetails.tagline}</p>
        <p>{beerDetails.first_brewed}</p>
        <p>{beerDetails.description}</p>
        <p>{beerDetails.contributed_by}</p>
      </div>



    </div>
  )
}

export default BeerDetails