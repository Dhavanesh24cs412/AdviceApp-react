import React from 'react'
import {useState} from 'react';


export const Adviceapp = () => {

    const[advice,setAdvice]=useState("Click here for advice");

    async function advicecall(){
    const response= await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    }

  return (
    <>    
  
    <div className="mainbody">
      <h1>{advice}</h1>
      <br></br>
      <button onClick={advicecall}>Get an Advice</button>
    </div>


    </>

  )
}

