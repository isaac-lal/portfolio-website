import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col'>
      <div
        className='
        sticky
             text-3xl text-gray-400 text-center
             font-bold
             border-t-4 border-gray-500
             p-4'
      >
        Created by <span className='text-[#00bfff]'>Isaac Lal</span>, © 2023
      </div>
    </div>
  );
};

export default Footer;
