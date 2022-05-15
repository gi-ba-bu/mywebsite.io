import React from 'react';
import '../style.css'

const Card103 = (prop) => {
    
    const handlegithubClick = () => {
        window.open("https://github.com/gi-ba-bu/Test-example-CSharp-Selenium");
      };
    
    return (
        <>
        <div className='card-container'>
        <img className='card-image' onClick={handlegithubClick} src="../../images/dotnettest.png" alt="react" />      
        <p className='card-text'>
        A simple UI test for the landing page of this website. Written in C#, it also uses Selenium webdrivers for Chrome. Test passed!
        </p>
        <p className='card-text' id='card-git-link'>
        <span  className='add-padd-link'>Github repository</span> <a className='arrow-a' onClick={handlegithubClick}> &#8594; </a>
        </p>
        </div>
        </>
    );
}




export default Card103;
