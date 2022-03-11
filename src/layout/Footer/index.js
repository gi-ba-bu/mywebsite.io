import React from 'react';
import './style.css';


const Footer = () => {

return(
    <div id="footer">  
        <span> &copy; Giacomo Baldo 2022. </span> 
        <span> Built with <img id = "footerimages"style={{ height: "50px", width: "50px" }} src="../../images/reacticon.svg" alt="Sunrise" /> React, CSS and JSX. Deployed with Netlify. </span> 
    </div>
)}

export default Footer;
