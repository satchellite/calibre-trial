import React, { useState, useEffect } from 'react';

function Masthead (){
    return(
        <div className='masthead'>
            <div className='background-primary masthead-top'>
                <h1>Book an Appointment</h1>
            </div>
            <div className='background-secondary masthead-bottom'>
                <p>Flat Rate Prices, Outstanding Cleaners</p>
            </div>
        </div>
    );
}

export default Masthead;