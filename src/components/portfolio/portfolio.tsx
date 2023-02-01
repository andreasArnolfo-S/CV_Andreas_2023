import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';
import { ParallaxLayer } from '@react-spring/parallax';

interface PortfolioProps { }

const Portfolio: FC<PortfolioProps> = () => {
  const portfolioItems = [
    {
      title: 'Booki',
      description: 'Transformer une maquette en site web avec HTML & CSS',
      image: 'https://camo.githubusercontent.com/090245d84c3bff798ba5844825ea363cd59560964adc741585b699ca3d8d7c03/68747470733a2f2f757365722e6f632d7374617469632e636f6d2f75706c6f61642f323032312f30392f32392f31363332393238303334333035315f4465736b746f702532302d253230312e706e67',
      url: 'https://github.com/andreasArnolfo-S/P2_Andreas_code'
    },
    {
      title: 'Ohmyfood!',
      description: 'Dynamiser une page web avec des animations CSS',
      image: 'https://camo.githubusercontent.com/ddd91e114474e932046515ff52197b87c834e5232f93f0fe2ba0a1ab94ec131e/68747470733a2f2f757365722e6f632d7374617469632e636f6d2f75706c6f61642f323032302f30382f32342f31353938323630353930383431385f4d61717565747465732532304f686d79666f6f642e6a7067',
      url: 'https://github.com/andreasArnolfo-S/AndreasArnolfo_3_15012022'
    },
    {
      title: 'GameOn',
      description: 'Créer une landing page avec Javascript',
      image: 'https://user.oc-static.com/upload/2021/12/15/16395717662959_HomePage.png',
      url: 'https://github.com/andreasArnolfo-S/GameOn-website-FR'
    },
    {
      title: 'FishEye',
      description: 'Créer un site web de photographes',
      image: 'https://user.oc-static.com/upload/2022/10/14/16657380159236_Index%20%281%29.png',
      url: 'https://github.com/andreasArnolfo-S/Fisheye-P6'
    },
    {
      title: 'Les petits plats',
      description: 'Créer un site de recettes de cuisine',
      image: 'https://logic-fabric.github.io/logic-fabric/img/projects/les-petits-plats.jpg',
      url: 'https://github.com/andreasArnolfo-S/P7-Les-Petits-Plats'
    },
    {
      title: 'Billed',
      description: 'Débugger et testez un SaaS RH',
      image: 'https://user.oc-static.com/upload/2020/08/14/15973967670682_image1.png',
      url: 'https://github.com/andreasArnolfo-S/p9-Front'
    },
    {
      title: 'Learn@Home',
      description: 'Définisser les besoins pour une app de soutien scolaire',
      image: 'data:image/png;base64,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',
      url: 'https://github.com/andreasArnolfo-S/P10---Learn-Home'
    },
    {
      title: 'Kasa',
      description: 'Développer une application Web avec React et React Router',
      image: 'https://user.oc-static.com/upload/2022/06/24/16560899769906_FR_811_P8_Banner-Kasa%20%281%29.png',
      url: 'https://github.com/andreasArnolfo-S/p11-Kasa'
    },
    {
      title: 'SportSee',
      description: "Développer un tableau de bord d'analytics avec React",
      image: 'https://cdn.discordapp.com/attachments/978413517780697141/1068922757372465225/image.png',
      url: 'https://github.com/andreasArnolfo-S/p12-SportSee'
    },
    {
      title: 'Argent Bank',
      description: 'Utiliser une API pour un compte utilisateur bancaire avec React',
      image: 'https://rayan-dahmena.fr/static/media/main-background-p13.87301039cd7575d95251.png',
      url: 'https://github.com/andreasArnolfo-S/p13-ArgentBank'
    },
    {
      title: 'WealthHealth',
      description: 'Faites passer une librairie jQuery vers React',
      image: 'data:image/jpeg;base64,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',
      url: 'https://github.com/andreasArnolfo-S/p14-wealthhealth'
    },
    {
      title: 'CV',
      description: 'Créer mon cv',
      image: 'https://cdn.discordapp.com/attachments/978413517780697141/1069009019584385054/image.png',
      url: 'https://github.com/andreasArnolfo-S/CV_Andreas_2023'
    },


  ];
  return (
    <>
    <ParallaxLayer offset={0} speed={1.6} className="flex flex-wrap justify-center gap-5">
      <h1 className='text-5xl font-bold text-center w-full text-base-600 myFont'>Mes réalisations</h1>
    </ParallaxLayer>
    <ParallaxLayer offset={0.5} speed={1.8} className="flex flex-wrap justify-center gap-5 folio">
      {portfolioItems.map((item, index) => (
        <div className="card card-compact w-96  bg-base-300 shadow-2xl">
          <figure><img src={item.image} alt="Shoes" className='h-96 w-full object-cover imgCard' /></figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              <a href={item.url} className="btn btn-primary">Voir le projet</a>
            </div>
          </div>
        </div>
      ))}
    </ParallaxLayer >
    </>
  );
}

export default Portfolio;
