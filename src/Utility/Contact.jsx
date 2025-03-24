import React from 'react';
import contact from '../assets/contact.png'

const Contact = () => {
    return (
        <div className='border-t mt-10'>
            <div className='flex items-center text-center my-10 gap-2 justify-center text-3xl '>
                <p><span className='text-gray-600'>CONTACT</span> <span className='font-semibold'>US</span></p>
                <p className='w-8 sm:w-11 h-[1px] bg-black'></p>

            </div>
            <div className='flex gap-5 md:gap-10  flex-col md:flex-row'>
                <div className=' md:w-1/2' >
                    <img className='w-100 lg:mx-30  my-10' src={contact} alt="" />
                </div>
                <div className='text-gray-600 mt-10 lg:mt-0 lg:py-20 md:w-1/2'>
                    <p className='text-2xl text-bold'>Our Location</p>
                    <p className=' w-50 mb-5'>  54709 Willms Station
                        Suite 350, Washington, USA</p>
                    <p>Tel: (415) 555-0132</p>
                    <p className='mb-5'>Email: admin@forever.com</p>
                    <p className='mb-5 font-semibold text-2xl'>Careers at Forever</p>
                    <p className='mb-5'>Learn more about our teams and job openings.</p>
                    <button className='px-6 py-3 border hover:bg-black hover:text-white transition duration-300
                '>Explore Jobs</button>
                </div>
            </div>

        </div>
    );
};

export default Contact;