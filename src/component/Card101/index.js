import React from 'react';
import '../style.css'

const Card101 = (prop) => {
    
    const handleClick = () => {
        window.open("https://flourishing.netlify.app/");
      };

    const handlegithubClick = () => {
        window.open("https://github.com/team-flourish");
      };

    const handlegithubClick2 = () => {
        window.open("https://github.com/team-flourish/flourish");
      };
    
    return (
        <>
        <div className='card-container'>
        <img className='card-image' onClick={handleClick} src="../../images/flourish.png" alt="react" />      
        <p className='card-text'>
        An app that aims to reduce food waste by letting users share information about reduced food items. Made using Flask, PostgreSQL and React.  
        </p>
        <p className='card-text' id='card-git-link'>
           <span className='add-padd-link'>Live website</span> <a className='arrow-a' onClick={handleClick}> &#8594; </a>
        </p>
        <p className='card-text' id='card-git-link'>
        <span  className='add-padd-link'>Github org. link</span> <a className='arrow-a' onClick={handlegithubClick}> &#8594; </a>
        </p>
        <p className='card-text' id='card-git-link'>
        <span  className='add-padd-link'>Github main repo</span> <a className='arrow-a' onClick={handlegithubClick2}> &#8594; </a>
        </p>
        </div>
        </>
    );
}




export default Card101;
