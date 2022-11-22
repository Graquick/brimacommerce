import React from 'react'

const Footer = () => {

    let d: Date = new Date();
    let y: number = d.getFullYear();

  return (
    <footer className='absolute bottom-0 self-center w-full bg-white h-fit'>
      <p className="text-[9px] text-white text-justify w-fit mix-blend-difference cursor-default">
        &copy; {y} Brima Freeman, All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer