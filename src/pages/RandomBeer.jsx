import React from 'react'
import Header from '../components/Header'
import { useEffect, useState } from "react";
import axios from "axios";
import RingLoader from "react-spinners/RingLoader";

function RandomBeer() {
    // 1. Crear el estado que manejara la info
    const [randomBeer, setRandomBeer] = useState(null)
    const [fetching, setFetching] = useState(true);

  
    // 2. el useEffect que llamara el component didMount
    useEffect (() => {
        getRandomBeer()
    }, [])

    // 3. Funcion que va a llamar la data de la API
    const getRandomBeer = async () => {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        console.log(response.data)
        setRandomBeer(response.data)
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
    <h2>Random Beer</h2>
    <div>
        <img src={randomBeer.image_url} alt={randomBeer.name} width='50px' />
        <h3>{randomBeer.name}</h3>
        <p>{randomBeer.attenuation_level}</p>
        <p>{randomBeer.tagline}</p>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by}</p>
      </div>
    </div>
    
  )
}

export default RandomBeer