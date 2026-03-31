import React from 'react';
import { CiShoppingCart } from "react-icons/ci";

const Navbar = ({cartCount}) => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="container navbar mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              
            </ul>
          </div>
          <a className="text-2xl text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold hidden md:block">DigiTools</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-8">
            <li className='cursor-pointer font-semibold'>Products</li>
            <li className='cursor-pointer font-semibold'>Features</li>
            <li className='cursor-pointer font-semibold'>Pricing</li>
            <li className='cursor-pointer font-semibold'>Testimonials</li>
            <li className='cursor-pointer font-semibold'>FAQ</li>
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <div className='text-4xl font-bold indicator'>
            {cartCount > 0 && <span className="indicator-item badge badge-secondary">{cartCount}</span>}
            <CiShoppingCart/>
          </div>
          <a className='font-semibold text-sm' href="/">Login</a>
          <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-white text-[16px] rounded-2xl px-4 py-3">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;