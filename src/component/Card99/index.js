import React, { useState, useEffect } from 'react';
import '../style.css'

const Card99 = (prop) => {
    
    const handleClick = () => {
        window.open("https://reinhabit.netlify.app/");
      };

    const handlegithubClick = () => {
        window.open("https://github.com/gi-ba-bu/habit-tracker-server");
      };

    const handlegithubClick2 = () => {
        window.open("https://github.com/gi-ba-bu/habit-tracker-client");
      };
    
    return (
        <>
        <div className='card-container'>
        <img className='card-image' onClick={handleClick} src="../../images/habit-tracker.png" alt="react" />      
        <p className='card-text'>
            An app that helps users track their habits. After registration, you can create a new habit tracker. For each habit tracker that you set up, you have access to a counter and a graph of your performance. Enjoy! 
        </p>
        <p className='card-text' id='card-git-link'>
           <span className='add-padd-link'>Live website</span> <a className='arrow-a' onClick={handleClick}> &#8594; </a>
        </p>
        <p className='card-text' id='card-git-link'>
        <span  className='add-padd-link'>Github repo (server)</span> <a className='arrow-a' onClick={handlegithubClick}> &#8594; </a>
        </p>
        <p className='card-text' id='card-git-link'>
        <span  className='add-padd-link'>Github repo (client)</span> <a className='arrow-a' onClick={handlegithubClick2}> &#8594; </a>
        </p>
        </div>
        </>
    );
}




export default Card99;
