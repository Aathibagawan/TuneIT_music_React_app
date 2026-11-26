
import React from 'react';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';

const Navbar = () => {

  return (
    <div className="w-full h-[80px] bg-gray-900 border-b-2 border-[#8B28E4]">
      <nav className="w-full h-full flex justify-between items-center px-10">

        {/* Logo Component */}
        <Logo />

        {/* Menu Component */}
        <Menu />

      </nav>
    </div>
  );

};

export default Navbar;
