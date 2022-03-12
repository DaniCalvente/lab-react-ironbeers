import React from "react";
import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import random from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function Home() {
  return (
    <div>
      <div>
        <img src={beers} alt="All-Beers" />
        <br />
        <Link to={"/beers"}>All Beers</Link>
      </div>
      <div>
        <img src={random} alt="Random-Beer" />
        <br />
        <Link to={"/random-beer"}>Random Beer</Link>
      </div>
      <div>
        <img src={newBeer} alt="New-Beer" />
        <br />
        <Link to={"/new-beer"}>New Beer</Link>
      </div>
    </div>
  );
}

export default Home;
