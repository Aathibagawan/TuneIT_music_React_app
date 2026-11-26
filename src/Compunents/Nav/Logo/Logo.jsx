
import React from 'react';
import { Link } from 'react-router-dom';


const Logo = () => {
  return (
    <Link to="/" className="text-white text-2xl font-bold">
       <img
        src="/TuneIT_logo.png"
        alt="TunIT Logo"
        className="w-[200px] h-auto object-contain"
      />
    </Link>
  );
};

export default Logo;
