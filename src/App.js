import './App.css';
import Home from './pages/Home';
import ListBeers from './pages/ListBeers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import BeerDetails from './pages/BeerDetails';

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">

    <Routes> 
    <Route path="/" element={<Home/>}/>
    <Route path="/beers" element={<ListBeers/>}/>
    <Route path="/beers/:id" element={<BeerDetails/>}/>
    <Route path="/random-beer" element={<RandomBeer/>}/>
    <Route path="/new-beer" element={<NewBeer/>}/>
    </Routes>
 
    </div>
  );
}

export default App;
