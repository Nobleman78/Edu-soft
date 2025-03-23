import React from 'react';
import computer from '../assets/computer.jpeg'

const About = () => {
    return (
        <div>
            <div className='flex items-center text-center my-10 gap-2 justify-center text-3xl '>
                <p><span className='text-gray-600'>ABOUT</span> <span className='font-semibold'>US</span></p>
                <p className='w-8 sm:w-11 h-[1px] bg-black'></p>

            </div>
            <div className='flex flex-col md:flex-row gap-10 '>
                <div className='md:w-1/2   flex  justify-center'>
                    <img className='w-100 ' src={computer} alt="" />
                </div>
                <div className='md:w-1/2  '>
                    <p className=' lg:w-[500px] text-justify text-xl mt-10'>Edu-Soft is a leading platform that provides computer science resources and coding challenges for programmers and technology enthusiasts, along with interview and exam preparations for upcoming aspirants. With a strong emphasis on enhancing coding skills and knowledge, it has become a trusted destination for over 12 million plus registered users worldwide. The platform offers a vast collection of tutorials, practice problems, interview tutorials, articles, and courses, covering various domains of computer science.</p>
                </div>

            </div>


        </div>
    );
};

export default About;