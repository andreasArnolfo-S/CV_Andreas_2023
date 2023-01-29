import React, { FC } from 'react';
import styles from './Parcours.module.css';
import { ParallaxLayer } from '@react-spring/parallax';

interface ParcoursProps { }

const Parcours: FC<ParcoursProps> = () => (
  <>
    <ParallaxLayer offset={0} speed={1} className='flex justify-center'>
      <h1 className='text-5xl font-bold text-center w-full text-base-600 myFont'>Mon parcours</h1>
    </ParallaxLayer>
    <ParallaxLayer offset={0.8} speed={1.3} className='flex justify-center'>
      <ul className="steps steps-vertical">
        <li className="step step-secondary">CAP mécanicien aéronautique (Obtenu)</li>
        <li className="step step-secondary">Bac professionnel mécanicien aéronautique (Obtenu)</li>
        <li className="step step-accent">Reconversion professionnelle</li>
        <li className="step step-primary">Bac +2 développeur web et mobile (Obtenu)</li>
        <li className="step step-primary">Stage chez VisioGreen (Ionic 3)</li>
        <li className="step step-primary">Stage chez CapFinances (Ionic 3)</li>
        <li className="step step-primary">Employé 2 ans chez régulvar.inc (Canada)</li>
        <li className="step step-primary">Bac +4 développeur front-end react (En cours. Fin le 17/02/2023)</li>
      </ul>
    </ParallaxLayer>
  </>
);

export default Parcours;
