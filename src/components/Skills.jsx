import React from 'react';
import HTML_IMG from '../../src/assets/skills/html.png';
import CSS_IMG from '../../src/assets/skills/css.png';
import JavaScript_IMG from '../../src/assets/skills/javascript.png';
import React_IMG from '../../src/assets/skills/react.png';
import Tailwind_IMG from '../../src/assets/skills/tailwind.png';
import Vite_IMG from '../../src/assets/skills/vite.png';
import MongoDB_IMG from '../../src/assets/skills/mongo.png';
import Nextjs_IMG from '../../src/assets/skills/nextjs.png';
import Nodejs_IMG from '../../src/assets/skills/node.png';
import TypeScript_IMG from '../../src/assets/skills/typescript.png';
import Firebase_IMG from '../../src/assets/skills/firebase.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Zoom from 'react-reveal/Zoom';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <Zoom cascade duration={1500}>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <p className='uppercase text-base sm:text-lg tracking-widest text-[#00bfff]'>
            Skills
          </p>
          <h2 className='py-2 sm:py-4 text-2xl sm:text-3xl text-gray-500'>
            What I Can Do
          </h2>
          <div className='text-sm sm:text-base grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='p-6 shadow-lg shadow-gray-100 rounded-xl hover:scale-105 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <a
                    href='https://www.w3schools.com/html/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {' '}
                    <LazyLoadImage
                      src={HTML_IMG}
                      width='64'
                      height='64'
                      alt='HTML'
                    />
                  </a>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-lg shadow-gray-100 rounded-xl hover:scale-105 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <a
                    href='https://www.w3schools.com/css/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <LazyLoadImage
                      src={CSS_IMG}
                      width='64'
                      height='64'
                      alt='CSS'
                    />
                  </a>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-lg shadow-gray-100 rounded-xl hover:scale-105 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <a
                    href='https://www.javascript.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <LazyLoadImage
                      src={JavaScript_IMG}
                      width='64'
                      height='64'
                      alt='JavaScript'
                    />
                  </a>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-lg shadow-gray-100 rounded-xl hover:scale-105 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <a
                    href='https://reactjs.org/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <LazyLoadImage
                      src={React_IMG}
                      width='64'
                      height='64'
                      alt='React'
                    />
                  </a>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>React</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-lg shadow-gray-100 rounded-xl hover:scale-105 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <a
                    href='https://tailwindcss.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <LazyLoadImage
                      src={Tailwind_IMG}
                      width='64'
                      height='64'
                      alt='TailwindCSS'
                    />
                  </a>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Tailwind CSS</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-lg shadow-gray-100 rounded-xl hover:scale-105 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <a
                    href='https://vitejs.dev/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <LazyLoadImage
                      src={Vite_IMG}
                      width='64'
                      height='64'
                      alt='Vite'
                    />
                  </a>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Vite</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-lg shadow-gray-100 rounded-xl hover:scale-105 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <a
                    href='https://nextjs.org/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <LazyLoadImage
                      src={Nextjs_IMG}
                      width='64'
                      height='64'
                      alt='Next.js'
                    />
                  </a>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Next.js</h3>
                </div>
              </div>
            </div>
            <div className='p-6 shadow-lg shadow-gray-100 rounded-xl hover:scale-105 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <a
                    href='https://www.typescriptlang.org/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <LazyLoadImage
                      src={TypeScript_IMG}
                      width='64'
                      height='64'
                      alt='TypeScript'
                    />
                  </a>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>TypeScript</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Skills;
