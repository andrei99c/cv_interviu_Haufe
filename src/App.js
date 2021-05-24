
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import React, { useState } from 'react';
import Date from "./date";
import Educatie from "./square";
import {Link, NavLink} from 'react-router-dom';
import Personale from "./personale";
import Digitale from "./digitale";
import Alte from "./alte";
import Button from "./components/buttons"

function App() {
 
 
 return(
   <div> 
     <Navbar/> 
     <Date/> 
     <Educatie/>
    <Personale/>
    <Alte/>
    <Digitale/>
    
   
     
   </div>
   

 );
}
export default App;
