import React from 'react';
import logo from '../../assets/LMS-removebg-preview.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-20'>
            <hr className='text-gray-300' />
            <div className='flex flex-col md:flex-row items-start px-8 lg:px-0 justify-center gap-10 lg:gap-32  '>
                <div className='flex flex-col lg:items-start items-center  lg:w-1/3  '>

                   <Link onClick={()=>scrollTo(0,0)} to='/'><img className='w-30 cursor-pointer' src={logo} alt="" /></Link>
                    <p className='text-center lg:text-left text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut optio ea labore hic temporibus iusto.</p>


                </div>
                <div className='flex flex-col lg:items-start items-center w-full lg:w-1/2 '>
                    <h2 className='mb-2 text-xl'>Company</h2>
                    <ul className='flex flex-col gap-2 text-center lg:text-start'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className='flex flex-col lg:items-start item-center w-full lg:w-1/3 gap-4 '>
                    <h2 className='text-xl text-center lg:text-start '>Subscribe to our newsletter</h2>
                    <p className='w-60 md:w-full text-center lg:text-start'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className='flex gap-2'>
                        <input className='border rounded outline-none w-40 md:w-full shadow-none px-2 py-1' type='text' placeholder='Enter Your Email'/>
                        <button className=' cursor-pointer hover:bg-blue-600 text-white px-2 py-1 rounded border-[#20B486] bg-[#20B486]'>Subscribe</button>
                    </div>


                </div>
            </div>
            <hr className='mt-5 text-gray-300' />
            <p className='text-center mt-2'> Copyright 2025 @ Jesmin Chakma. All Rights Reserved </p>
        </div>
    );
};

export default Footer;