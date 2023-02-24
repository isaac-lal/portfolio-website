import React from 'react';
import AboutImg from '../../src/assets/general/about.jpeg';
import Slide from 'react-reveal';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <Slide left cascade>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <p className='uppercase text-base sm:text-lg tracking-widest text-[#00bfff]'>
              About
            </p>
            <h2 className='py-2 sm:py-4 text-2xl sm:text-3xl text-gray-500'>
              Who I Am
            </h2>
            <p className='text-sm sm:text-base py-2 text-gray-300'>
              I was always fascinated with websites ever since I was a kid
              watching videos on youtube.com, searching things up on google.com,
              playing games on multiple websites, and more. I loved how
              technology made the ideas of websites come to life, but I never
              really understood how it was made. I knew I wanted to be a part of
              the process for years, but I really haven't gotten my head engaged
              in it until August 2022.{' '}
            </p>

            <p className='text-sm sm:text-base py-2 text-gray-300'>
              With the goal of creating my own professional website, I had
              decided to learn about{' '}
              <span className='text-[#00bfff]'>HTML and CSS</span> to start.
              These two technologies helped me to create a very basic website
              with limited functionality, but still looked decent. After that, I
              have devoted most of my time in mastering{' '}
              <span className='text-[#00bfff]'>JavaScript</span> and concepts
              like if-statements, for-loops, logic, and transitioning into
              learning about Data Structures & Algorithms, along with the
              Document Object Model (DOM). After JavaScript was done, I am now
              using my time to learn everything about{' '}
              <span className='text-[#00bfff]'>React</span> and styling with{' '}
              <span className='text-[#00bfff]'>Tailwind CSS</span>.{' '}
            </p>

            <p className='text-sm sm:text-base py-2 text-gray-300'>
              In my experience being a front-end developer, I have loved all the
              technologies that I am using and how it's evolving my creativity
              and making me more efficient overall and unlocking my designing
              potential. I am now mastering my craft in front-end development by
              learning <span className='text-[#00bfff]'>Next.js</span> and other
              tools that will speed up the production of design. I definitely am
              loving the process of Web Development and it really helps me to
              appreciate the product that I create in the end.
            </p>
          </div>
          <div className='w-full h-auto m-auto shadow-xl shadow-gray-100 rounded-xl flex items-center justify-center p-4 hover:scale-105 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
            <img src={AboutImg} className='rounded-xl' alt='/' />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default About;
