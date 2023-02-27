import React from 'react';
import weatherImg from '../../src/assets/projects/weather.jpg';
import netflixImg from '../../src/assets/projects/netflix.jpg';
import twitchImg from '../../src/assets/projects/twitch.jpg';
import spotifyImg from '../../src/assets/projects/spotify.jpg';
import ProjectItem from './ProjectItem';
import Roll from 'react-reveal/Roll';

const Projects = () => {
  return (
    <div id='projects' className='w-full lg:h-screen flex items-center'>
      <Roll distance='10%'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
          <p className='uppercase text-base sm:text-lg tracking-widest text-[#00bfff]'>
            Projects
          </p>
          <h2 className='py-2 sm:py-4 text-2xl sm:text-3xl text-gray-500'>
            What I've Built
          </h2>
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
            <ProjectItem title='Spotify Clone' backgroundImg={spotifyImg} />
            <ProjectItem title='Weather App' backgroundImg={weatherImg} />
          </div>
        </div>
      </Roll>
    </div>
  );
};

export default Projects;
