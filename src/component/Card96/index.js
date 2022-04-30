import React from 'react';
import '../style.css'

const Card96 = (prop) => {
    
    const handleClick = () => {
        window.open("https://www.turing.ac.uk/collaborate-turing/data-study-groups");
      };

    const handleClick2 = () => {
        window.open("https://www.turing.ac.uk/research/publications/");
      };

    // const handleClick3 = () => {
    //     window.open("https://github.com/team-flourish/flourish");
    //   };
    
    return (
        <>
        <div className='card-container'>
        <img className='card-image' onClick={handleClick} src="../../images/bloodFlow.png" alt="react" />      
        <p className='card-text' >
        A study on 'Automated assesment of vascular perfusion'. Results from a 2-week collaborative Data Study Group (DSG) run by the Alan Turing Institute and University of Birmingham. <br/>
        🏆 Received the 'Learning machine' award for 'seizing every opportunity to learn and advance your skills'.
        </p>
        <p className='card-text' id='card-git-link'>
           <span className='add-padd-link'>What is a DSG?</span> <a className='arrow-a' onClick={handleClick}> &#8594; </a>
        </p>
        <p className='card-text' id='card-git-link'>
        <span  className='add-padd-link'>Report to be pubblished soon here</span> <a className='arrow-a' onClick={handleClick2}> &#8594; </a>
        </p>
        {/* <p className='card-text' id='card-git-link'>
        <span  className='add-padd-link'>Report</span> <a className='arrow-a' onClick={handleClick3}> &#8594; </a>
        </p> */}
        </div>
        </>
    );
}




export default Card96;
