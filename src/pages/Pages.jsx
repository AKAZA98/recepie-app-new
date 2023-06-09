import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import {Route, Routes, useLocation} from 'react-router-dom'
import Searched from "./Searched";
import Recipe from './Recipe';
import {AnimatePresence} from 'framer-motion'

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
    <Routes Location={location} key={location.pathname}>
      {/* <Redirect to="/"/> */}
      <Route exact path="/" element={<Home/>}/>
      <Route path="/Cuisine/:type" element={<Cuisine/>}/>
      <Route path="/Searched/:search" element={<Searched/>}/>
      <Route path="/Recipe/:name" element={<Recipe/>}/>
    </Routes>
    </AnimatePresence>
)
}

export default Pages;
