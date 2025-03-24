import React from 'react';
import ml from '../assets/ml.png'
import engineering from '../assets/engineer.png'
import ux from '../assets/ux-design.png'
import { Link } from 'react-router-dom';

const OurServices = () => {
    
    return (
        <div className='mt-10  '>
            <div className='flex text-xl gap-2 items-center justify-center text-center'>
                <p className=''>OUR SERVICES</p>
                <p className='w-8 sm:w-11 bg-black h-[1px]'></p>
            </div>
            <div className='flex items-center justify-between mt-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
                    <div className='px-4 py-4 rounded-xl bg-green-100'>
                        <div className='flex items-center justify-center gap-2'>
                            <img className='w-7' src={ml} alt="" />
                            <p className='text-3xl '>Machine Learning</p>
                        </div>
                        <div className='mt-4'>
                            <p className=' mt-10'> Machine learing focus of building system capable of learing from data.</p>
                            <Link to ='/machine-learning'> <button className='mt-5 text-white cursor-pointer bg-[#20B486] px-3 py-1 w-full rounded '>Explore</button></Link>
                        </div>
                    </div>
                    <div className='px-4 py-4 rounded-xl bg-blue-200'>
                        <div className='flex items-center justify-center gap-2'>
                            <img className='w-7' src={engineering} alt="" />
                            <p className='text-3xl '>Software Engineering</p>
                        </div>
                        <div className='mt-4'>
                            <p className=' mt-10'> Machine learing focus of building system capable of learing from data.</p>
                            <Link to='/software-engineering'><button className='mt-5 text-white cursor-pointer px-4 py-1 w-full rounded bg-blue-600 ' >Explore</button></Link>
                        </div>
                    </div>
                    <div className='px-4 py-4  rounded-xl bg-amber-200'>
                        <div className='flex items-center gap-2 justify-center'>
                            <img className='w-7' src={ux} alt="" />
                            <p className='text-2xl '>UX/UI Design</p>
                        </div>
                        <div className='mt-4'>
                            <p className='mt-10'> Machine learing focus of building system capable of learing from data.</p>
                            <button className='mt-5 px-4 py-1 text-white cursor-pointer bg-amber-500 w-full rounded'>Explore</button>
                        </div>
                    </div>

                </div>


            </div>





        </div>
    );
};

export default OurServices;