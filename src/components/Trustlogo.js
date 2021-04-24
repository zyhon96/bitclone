import React from 'react';
import { ReactComponent as HmallLogo } from '../svgss/Hmall.svg';
import { ReactComponent as KoticoLogo } from '../svgss/Kotico.svg';
import { ReactComponent as IgboLogo } from '../svgss/Igbooil.svg';
import { ReactComponent as CarojoLogo } from '../svgss/Carojoii.svg';
import { ReactComponent as KtLogo } from '../svgss/Group 4.svg';
import { ReactComponent as ShapeLogo } from '../svgss/Shape.svg';
import { ReactComponent as ShinhanLogo } from '../svgss/Shinhan.svg';
import { ReactComponent as ChinkoLogo } from '../svgss/People.svg';
import { ReactComponent as HeadLogo } from '../svgss/Head.svg';
import { ReactComponent as DaumLogo } from '../svgss/Daum.svg';
import { ReactComponent as SaraminLogo } from '../svgss/Group 9.svg';
import { ReactComponent as CgvLogo } from '../svgss/Cgv.svg';
import { ReactComponent as SkLogo } from '../svgss/Telecom.svg';
import { ReactComponent as SinkoLogo } from '../svgss/Group 13.svg';
import { ReactComponent as MessageLogo } from '../svgss/Group 14.svg';
import { ReactComponent as KasaLogo } from '../svgss/Kasa.svg';
import { ReactComponent as BtcLogo } from '../svgss/Xtbc.svg';
import { ReactComponent as OneLogo } from '../svgss/1b.svg';
import { ReactComponent as WifiLogo } from '../svgss/Wifi.svg';





function Trustlogo() {
    return (
        <div className="trustlogo">
            <div className="logo-one">
                <HmallLogo />
                <CarojoLogo />
                <KoticoLogo />
                <IgboLogo />
                <CarojoLogo />
            </div>
            <div className="logo-two">
                <KtLogo />
                <ShapeLogo />
                <ShinhanLogo />
                <ChinkoLogo />
                <HeadLogo />
            </div>
            <div className="logo-three">
                <DaumLogo />
                <SaraminLogo />
                <CgvLogo />
                <SkLogo />
                <SinkoLogo />
            </div>
            <div className="logo-four">
                <MessageLogo />
                <KasaLogo />
                <BtcLogo />
                <OneLogo />
                <WifiLogo />
            </div>
            

            <div className="getcoins2">
                <div className="box1">
                    <button> <h4>BUY COIN</h4> </button>
                </div>
                <div className="box2">
                    <button> <h4> SELL COIN</h4> </button>
                </div>
            </div>
            <div className="questions">

                <h3>Got Questions?</h3>
            </div>

        </div>
    )
}

export default Trustlogo


