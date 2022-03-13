import React, { useState, useEffect } from 'react';
import './style.css'

const Card = (prop) => {
    
    const [parOne, setParOne] = useState(" ")
       
    
    return (
        <>
        <div className='card-container'>
        <img style={{ height: "27px", width: "px"}} src="../../images/reacticon.svg" alt="react" />      
        <p>
            hello
        </p>
        </div>
        </>
    );
}




export default Card;
