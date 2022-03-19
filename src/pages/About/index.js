import React, {useState} from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import './style.css'
import { SentenceSelect } from '../../component';

const About = () => {


const [number, setNumber] = useState(1)
console.log(number)


return(
<Scrollbars style={{ width: "100vw", height: "100vh" }}
// This will activate auto hide
autoHide
// Hide delay in ms
autoHideTimeout={1000}
// Duration for hide animation in ms.
autoHideDuration={200}>
<div className='aboutme'>

<div className='spacing-a-bit-top'>  </div>

      <div className='bio-set-length'>
        <div className='bio-length'><span>adjust bio length:</span></div>
        <div className='input-spacing'>
        <input type="radio" value="Shortest" name="length" onChange={ () => setNumber(0)} checked = {number === 0} /> 
        <input type="radio" value="Medium" name="length" onChange={ () => setNumber(1)} checked = {number === 1}/> 
        <input type="radio" value="Longest" name="length" onChange={ () => setNumber(2)} checked = {number === 2}/> 
        <input type="radio" value="Longest" name="length" onChange={ () => setNumber(3)} checked = {number === 3}/> 
        <input type="radio" value="Longest" name="length" onChange={ () => setNumber(4)} checked = {number === 4}/> 
        <input type="radio" value="Longest" name="length" onChange={ () => setNumber(5)} checked = {number === 5}/> 
        {/* <input type="radio" value="Longest" name="length" onChange={ () => setNumber(6)} checked = {number === 6}/>  */}
        {/* <input type="radio" value="Longest" name="length" onChange={ () => setNumber(7)} checked = {number === 7}/>  */}
        </div>
        <div className='bio-length'><span>shortest</span> <span>longest</span></div>
      </div>

    <div className='paboutme' >

   <SentenceSelect id = {number} /> 



    </div>
<div className='spacing-a-bit-bottom'>  </div>
</div>
</Scrollbars>
)
};

export default About;
