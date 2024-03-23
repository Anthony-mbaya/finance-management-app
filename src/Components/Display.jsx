import React from 'react';
import { ReactTyped } from 'react-typed'

export const Display =()=>{
    return(
        <div>
        <div className='display'>
            <p className='text-1'>Explore Your Company Finance Data Here!</p>
            <h2 className='text-2'>Merge Finance Data</h2>
            <div className='typed-content'>
            <p className='text-3'>Fast, Flexible & Eligible for Small Businesses: </p>
            <ReactTyped className='text-3' strings={['KCB', 'Equity', 'Stanbic', 'Family']} typeSpeed={120} backSpeed={140} loop />
          
            </div>
            
            <h2 className='text-4'>Monitor Your Finace Data With Us </h2>
            <button className='start-btn'>Get Started</button>
        </div>

        </div>
    )
}
