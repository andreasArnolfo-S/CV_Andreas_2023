import { Parallax } from "@react-spring/parallax";
import React from "react";
import Navbar from "../../components/Navbar/Navbar"
import Portfolio from './../../components/portfolio/portfolio';

const MobilePortfolio = () => {
     return (
          <>
               <Parallax pages={1.5} className='scroll-auto'>
                    <Portfolio />
               </Parallax>
          </>
     );
};

export default MobilePortfolio;