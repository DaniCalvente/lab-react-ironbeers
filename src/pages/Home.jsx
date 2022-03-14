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
        <Link to={"/beers"}><h2>All Beers</h2></Link>
      </div>
      <div>
        <img src={random} alt="Random-Beer" />
        <br />
        <Link to={"/random-beer"}><h2>Random Beer</h2></Link>
      </div>
      <div>
        <img src={newBeer} alt="New-Beer" />
        <br />
        <Link to={"/new-beer"}><h2>New Beer</h2></Link>
      </div>
    </div>
  );
}

export default Home;
