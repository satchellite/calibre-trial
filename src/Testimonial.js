import React, { useState, useEffect } from 'react';

function Testimonial (){
    return(
        <div>
            <div className='testimonial-section'>
                <div className='background-primary'>
                <div className="quote-testimonial-body">
                    <div className="row">
                        <div className="quote-open">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"></path></svg>
                        </div>
                    </div>
                    <div className="row">
                        <div className="featured-testimonial-body">
                            I couldn't be happier from my clean from Calibre Cleaning. My house looks absolutely amazing. Thank you!! </div>
                        </div>
                    <div className="row">
                        <div className="quote-close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z"></path></svg>
                        </div>
                    </div>
                    <div className="featured-testimonial-customer"> Chantelle, Melbourne </div>
                    <div className="testimonial-stars">★★★★★</div>
                    </div>
                </div>
            </div>
            <div className='footer-logo'>
            <a href="https://www.calibrecleaning.com.au/">
                    <img src="https://www.calibrecleaning.com.au/wp-content/themes/Calibre%20Cleaning/images/logo_white_200x100.png"/>
                </a>
            </div>
        </div>
    );
}

export default Testimonial;