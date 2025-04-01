import React from 'react';
import heroImage from '../../assets/Last.png'
import Searchbar from './Searchbar';

const Hero = () => {
    return (
        <div className='mt-20  '>
            <div className='flex flex-col md:flex-row justify-between gap-20'>
                <div className='w-[100%] md:w-[50%]'>
                    <h1 className='text-2xl md:text-5xl mb-5 text-bold mt-10 md:ms-0'>Up Your <span className='text-green-700'>Skills</span> To <span className='text-green-800'>Advance</span> Your <span className='text-green-900'>Career</span> Path</h1>
                    <p className='text-lg mb-5 text-justify md:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cupiditate eius ad nam obcaecati perspiciatis aliquam veniam magnam quia? Distinctio!</p>
                    <button className='bg-green-700 cursor-pointer hover:bg-blue-600 transition px-4 py-2 text-white rounded'>Get Started</button>
                </div>
               <img className='h-80 lg:h-85 xl:h-90     md:h-85  md:left-0 xl:left-15 md:top-1 ' src={heroImage} alt="" />
            </div>
            <Searchbar/>
        </div>
    );
};

export default Hero;