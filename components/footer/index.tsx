import React from 'react'

const Footer = () => {

    let d: Date = new Date();
    let y: number = d.getFullYear();

  return (
    <footer className='self-center absolute bottom-0 w-full bg-black h-fit'>
      <p className="text-[9px] text-white text-justify w-fit cursor-default">
        &copy; {y} Brima Freeman, All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer