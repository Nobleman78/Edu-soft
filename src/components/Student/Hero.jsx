import React from 'react';
import heroImage from '../../assets/hero-removebg-preview.png'

const Hero = () => {
    return (
        <div className='mt-10  '>
            <div className='flex flex-col md:flex-row justify-between gap-20'>
                <div className='w-[100%] md:w-[50%]'>
                    <h1 className='text-2xl md:text-5xl mb-5 text-bold mt-10 md:ms-0'>Up Your <span className='text-[#20B486]'>Skills</span> To <span className='text-[#20B486]'>Advance</span> Your <span className='text-[#20B486]'>Career</span> Path</h1>
                    <p className='text-lg mb-5 text-justify md:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cupiditate eius ad nam obcaecati perspiciatis aliquam veniam magnam quia? Distinctio!</p>
                    <button className='bg-[#20B486] px-4 py-2 text-white rounded'>Get Started</button>
                </div>
                <span className='md:w-[33%] relative bg-[#20B486] h-100 rounded-[50%]'> <img className=' h-80 left-8 top-5 md:h-90 absolute md:left-15 md:top-1 ' src={heroImage} alt="" /></span>
            </div>
        </div>
    );
};

export default Hero;