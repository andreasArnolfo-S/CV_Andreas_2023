import React, { FC } from 'react';
import './Hero.css';
import { ParallaxLayer } from '@react-spring/parallax';
import { url } from 'inspector';



interface HeroProps { }

const Hero: FC<HeroProps> = () => {

  return (
    <div className="hero min-h-screen bg-base-200" style={{backgroundImage: `url("https://images.unsplash.com/photo-1673255177884-3c9e2510f1fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8")`, backgroundAttachment: 'fixed', backgroundSize: 'cover', }}>
      <div className="hero-content text-center ">
        <ParallaxLayer offset={0.6} speed={1.5} className="flex justify-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold myFont">Bienvenue !</h1>
            <p className="py-6">Je m'appelle Andreas. Je suis développeur web spécialisé dans le développement front-end avec React. Je suis enthousiaste à l'idée de mettre mes compétences et mon expérience au service de votre entreprise.</p>
          </div>
        </ParallaxLayer>
      </div>
    </div>
  );
}

export default Hero;
