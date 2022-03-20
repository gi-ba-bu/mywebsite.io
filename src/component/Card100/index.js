import React, { useState, useEffect } from 'react';
import '../style.css'

const Card100 = (prop) => {
    
    const handleClick = () => {
        window.open("https://staging--ultimate-quiz-game.netlify.app");
      };

    const handlegithubClick = () => {
        window.open("https://github.com/u-s-c-l");
      };
    
    return (
        <>
        <div className='card-container'>
        <img className='card-image' onClick={handleClick} src="../../images/quiz-game.png" alt="react" />      
        <p className='card-text'>
            An interactive quiz game app that can host any number of players in the same game.
            You can also register and play a solo quiz. Enjoy! 
        </p>
        <p className='card-text' id='card-git-link'>
           <span className='add-padd-link'>Live website</span> <a className='arrow-a' onClick={handleClick}> &#8594; </a>
        </p>
        <p className='card-text' id='card-git-link'>
        <span  className='add-padd-link'>Github repo</span> <a className='arrow-a' onClick={handlegithubClick}> &#8594; </a>
        </p>
        </div>
        </>
    );
}




export default Card100;
