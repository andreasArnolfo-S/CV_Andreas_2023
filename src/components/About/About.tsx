import React, { FC } from 'react';
import './About.css';
import { ParallaxLayer } from '@react-spring/parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faEnvelope, faPhone, faHeart, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faBasketballBall, faMusic, faFilm, faTableTennis } from '@fortawesome/free-solid-svg-icons';


interface AboutProps { }

const About: FC<AboutProps> = () => (
  <>
    <ParallaxLayer offset={0.1} speed={1.2} className="flex justify-center">
      <h1 className='text-5xl font-bold text-center w-full text-base-600 myFont'>Informations personnelles</h1>
    </ParallaxLayer>
    <ParallaxLayer offset={0.4} speed={1.8} className="flex justify-around flex-row-reverse flex-wrap items-center aboutme">
      <ul>
        <li className="text-2xl font-bold text-base-600">
          <FontAwesomeIcon icon={faUser} />  <span className="text-base-500">Andreas Arnolfo</span>
        </li>
        <li className="text-2xl font-bold text-base-600">
          <FontAwesomeIcon icon={faCalendarAlt} />  <span className="text-base-500">25 ans</span>
        </li>

        <li className="text-2xl font-bold text-base-600">
          <FontAwesomeIcon icon={faPhone} /> <span className="text-base-500">07 49 11 10 61</span>
        </li>
        <li className="text-2xl font-bold text-base-600">
          <FontAwesomeIcon icon={faHeart} /> <span className="text-base-500">Celibataire</span>
        </li>
      </ul>
      <img className="mask mask-squircle w-1/4 h-2/4 min-w-44 imgAbout" src="https://cdn.discordapp.com/attachments/978413517780697141/1035218403272699995/75388590_139510804134446_6832687659193755631_n.jpg" />

      <ul >
        <h1 className='text-2xl font-bold text-base-600 underline myFont'>Hobbies</h1>

        <li className="text-2xl font-bold text-base-600">
          <FontAwesomeIcon icon={faGamepad} /> <span className="text-base-500">Jeux video</span>
        </li>
        <li className="text-2xl font-bold text-base-600">
          <FontAwesomeIcon icon={faTableTennis} /> <span className="text-base-500">Badminton</span>
        </li>
        <li className="text-2xl font-bold text-base-600">
          <FontAwesomeIcon icon={faMusic} /> <span className="text-base-500">MAO</span>
        </li>
        <li className="text-2xl font-bold text-base-600">
          <FontAwesomeIcon icon={faFilm} /> <span className="text-base-500">Film/series</span>
        </li>
      </ul>
    </ParallaxLayer>
    


  </>
);

export default About;
