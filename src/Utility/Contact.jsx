import React from 'react';
import contactUs from '../assets/contact Us.jpg';

const Contact = () => {
    return (
        <div className='border-t mt-10'>
            {/* Header Section */}
            <div className='flex flex-col items-center py-12'>
                <h2 className=' flex items-center  gap-2 text-2xl md:text-3xl font-light mb-4 text-center'>
                    <span className='text-gray-500'>CONTACT</span>{' '}
                    <span className='font-semibold text-gray-800'>US</span>
                    <p className='w-8 sm:w-11 h-[1px] bg-black'></p>
                </h2>
            </div>

            {/* Content Section */}
            <div className='container mx-auto px-5 md:px-10 lg:px-20 py-10'>
                <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 items-center'>
                    {/* Image Section */}
                    <div className='lg:w-1/2'>
                        <img className='w-full h-auto  object-cover' style={{ minHeight: '400px' }} src={contactUs} alt="Contact us"
                        />
                    </div>

                    {/* Contact Info Section */}
                    <div className='lg:w-1/2 space-y-8'>
                        <div className='bg-white p-8 rounded-xl'>
                            <h3 className='text-2xl font-bold text-gray-800 mb-6'>Our Location</h3>
                            <div className='space-y-4 text-gray-600'>
                                <p className='flex items-start'>
                                    <svg className="w-6 h-6 mr-3 text-[#20B486]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    54709 Willms Station, Suite 350<br />Washington, USA
                                </p>
                                <p className='flex items-center'>
                                    <svg className="w-6 h-6 mr-3 text-[#20B486]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Tel: (415) 555-0132
                                </p>
                                <p className='flex items-center'>
                                    <svg className="w-6 h-6 mr-3 text-[#20B486]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Email: admin@forever.com
                                </p>
                            </div>
                        </div>

                        <div className='bg-white p-8 '>
                            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Careers at LMS </h3>
                            <p className='text-gray-600 mb-6'>Learn more about our teams and job openings.</p>
                            <button className='px-8 py-3 bg-[#20B486] text-white rounded-lg hover:bg-[#1a9c72] transition duration-300 flex items-center'>
                                Explore Jobs
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;