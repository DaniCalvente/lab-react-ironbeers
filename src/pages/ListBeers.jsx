import React from "react";
import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import { Link } from "react-router-dom";

function ListBeers() {
  // 1. Crear el estado que manejara la info
  const [beers, setBeers] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [search, setSearch] = useState("")

  // 2. el useEffect que llamara el component didMount
  useEffect(() => {
    getBeers();
  }, []);

  useEffect(()=>{
    getSearch()
  }, [search])

  // 3. Funcion que va a llamar la data de la API
  const getBeers = async () => {
    const response = await axios.get(
      "https://ih-beers-api2.herokuapp.com/beers"
    );
    // console.log(response.data);
    setBeers(response.data);
    setFetching(false);
  };

  const getSearch = async () => {
   
    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
    console.log(response.data)
    setBeers(response.data)
 
}

const handleChange = (event) => {    
  setSearch(event.target.value)      
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
      <Header />
      <h2>All Beers</h2>

      <div>
        <form className="searchForm">
            <label htmlFor="search">Search a Beer</label>
            <input type="text" name="search" className="inputStyle" value={search} onChange={handleChange} />
        </form>
      </div>

      {beers.map((eachBeer) => {
        return (
          <div>
            <div className="eachBeerInfo">
              <div className="eachBeerImg">
                <img src={eachBeer.image_url} alt="beer-img" width="50px" />
              </div>
              <div className="eachBeerTags">
                <Link to={`/beers/${eachBeer._id}`}>{eachBeer.name}</Link>
                <p>{eachBeer.tagline}</p>
                <p>{eachBeer.contributed_by}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListBeers;
