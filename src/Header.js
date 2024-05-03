import React, { useState, useEffect } from 'react';

function Header (){
    return(
        <header>
            <div className="logo">
            <a href="https://www.calibrecleaning.com.au/">
                <img src="https://www.calibrecleaning.com.au/wp-content/uploads/2021/06/logo_blue_150x72.png"/>
            </a>
            </div>
            <div className="quote-menu-phone">
                <a href="tel:+611300991368"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#2e86de"><path d="M0 0h24v24H0z" fill="none"></path><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
                    <span>1300 991 368</span>
                </a>
            </div>
        </header>
    );
}

export default Header;