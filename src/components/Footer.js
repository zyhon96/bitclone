import React from 'react'
import { ReactComponent as FooterLogo } from '../svgss/Logo footer.svg';
import { ReactComponent as FooterbitLogo } from '../svgss/bitcoin 1.svg';
import { ReactComponent as InstagramLogo } from '../svgss/instagram.svg';
import { ReactComponent as FacebookLogo } from '../svgss/facebbook.svg';
import { ReactComponent as LinkedinLogo } from '../svgss/linkedin.svg';


function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <div className="left-logo">
                    <FooterLogo />
                    <h2> Buy and sell crypto with ease</h2>
                </div>
                <div className="left-logo-bit">
                    <FooterbitLogo />
                </div>
            </div>
            <div className="footer-right">
                <div className="right-1">
                    <div className="list-101">
                        <ul>
                            <li>About</li>
                            <li>Jobs</li>
                            <li>Help</li>
                        </ul>
                    </div>
                    <div className="list-102">
                        <ul>
                            <li>Terms and Condition</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                            </ul>
                    </div>
                </div>
                <div className="right-2">
                    <h3>Lets Connect</h3>
                    <div className="social">
                        <LinkedinLogo />
                        <InstagramLogo />
                        <FacebookLogo />
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Footer
