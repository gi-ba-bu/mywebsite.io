import React, { useState, useEffect } from 'react';
import  Bios  from './helper';

let idOne, idTwo, idThree, idFour;

const SentenceSelect = (prop) => {
    
    const [parOne, setParOne] = useState(" ")
    const [parTwo, setParTwo] = useState(" ")
    const [parThree, setParThree] = useState(" ")
    const [parFour, setParFour] = useState(" ")
   

    let id  = prop.id + 1
    //console.log(id)
        
    useEffect( () => {
        idOne = Math.min(id,2)
        idTwo = Math.min(id,4)
        idThree = Math.min(id,6)
        idFour = Math.min(id,8)
        setParFour(Bios.slice(6,idFour))
        setParThree(Bios.slice(4,idThree))
        setParTwo(Bios.slice(2,idTwo))
        setParOne(Bios.slice(0,idOne))
    }, [id])

        
    
    return (
        <>         
            <p> {parOne} </p> 
            <p> {parTwo} </p>
            <p> {parThree} </p>
            <p> {parFour} </p> 
            
        </>
    );
}

export default SentenceSelect;
