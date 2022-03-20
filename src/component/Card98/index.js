import React from 'react';
import '../style.css'

const Card98 = (prop) => {
    
    const handleClick = () => {
        window.open("https://coderunners.netlify.app/");
      };

    const handlegithubClick = () => {
        window.open("https://github.com/gi-ba-bu/coderunner-server");
      };

    const handlegithubClick2 = () => {
        window.open("https://github.com/gi-ba-bu/coderunner-client");
      };
    
    return (
        <>
        <div className='card-container'>
        <img className='card-image' onClick={handleClick} src="../../images/anonymous-journal.png" alt="react" />      
        <p className='card-text'>
            A website for coders to share their anonymous experience. You can add a Gif to your message. Reactions have a toggle feature. Enjoy! 
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




export default Card98;
