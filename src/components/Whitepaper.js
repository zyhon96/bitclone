import React from 'react'
import FounderLogo from '../images/Ellipse 8.png'
function Whitepaper() {
    return (

        <div className="whitepaper">
           <div className="conntennt">
                <h1>Read Our Whitepaper To Fully Understand <br/> Our Long Term Plan For You</h1>
            <p>Sem eu, at consectetur nunc diam. Ultricies nibh urna mauris, proin dui libero <br/>convallis. Sem eu, at consectetur nunc diam. Ultricies nibh urna mauris, proin dui<br/> libero convallis.</p>
    
           </div>
           <div className="download">
          <button><h3>DOWNLOAD WHITEPAPER</h3></button>
          
          <div className="founder">
              <div className="founder-img">
<img  src={FounderLogo} alt="founder"/>
              </div>
              <div className="founder-text">
<p>As documented by Axel, <br/> Our Co-founder</p>
              </div>
          </div>
           
       </div>
            </div>

    )
}

export default Whitepaper;
