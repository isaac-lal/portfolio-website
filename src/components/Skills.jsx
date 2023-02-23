import React from 'react';
import HTML_IMG from '../../src/assets/skills/html.png';
import CSS_IMG from '../../src/assets/skills/css.png';
import JavaScript_IMG from '../../src/assets/skills/javascript.png';
import React_IMG from '../../src/assets/skills/react.png';
import Tailwind_IMG from '../../src/assets/skills/tailwind.png';
import MongoDB_IMG from '../../src/assets/skills/mongo.png';
import Nodejs_IMG from '../../src/assets/skills/node.png';
import Firebase_IMG from '../../src/assets/skills/firebase.png';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#00bfff]'>
          Skills
        </p>
        <h2 className='py-4 text-gray-500'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-lg shadow-gray-100 rounded-xl hover:scale-105 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <a
                  href='https://www.w3schools.com/html/'
                  target='_blank'
                  rel='noreferrer'
                >
                  {' '}
                  <img src={HTML_IMG} width='64' height='64' alt='HTML' />
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
                  <img src={CSS_IMG} width='64' height='64' alt='CSS' />
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
                  <img
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
                <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
                  <img src={React_IMG} width='64' height='64' alt='React' />
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
                  <img
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
                  href='https://www.mongodb.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={MongoDB_IMG} width='64' height='64' alt='MongoDB' />
                </a>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-gray-100 rounded-xl hover:scale-105 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <a
                  href='https://nodejs.org/en/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={Nodejs_IMG} width='64' height='64' alt='Node.js' />
                </a>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Node.js</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-lg shadow-gray-100 rounded-xl hover:scale-105 hover:shadow-[#00bfff] hover:text-[#00bfff] ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <a
                  href='https://firebase.google.com/?gclid=Cj0KCQiAutyfBhCMARIsAMgcRJQJgNK1NyUb_C2Kq849DDx0Sa4jhjFDFGnXM0ywnqhGGFDtNQKSqtUaAiYdEALw_wcB&gclsrc=aw.ds'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src={Firebase_IMG}
                    width='64'
                    height='64'
                    alt='Firebase'
                  />
                </a>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
