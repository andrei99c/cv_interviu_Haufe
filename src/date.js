import React from 'react';
import "./App.css";
import Button from "./components/buttons"

function Date(){
    return(
        <div className="Date">
        <p className="nume">
     <img src="/image/andrei.jpg" alt=""/>
     <h3>Cociorvan Andrei</h3>
    
     </p>
   
     <h3> 
     <p className="aliniat">
         <h2>Date personale</h2>
        < br/>
         <p>Adresa: Str. Moise Doboșan, nr. 129, </p>
         <p>Timișoara, 3620, România</p>
         <p>tel: +4 0763 969 212</p> 
         <p>Email: cociorvanandrei99@gmail.com</p>
         
         
         
         </p>

         </h3>
         <p className="aliniatpozbuton"><Button/></p>
         
        </div>
    )
}

export default Date;