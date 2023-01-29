import { Parallax,  ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import Navbar from "../../components/Navbar/Navbar"
import Portfolio from './../../components/portfolio/portfolio';

const MobilePortfolio = () => {
     return (
          <>
               <Parallax pages={3} className='scroll-auto'>
                    <ParallaxLayer offset={0} speed={0.1}>
                         <img className="w-80 h-80" src="https://media.discordapp.net/attachments/978413517780697141/1035330157323485194/unknown.png" alt="" />
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.4} speed={0.5}>
                         <Portfolio />
                    </ParallaxLayer>
               </Parallax>
          </>
     );
};

export default MobilePortfolio;