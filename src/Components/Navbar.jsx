import React from 'react';
import { NavLink } from 'react-router'; 

const Navbar = () => {
    const getNavLinkClass = ({ isActive }) => 
        isActive ? "text-amber-500 text-[18px] underline" : "text-[18px]";

    return (
        <div className='bg-gray-100'>
            <div className="container mx-auto flex justify-between mt-10 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="Toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
                        <NavLink to="/about" className={getNavLinkClass}>About Us</NavLink>
                    </ul>
                </div>
                <img className='w-22' src="/assets/logo.png" alt="Flag Quiz Game Logo" />
                <h1 className='text-2xl whitespace-nowrap text-md ml-3 font-bold text-amber-500'>Flag Quiz Game</h1>
            </div>

            <div className="space-x-4 flex items-center justify-center md:flex hidden">
                <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
                <NavLink to="/about" className={getNavLinkClass}>About Us</NavLink>
            </div>
        </div>
        </div>
    );
};

export default Navbar;
