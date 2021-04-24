import React from 'react'
import Setbitcoin from '../images/Group33.jpg';
import Setbitcoin2 from '../images/Group34.jpg';

function Trade() {
    return (
        <div className="trade">
            <div className="trade-top">
                <div className="top-left">
                    <h1>Trade</h1>
                    <h2>Anywhere, <br /> Anytime, Everytime</h2>
                    <p>At amet, sem vestibulum interdum. Risus imperdiet nunc, enim <br />dui neque, lorem amet aliquam nulla.lum interdum. Risus<br /> imperdiet nunc, enim dui neque, lorem amet aliquam nulla.</p>
                </div>
                <div className="top-right">
                    <div className="setbit-img">
                        <img src={Setbitcoin} alt="Bitcoin" />
                    </div>
                </div>

            </div>
            <div className="trade-bottom">
                <div className="bottom-left">
                    <div className="setbit2">
                        <img src={Setbitcoin2} alt="Bitcoin2" />

                    </div>
                </div>
                <div className="bottom-right">
                    <div className="bottom-right-text">
                        <h1>Compound Profit</h1>
                        <h2>Without Having To <br />Worry About Paying</h2>
                        <p>
                            At amet, sem vestibulum interdum. Risus imperdiet <br />nunc, enim dui neque, lorem amet aliquam , <br />nulla.lum interdum. Risus imperdiet nunc, enim dui <br />neque, lorem amet aliquam nulla.
    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trade
