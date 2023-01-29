import React, { FC } from 'react';
import './Skills.css';
import { ParallaxLayer } from '@react-spring/parallax';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
interface SkillsProps { }

const data = [
  { name: 'JS', value: 80 },
  { name: 'React', value: 80 },
  { name: 'HTML', value: 90 },
  { name: 'CSS', value: 90 },
  { name: 'Nodejs', value: 20 },
  { name: 'Firebase', value: 50 },
  { name: 'Redux', value: 60 },
  { name: 'Angular', value: 40 },
  { name: 'Scss', value: 70 },
];


const Skills: FC<SkillsProps> = () => (
  <div>
    <ParallaxLayer offset={0} speed={1.3} className="flex justify-center">
      <h1 className='text-5xl font-bold text-center w-full text-base-600 myFont'>Mes compétences !</h1>
    </ParallaxLayer>
    <ParallaxLayer offset={0.9} speed={2.2} className='flex flex-wrap justify-center gap-10 skills'>
      {data.map((item, index) => (
        <div key={index} className='skil'>
          <CircularProgressbar 
            value={item.value}
            text={`${item.name}`}
            styles={buildStyles({
              textColor: 'pink',
              pathColor: 'primary',
              trailColor: 'accent',
            })}
          />
        </div>
      ))}
    </ParallaxLayer>
  </div>
);

export default Skills;
