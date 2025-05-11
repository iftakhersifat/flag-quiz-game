import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between mt-10 mb-10'>
            <div>
                <h1 className='text-3xl font-bold text-amber-500'>Flag Quiz Game</h1>
            </div>
            <div className='space-x-4 flex items-center justify-center'>
                <NavLink to="/" className={({isActive})=> isActive ? "text-amber-500 text-[18px] underline" : "text-[18px"}>Home</NavLink>
                <NavLink to="/about" className={({isActive})=> isActive ? "text-amber-500 text-[18px] underline" : "text-[18px"}>About Us</NavLink>
            </div>
            
        </div>
    );
};

export default Navbar;