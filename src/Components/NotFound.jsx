import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {
    useEffect(() => {
        document.title = "Not Found | AppNest";
      }, []);

    const navigate = useNavigate();
    const handelButton =()=>{
        navigate("/")
    }
    return (
        <div className='container mx-auto text-center space-y-4 mt-60'>
            <img className='w-80 mx-auto animate-pulse opacity-0 animate-fade-in delay-1000' src="/assets/oops-404-error.avif" alt="" />
            <h1 className='text-2xl text-red-500 font-bold'>404 Error : Page not found</h1>
            <button onClick={handelButton} className='btn bg-green-500 text-white px-6 rounded-lg text-[16px]'>Go to Home</button>
        </div>
    );
};

export default NotFound;