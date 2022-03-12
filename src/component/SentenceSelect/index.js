import React, { useState, useEffect } from 'react';
import  Bios  from './helper';

const SentenceSelect = (prop) => {
    
    const [sentences, setSentences] = useState(" ")

    console.log(prop.id)
    let id  = prop.id + 1
    //console.log(Bios.slice(0,id))
    

    useEffect( () => {
        setSentences(Bios.slice(0,id))
        console.log(id)
    }, [id])
        
    
    
    console.log(sentences)
    

    return (
        <>        

                    
            <p className='pbullet'> {sentences} </p>  
           
        </>
        

    );
}

export default SentenceSelect;
