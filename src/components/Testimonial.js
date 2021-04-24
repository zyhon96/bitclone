import React from 'react'
import Ogbeni from '../images/Ellipse 6.png';
import Girl from '../images/Image.png';

function Testimonial() {
    return (
        <div className="testimonial">

            <div className="testimonial-left">
                <h1>People trust us.<br /> Hear what our users <br />have to say.</h1>
                <div className="lefty">
                    <div className="lefto">
                        <h3> “ </h3>
                    </div>
                    <div className="left">
                        <div className="left-content">
                            <h3>Trustworthy Platform...</h3>
                            <div className="word">
                                <div className="lin">
                                    <div className="line">
                                    </div>
                                </div>
                                <div className="wording">
                                    <p>No one jokes with their hard earned cash, this <br />includes this amazing platform that makes <br />transactions seamless and very easy.</p>
                                </div>
                            </div>

                            <div className="last">
                                <div className="last-title">
                                    <h3>Axel Dami</h3>
                                    <p>Lead Designer, <br />Zsoftware</p>
                                </div>
                                <div className="last-img">
                                    <img src={Ogbeni} alt="guyimage" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial-right">
                <div className="righty">

                    <div className="green">
                        <h3>Amazing Service...</h3>

                        <div className="greener">
                            <div className="lin1">
                                <div className="liner">
                                </div>
                            </div>
                            <div className="wordings">
                                <p>The customer interaction has me in chills. As though they already anticipate my needs and go ahead to meet them. A platform I’ll easily recommend to any and everyone.</p>                                </div>
                        </div>
                        <div className="bottoom">
                            <div className="text-bottom">
                                <h3>
                                    Druids <br />
                                     CTO, <br />
                                     Kanayo O. Agency
                                   </h3>
                            </div>
                            <div className="img-bottom">
                                <img src={Girl} alt="girlimg" />
                            </div>
                        </div>


                    </div>

                    <div className="dot">
                        <h3> “ </h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonial
