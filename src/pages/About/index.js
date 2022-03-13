import React, {useState} from 'react';
import { Linking, Text } from 'react-native-web';
import './style.css'
import { SentenceSelect } from '../../component';

const About = () => {


const [number, setNumber] = useState(0)
console.log(number)


return(
<div className='aboutme'>

<div className='spacing-a-bit-top'>  </div>

      <div className='bio-set-length'>
        <div className='bio-length'><span>shortest bio</span> <span>longest bio</span></div>
        <input className='radio-buttons' type="radio" value="Shortest" name="length" onChange={ () => setNumber(0)} checked = {number === 0} /> 
        <input type="radio" value="Medium" name="length" onChange={ () => setNumber(1)} checked = {number === 1}/> 
        <input type="radio" value="Longest" name="length" onChange={ () => setNumber(2)} checked = {number === 2}/> 
        <input type="radio" value="Longest" name="length" onChange={ () => setNumber(3)} checked = {number === 3}/> 
        <input type="radio" value="Longest" name="length" onChange={ () => setNumber(4)} checked = {number === 4}/> 
        <input type="radio" value="Longest" name="length" onChange={ () => setNumber(5)} checked = {number === 5}/> 
        <input type="radio" value="Longest" name="length" onChange={ () => setNumber(6)} checked = {number === 6}/> 
        {/* <input type="radio" value="Longest" name="length" onChange={ () => setNumber(7)} checked = {number === 7}/>  */}
      </div>

    <div className='paboutme' >

   <SentenceSelect id = {number} /> 



    </div>
<div className='spacing-a-bit-bottom'>  </div>
</div>
)
};

export default About;
