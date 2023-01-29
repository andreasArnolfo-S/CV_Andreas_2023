import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './portfolio.css';
import { ParallaxLayer } from '@react-spring/parallax';

interface PortfolioProps { }

const Portfolio: FC<PortfolioProps> = () => {
  const portfolioItems = [
    {
      title: 'Booki',
      description: 'Transformez une maquette en site web avec HTML & CSS',
      image: 'https://camo.githubusercontent.com/090245d84c3bff798ba5844825ea363cd59560964adc741585b699ca3d8d7c03/68747470733a2f2f757365722e6f632d7374617469632e636f6d2f75706c6f61642f323032312f30392f32392f31363332393238303334333035315f4465736b746f702532302d253230312e706e67',
      url: 'https://github.com/andreasArnolfo-S/P2_Andreas_code'
    },
    {
      title: 'Ohmyfood!',
      description: 'Dynamisez une page web avec des animations CSS',
      image: 'https://camo.githubusercontent.com/ddd91e114474e932046515ff52197b87c834e5232f93f0fe2ba0a1ab94ec131e/68747470733a2f2f757365722e6f632d7374617469632e636f6d2f75706c6f61642f323032302f30382f32342f31353938323630353930383431385f4d61717565747465732532304f686d79666f6f642e6a7067',
      url: 'https://github.com/andreasArnolfo-S/AndreasArnolfo_3_15012022'
    },
    {
      title: 'GameOn',
      description: 'Créez une landing page avec Javascript',
      image: 'https://user.oc-static.com/upload/2021/12/15/16395717662959_HomePage.png',
      url: 'https://github.com/andreasArnolfo-S/GameOn-website-FR'
    },
    {
      title: 'FishEye',
      description: 'Créez un site web de photographes',
      image: 'https://user.oc-static.com/upload/2022/10/14/16657380159236_Index%20%281%29.png',
      url: 'https://github.com/andreasArnolfo-S/Fisheye-P6'
    },
    {
      title: 'Les petits plats',
      description: 'Créez un site de recettes de cuisine',
      image: 'https://logic-fabric.github.io/logic-fabric/img/projects/les-petits-plats.jpg',
      url: 'https://github.com/andreasArnolfo-S/P7-Les-Petits-Plats'
    },
    {
      title: 'Billed',
      description: 'Débuggez et testez un SaaS RH',
      image: 'https://user.oc-static.com/upload/2020/08/14/15973967670682_image1.png',
      url: 'https://github.com/andreasArnolfo-S/p9-Front'
    },
    {
      title: 'Learn@Home',
      description: 'Définissez les besoins pour une app de soutien scolaire',
      image: 'https://user.oc-static.com/upload/2020/08/14/15973967670682_image1.png',
      url: 'https://github.com/andreasArnolfo-S/P10---Learn-Home'
    },
    {
      title: 'Kasa',
      description: 'Développez une application Web avec React et React Router',
      image: 'https://user.oc-static.com/upload/2022/06/24/16560899769906_FR_811_P8_Banner-Kasa%20%281%29.png',
      url: 'https://github.com/andreasArnolfo-S/p11-Kasa'
    },
    {
      title: 'SportSee',
      description: "Développez un tableau de bord d'analytics avec React",
      image: 'https://cdn.discordapp.com/attachments/978413517780697141/1068922757372465225/image.png',
      url: 'https://github.com/andreasArnolfo-S/p12-SportSee'
    },
    {
      title: 'Argent Bank',
      description: 'Utilisez une API pour un compte utilisateur bancaire avec React',
      image: 'https://rayan-dahmena.fr/static/media/main-background-p13.87301039cd7575d95251.png',
      url: 'https://github.com/andreasArnolfo-S/p13-ArgentBank'
    },
    {
      title: 'WealthHealth',
      description: 'Faites passer une librairie jQuery vers React',
      image: 'https://user.oc-static.com/upload/2021/10/14/16605300000000_WealthHealth.png',
      url: 'https://github.com/andreasArnolfo-S/p14-wealthhealth'
    },
    {
      title: 'CV',
      description: 'Créez mon cv',
      image: 'https://cdn.discordapp.com/attachments/978413517780697141/1069009019584385054/image.png',
      url: 'https://github.com/andreasArnolfo-S/CV_Andreas_2023'
    },


  ];
  return (
    <>
    <ParallaxLayer offset={0} speed={1.6} className="flex flex-wrap justify-center gap-5">
      <h1 className='text-5xl font-bold text-center w-full text-base-600 myFont'>Mes realisations</h1>
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
