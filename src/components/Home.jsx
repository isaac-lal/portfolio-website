import React from 'react';
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Fade from 'react-reveal';

const Home = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <Fade top duration={3000} distance='30%'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <div>
            <p className='tracking-widest text-gray-500 text-sm sm:text-base'>
              Welcome, my name is
            </p>
            <h1 className='text-4xl sm:text-5xl py-1 sm:py-4 text-gray-400'>
              <span className='text-[#00bfff]'>Isaac Lal</span>
            </h1>
            <h2 className='py-4 justify-center flex text-base sm:text-lg text-gray-400'>
              <TypeAnimation
                sequence={[
                  'A Developer',
                  3500,
                  'A Coder',
                  3500,
                  'A Website Creator',
                  3500,
                  'A Tech Enthusiast',
                  3500,
                  'A Digital Consumer',
                  3500,
                  'A Nerd',
                  3500,
                  'A Nice Person',
                  3500,
                ]}
                wrapper='div'
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2em' }}
              />
            </h2>
            <p className='text-sm sm:text-base py-2 sm:py-4 pb-10 sm:pb-20 text-gray-300 sm:max-w-[70%] m-auto'>
              I'm learning about the technologies used to build beautiful,
              stunning, and responsive websites to show to others. I currently
              specialize in front-end visual aspects of the website, and I am
              continuing to learn more tools to master my understanding in the
              art of designing a website.
            </p>
            <p className='text-sm sm:text-base uppercase tracking-widest text-[#00bfff]'>
              Let's Connect
            </p>
            <div className='text-base sm:text-lg flex items-center justify-between max-w-[330px] m-auto py-4'>
              <a
                href='https://www.linkedin.com/in/isaac-lal/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href='https://github.com/isaac-lal'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                  <FaGithub />
                </div>
              </a>
              <a
                href='https://www.instagram.com/lalify8/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                  <AiOutlineInstagram />
                </div>
              </a>
              <a
                href='mailto:isaaclal124@gmail.com'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-100 p-6 cursor-pointer hover:scale-110 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
                  <AiOutlineMail />
                </div>
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
