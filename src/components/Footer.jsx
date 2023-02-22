import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col'>
      <footer
        className='
        translate-y-28	
             text-3xl text-gray-400 text-center
             font-bold
             border-t-4 border-gray-500
             inset-x-0
             bottom-0
             p-4'
      >
        Created by <span className='text-[#00bfff]'>Isaac Lal</span>, © 2023
      </footer>
    </div>
  );
};

export default Footer;
