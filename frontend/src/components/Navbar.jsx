import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 border border-black backdrop-blur-[10px] z-50 left-0 w-full px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="" alt="Logo" className='w-6 h-6 border border-black rounded-full' />
          <span className="font-bold text-xl tracking-tight text-slate-900">The VoltEdge</span>
        </Link>
        <div className='flex gap-8'>
        <div className="text-md font-medium text-slate-500 hover:text-blue-600 cursor-pointer">
          About
        </div>
        <div className="text-md font-medium text-slate-500 hover:text-blue-600 cursor-pointer">
          Contact Us
        </div>
        </div>
      </nav>
  );
};

export default Navbar;
