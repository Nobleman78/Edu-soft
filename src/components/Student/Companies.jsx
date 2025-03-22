import React from 'react';
import { assets } from '../../assets/assets';

const Companies = () => {
    return (
        <div className='mt-10 '>
            <h2 className='text-center'>Trusted by learners from</h2>
            <div className='flex flex-wrap gap items-center justify-center gap-2 md:gap-16  mt-10 '>
                <img className='w-20 md:w-28' src={assets.microsoft_logo} alt="" />
                <img className='w-20 md:w-28' src={assets.walmart_logo} alt="" />
                <img className='w-20 md:w-28' src={assets.adobe_logo} alt="" />
                <img className='w-20 md:w-28' src={assets.paypal_logo} alt="" />
            </div>
        </div>
    );
};

export default Companies;