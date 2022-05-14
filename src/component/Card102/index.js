import React from 'react';
import '../style.css'

const Card102 = (prop) => {
    
    const handleClick = () => {
        window.open("https://pypi.org/project/ngramratio/");
      };

    const handlegithubClick = () => {
        window.open("https://github.com/gi-ba-bu/python-n-gram-ratio");
      };
    
    return (
        <>
        <div className='card-container'>
        <img className='card-image' onClick={handleClick} src="../../images/ngramratio.png" alt="react" />      
        <p className='card-text'>
        A Python library offering a method to score two strings for similarity. The similarity score is based on matching n-grams. Useful within data analysis aiming at product name matching. Tested on Python 3.6 and later versions.
        </p>
        <p className='card-text' id='card-git-link'>
           <span className='add-padd-link'>Pypi repository</span> <a className='arrow-a' onClick={handleClick}> &#8594; </a>
        </p>
        <p className='card-text' id='card-git-link'>
        <span  className='add-padd-link'>Github repository</span> <a className='arrow-a' onClick={handlegithubClick}> &#8594; </a>
        </p>
        </div>
        </>
    );
}




export default Card102;
