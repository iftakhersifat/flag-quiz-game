import { div } from 'framer-motion/client';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Navbar from './Navbar';

const NotFound = () => {
    useEffect(() => {
        document.title = "Not Found | AppNest";
      }, []);

    const navigate = useNavigate();
    const handelButton =()=>{
        navigate("/")
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto text-center space-y-4 mt-20'>
            <img className='w-[400px] mx-auto animate-pulse  animate-fade-in delay-100' src="/assets/page-not-found.avif" alt="" />
            <h1 className='text-2xl text-red-500 font-bold'>404 Error : Page not found</h1>
            <button onClick={handelButton} className='btn bg-amber-500 text-white px-6 rounded-lg text-[16px]'>Go to Home</button>
        </div>
        </div>
    );
};

export default NotFound;