import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import React, { FC, useRef } from 'react';
import Hero from '../../components/Hero/Hero';
import './Home.css';
import Skills from './../../components/Skills/Skills';
import Contact from './../../components/Contact/Contact';
import About from './../../components/About/About';
import Portfolio from './../../components/portfolio/portfolio';
import Parcours from './../../components/Parcours/Parcours';
import { Link } from 'react-router-dom';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const parallax = useRef<IParallax>(null !)
  return (
  <div>
    <Parallax pages={6.1} ref={parallax} className='scroll-auto flex flex-col gap-36 mybg'>

      <ParallaxLayer offset={0} speed={1} factor={3} className='h-auto'>
        <Hero />
      </ParallaxLayer>

      <ParallaxLayer offset={0.99} speed={0.2}>
        <img className='w-56 h-56' src="https://media.discordapp.net/attachments/978413517780697141/1035346959122305025/unknown.png" alt="" />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0} factor={1/2} className='h-auto'>
        <About />
      </ParallaxLayer>
      <ParallaxLayer offset={1.4} speed={4} factor={3} className='h-auto flex justify-end'>
        <img className='w-80 h-80' src="https://media.discordapp.net/attachments/978413517780697141/1006007454288584754/0424dcbb-39cf-4a88-8703-1e58e0d3a306-937e4530-607b-4917-b799-ae98b5d79f28-v1.png" alt="" />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0} factor={1/2} className='h-auto'>
        <Skills />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0} factor={3} className='h-auto mobfolio'>
        <Portfolio />
      </ParallaxLayer>



      <ParallaxLayer offset={1.7} speed={1} factor={3} className='h-auto deskfolio flex justify-center'>
        <Link to='/portfolio' className='btn btn-primary'>Voir mon Portfolio</Link>
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0} factor={3} className='h-auto'>
        <Parcours />
      </ParallaxLayer>

      <ParallaxLayer offset={5} speed={0} factor={3} className='h-auto'>
        <Contact />
      </ParallaxLayer>

    </Parallax>
  </div>
);}

export default Home;
