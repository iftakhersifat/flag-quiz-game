import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between mt-10 mb-10'>
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>        
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">        
                <NavLink to="/" className={({isActive})=> isActive ? "text-amber-500 text-[18px] underline" : "text-[18px"}>Home</NavLink>
                <NavLink to="/about" className={({isActive})=> isActive ? "text-amber-500 text-[18px] underline" : "text-[18px"}>About Us</NavLink>
            </ul>  

            </div>
            <h1 className='text-2xl font-bold text-amber-500'>Flag Quiz Game</h1>
            </div> 

            <div className='space-x-4 flex items-center justify-center md:flex hidden'>
                <NavLink to="/" className={({isActive})=> isActive ? "text-amber-500 text-[18px] underline" : "text-[18px"}>Home</NavLink>
                <NavLink to="/about" className={({isActive})=> isActive ? "text-amber-500 text-[18px] underline" : "text-[18px"}>About Us</NavLink>
                
            </div>
            
        </div>
    );
};

export default Navbar;