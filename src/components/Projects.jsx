import React from 'react';
import weatherImg from '../../src/assets/projects/weather.jpg';
import netflixImg from '../../src/assets/projects/netflix.jpg';
import twitchImg from '../../src/assets/projects/twitch.jpg';
import calculatorImg from '../../src/assets/projects/calculator.jpg';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#00bfff]'>
          Projects
        </p>
        <h2 className='py-4 text-gray-500'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {/*
          <ProjectItem
            title='Netflix Clone'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
          />
          <ProjectItem
            title='Twitch Clone'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
          />
          <ProjectItem
            title='Weather App'
            backgroundImg={weatherImg}
            projectUrl='/weather'
          />
          <ProjectItem
            title='Basic Calculator'
            backgroundImg={calculatorImg}
            projectUrl='/calculator'
          />
          */}

          <ProjectItem title='Netflix Clone' backgroundImg={netflixImg} />
          <ProjectItem title='Twitch Clone' backgroundImg={twitchImg} />
          <ProjectItem title='Weather App' backgroundImg={weatherImg} />
          <ProjectItem title='Basic Calculator' backgroundImg={calculatorImg} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
