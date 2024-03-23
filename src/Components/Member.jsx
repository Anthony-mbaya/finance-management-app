import React from 'react';

export const Member =()=>{
    return(
        <div className='member'>
            <div className='member-container'>
                <div className='member-text'>
                    <p className='text-1'>Want to access CruxTon Services?</p>
                    <p className='text-4'>Create Membership here!</p>
                </div>
                <div className="member-form">
                    <input type="email" className='input' placeholder='Enter your @email' />
                    <button className='request-btn'>Send Request!</button>
                </div>
            </div>
        </div>
    )
}