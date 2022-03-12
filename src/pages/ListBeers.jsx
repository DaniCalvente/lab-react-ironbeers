import React from 'react'
import Header from '../components/Header'
import axios from "axios"
import { useEffect, useState } from 'react'
import RotateLoader from "react-spinners/RotateLoader";
import { Link } from 'react-router-dom';

function ListBeers() {

  // 1. Crear el estado que manejara la info
  const [beers, setBeers] = useState(null)
  const [fetching, setFetching] = useState(true)

   // 2. el useEffect que llamara el component didMount
   useEffect(() => {
    getBeers()
   }, [])

   // 3. Funcion que va a llamar la data de la API
   const getBeers = async () => {
     const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
     // console.log(response.data);
     setBeers(response.data);
     setFetching(false)
   }

   if (fetching) {
     return (
       <div>
       <RotateLoader/>
       </div>
     )
   }


  return (
    <div>
    <Header/>
    <h2>All Beers</h2>

    {beers.map((eachBeer) => {
      return (
        <div>
        <div>
          <img src={eachBeer.image_url} alt="beer-img" width="50px"/>
        </div>
      <Link to={`/beers/${eachBeer._id}`}>{eachBeer.name}</Link>
      </div>
      )
      
      

    })}

    </div>
  )
}

export default ListBeers