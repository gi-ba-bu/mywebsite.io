import React from 'react';
import '../style.css'

const Card95 = (prop) => {
    
    const handleClick = () => {
        window.open("https://www.turing.ac.uk/collaborate-turing/data-study-groups");
      };

    const handleClick2 = () => {
        window.open("https://www.turing.ac.uk/research/publications/data-study-group-final-report-asda");
      };

    const handleClick3 = () => {
        window.open("https://github.com/team-flourish/flourish");
      };
    
    return (
        <>
        <div className='card-container'>
        <img className='card-image' onClick={handleClick} src="../../images/salesDsgLida.png" alt="react" />      
        <p className='card-text'>
        A study on the effects of weather on sales in the retail industry. Results from a 2-week collaborative Data Study Group (DSG) run by the Leeds Institute of Data Analytics and Alan Turing Institute.
        </p>
        <p className='card-text' id='card-git-link'>
           <span className='add-padd-link'>DSG info</span> <a className='arrow-a' onClick={handleClick}> &#8594; </a>
        </p>
        <p className='card-text' id='card-git-link'>
        <span  className='add-padd-link'>Abstract</span> <a className='arrow-a' onClick={handleClick2}> &#8594; </a>
        </p>
        <p className='card-text' id='card-git-link'>
        <span  className='add-padd-link'>Report</span> <a className='arrow-a' onClick={handleClick3}> &#8594; </a>
        </p>
        </div>
        </>
    );
}




export default Card95;
