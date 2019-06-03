import React from 'react'
import NumberButton from './NumberButton'


const nums = [
    {
        num: '7'
    },
    {
        num: '8'
    },
    {
        num: '9'
    },
    {
        num: '4'
    },
    {
        num: '5'
    },
    {
        num: '6'
    },
    {
        num: '1'
    },
    {
        num: '2'
    },
    {
        num: '3'
    }
]
   



function Characters(){                                                                                                                                                                                                                                                                                                                      
   return (
    
    
    <div className="number-container                                                                                                                                                                                                                                            ">
      {nums.map(number => {
        return <NumberButton text={number} buttonStyle="number-style"/>;
      })}

    </div>
    
  
);
    }
    export default Characters;
    