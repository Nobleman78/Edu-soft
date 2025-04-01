import React from 'react';
import { FiArrowRight } from "react-icons/fi";


const Calltoaction = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-center mb-2 text-4xl font-semibold'>Learn anything, anytime, anywhere</h2>
            <p className='text-center'>There is no boundary of learning. You can learn anything around yours. Just choice right things and move on with dedication.</p>
            <div className='flex gap-4 item-center justify-center mt-5 '>
                <button className='bg-green-700 hover:bg-blue-600 px-3 py-2 text-white rounded cursor-pointer'>Get Started</button>
                <div className='flex items-center text-center gap-2  '>
                    <button className='cursor-pointer'>Learn more </button>
                    <FiArrowRight className='mt-1' />
                </div>
            </div>
         
        </div>
           
    );
};

export default Calltoaction;