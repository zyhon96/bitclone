import React from 'react'
import bitcoin from '../images/Illustration.jpg';
function Header() {
    return (
        <div className="header">
            <div className="header-left">
<h1>Buy &amp; Sell <br/>Crypto with ease</h1>

<h3>Never lose valuable money again, Let us be <br/>your coin plug without fear</h3>
<div className="getcoins">
<div className="box1">
<button> <h4> BUY COIN  </h4></button>
</div>
<div className="box2">
    <button> <h4>SELL COIN </h4></button>
</div>
</div>
            </div>
            <div className="header-right">
            <img src={bitcoin} alt="Header" />
            </div>
        </div>
    )
}

export default Header
