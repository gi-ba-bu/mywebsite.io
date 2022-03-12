import React, {useState} from 'react';
import { Linking, Text } from 'react-native-web';
import './style.css'
import { SentenceSelect } from '../../component';

const About = () => {


const [number, setNumber] = useState(0)
console.log(number)


return(
<div className='aboutme'>

<h3> bio </h3>

      <div >
        <input className='radio-buttons' type="radio" value="Shortest" name="length" onChange={ () => setNumber(0)} checked = {number === 0 && true} /> 
        <input type="radio" value="Medium" name="length" onChange={ () => setNumber(1)} checked = {number === 1 && true}/> 
        <input type="radio" value="Longest" name="length" onChange={ () => setNumber(2)} checked = {number === 2 && true}/> 
        <input type="radio" value="Longest" name="length" onChange={ () => setNumber(3)} checked = {number === 3 && true}/> 
        <input type="radio" value="Longest" name="length" onChange={ () => setNumber(4)} checked = {number === 4 && true}/> 
      </div>

    <div className='paboutme' >

   <SentenceSelect id = {number} /> 



    </div>
</div>
)
};

export default About;
