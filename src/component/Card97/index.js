import React from 'react';
import '../style.css'

const Card97 = (prop) => {
    
    const handleClick = () => {
        window.open("https://omdena.com/projects/food-prediction/");
      };

    // const handleClick2 = () => {
    //     window.open("https://www.turing.ac.uk/research/publications/");
    //   };

    // const handleClick3 = () => {
    //     window.open("https://github.com/team-flourish/flourish");
    //   };
    
    return (
        <>
        <div className='card-container'>
        <img className='card-image' onClick={handleClick} src="../../images/freshFood.png" alt="react" />      
        <p className='card-text' >
        An NLP study on preventing food waste by building a forecasting model to predict sales of fresh food. Worked on creating an ontology that unifies products data from different sources through semantic matching. <br/>
        🏆 Received the 'Lead ML Engineer' award for 'exemplary performance and collaboration'. Report not available for confidentiality reasons.
        </p>
        <p className='card-text' id='card-git-link'>
           <span className='add-padd-link'>Project description</span> <a className='arrow-a' onClick={handleClick}> &#8594; </a>
        </p>
        {/* <p className='card-text' id='card-git-link'>
        <span  className='add-padd-link'>Report not available for confidentiality reason.</span> <a className='arrow-a' onClick={handleClick2}> &#8594; </a>
        </p> */}
        {/* <p className='card-text' id='card-git-link'>
        <span  className='add-padd-link'>Report</span> <a className='arrow-a' onClick={handleClick3}> &#8594; </a>
        </p> */}
        </div>
        </>
    );
}




export default Card97;
