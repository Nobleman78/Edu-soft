import React, { useState } from 'react';
import { BiDownArrowAlt } from "react-icons/bi";
import { IoCardSharp } from "react-icons/io5";
import visacard from '../assets/card-visa.svg'
import masterCard from '../assets/card-mastercard.svg'
import jcb from '../assets/card-jcb.svg'
import carddiscover from '../assets/card-discover.svg'
import cardamex from '../assets/card-amex.svg'

const Orders = () => {
    const [country, setCountry] = useState('Bangladesh');
    const [showCountry, setShowCountry] = useState(false);
    const [cardOpen, setCardOpen] = useState(false);
    const [paypalOpen, setPaypalOpen] = useState(false);
    return (
        <div className='mt-20'>
            {/* Right side div */}
            <div className='w-1/2 flex flex-col gap-3 px-4 '>
                <h2 className='text-xl'>CheckOut</h2>
                <p className='font-medium'>Billing Address</p>
                <p className='font-medium'>Country</p>
                <div className='flex items-center w-50 gap-3 rounded transition-transform border ' onClick={() => setShowCountry(!showCountry)}>
                    <input type="text" value={country} className='w-30 cursor-pointer outline-none shadow-none px-3 py-2' />
                    {
                        showCountry ? <BiDownArrowAlt className='rotate-180' /> : <BiDownArrowAlt />
                    }
                </div>
                {
                    showCountry && <div className='bg-white h-70 w-50 border rounded'>
                        <ul className='px-4 flex flex-col gap-1 cursor-pointer'>
                            <li onClick={() => { setCountry('India'), setShowCountry(false) }}>India</li>
                            <li onClick={() => { setCountry('Nepal'), setShowCountry(false) }}>Nepal</li>
                            <li onClick={() => { setCountry('USA'), setShowCountry(false) }}>USA</li>
                            <li onClick={() => { setCountry('Canada'), setShowCountry(false) }}>Canada</li>
                            <li onClick={() => { setCountry('England'), setShowCountry(false) }}>England</li>
                            <li onClick={() => { setCountry('Australia'), setShowCountry(false) }}>Australia</li>
                            <li onClick={() => { setCountry('France'), setShowCountry(false) }}>France</li>
                            <li onClick={() => { setCountry('Bangladesh'), setShowCountry(false) }}>Bangladesh</li>
                            <li onClick={() => { setCountry('South Africa'), setShowCountry(false) }}>South Africa</li>
                            <li onClick={() => { setCountry('China'), setShowCountry(false) }}>China</li>
                        </ul>
                    </div>
                }
                <div>
                    <h2>Payment Method</h2>
                    {/* Cards Method */}
                    <div className='flex justify-between w-70'>
                        <div className='flex gap-3 items-center'>
                            <p className='w-5 h-5 border-3 rounded-full'></p>
                            <IoCardSharp className='w-10 h-6' />
                            <p>Cards</p>

                        </div>
                        <div className='flex w-10 '>
                            
                            <img src={cardamex} alt="" />
                            <img src={visacard} alt="" />
                            <img src={masterCard} alt="" />
                            <img src={carddiscover} alt="" />
                            <img src={jcb} alt="" />
                        </div>
                    </div>
                    {/* Paypal Method */}
                    <div>

                    </div>
                </div>


            </div>
            {/* Left side div */}
            <div className='w-1/2'>

            </div>
        </div>
    );
};

export default Orders;
