import React from 'react'
import { ReactComponent as BitcoinLogo } from '../svgss/increase.svg';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navsvg">
                <BitcoinLogo />
            </div>
            <div className="nav-heading">
                <div className="nav-heading-display">
                    <h5>Customers</h5>
                <h5>Features</h5>
                <h5>Whitepaper</h5>
                <h5>Testimonial</h5>
                </div>
                

            </div>
            <div className="navsign">
<div className="butt1">  <button> <h5>LOGIN</h5> </button>

</div> 
 <div className="butt2">  <button> <h5>JOIN US</h5></button>  
 
 </div>
            </div>
        </div>
    )
}

export default Navbar
