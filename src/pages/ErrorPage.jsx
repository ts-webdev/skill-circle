import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ErrorPage = () => {
    return (
        <div className=' '>
            <Navbar></Navbar>
            <div className='h-[75vh] flex flex-col gap-5 justify-center items-center'>
                <h1 className='font-bold text-9xl'>404</h1>
                <p className='text-4xl sm:text-5xl text-center'>☹️ Page Not Found</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;