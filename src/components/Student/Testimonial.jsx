import React from 'react';
import { assets } from '../../assets/assets';

const Testimonial = () => {
    return (
        <div className='mt-10'>
            <h2 className='text-center text-3xl'>Testimonials</h2>
            <p className='mt-3 text-justify lg:w-[80%] mx-auto'>Hear from our learners as they share their journeys of transformation, success, and how our
                platform has made a difference in their lives.</p>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4 mt-15 w-[90%] mx-auto '>
                <div className='flex flex-col gap-4 rounded border border-gray-300'>
                    <div className='flex items-center gap-4 py-4 px-5 border bg-gray-300 border-gray-300 '>
                        <img className='w-12 h-12' src={assets.profile_img} alt="" />
                        <div className='flex flex-col'>
                            <h2>Donald Jackman</h2>
                            <p>Software Engineer at Amazon</p>
                        </div>
                    </div>
                    <div className='px-4 py-3'>
                        <div className="rating mb-3">
                            <div className="mask mask-star bg-orange-500" aria-label="1 star"></div>
                            <div className="mask mask-star bg-orange-500" aria-label="2 star"></div>
                            <div className="mask mask-star bg-orange-500" aria-label="3 star"></div>
                            <div className="mask mask-star bg-orange-500" aria-label="4 star"></div>
                            <div className="mask mask-star bg-orange-500" aria-label="5 star" aria-current="true"></div>
                        </div>
                        <p>The software shows a lot of potential and has already improved our productivity. With a few updates to fix bugs and enhance performance, it could become an essential tool for our team. Keep up the good work!.</p>
                        <a className='underline text-blue-600'>Read More</a>
                    </div>
                </div>
                <div className='flex flex-col gap-4 rounded border border-gray-300'>
                    <div className='flex items-center gap-4 py-4 px-5 border bg-gray-300 border-gray-300 '>
                        <img className='w-12 h-12' src={assets.profile_img3} alt="" />
                        <div className='flex flex-col'>
                            <h2>Marie  Kurie</h2>
                            <p>Google Analyst</p>
                        </div>
                    </div>
                    <div className='px-4 py-3 '>
                        <div className="rating mb-3 ">
                            <div className="mask mask-star bg-orange-500" aria-label="1 star"></div>
                            <div className="mask mask-star bg-orange-500" aria-label="2 star"></div>
                            <div className="mask mask-star bg-orange-500" aria-label="3 star"></div>
                            <div className="mask mask-star bg-orange-500" aria-label="4 star"></div>
                            <div className="mask mask-star bg-orange-500" aria-label="5 star" aria-current="true"></div>
                        </div>
                        <div>
                            <p className='mb-5'>
                                I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.
                            </p>
                            <a className='underline   text-blue-600'>Read More</a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 rounded border border-gray-300'>
                    <div className='flex items-center gap-4 py-4 px-5 border bg-gray-300 border-gray-300 '>
                        <img className='w-12 h-12' src={assets.profile_img2} alt="" />
                        <div className='flex flex-col'>
                            <h2>Donald Jackman</h2>
                            <p>Software Engineer at Oracle</p>
                        </div>
                    </div>
                    <div className='px-4 py-3'>
                        <div className="rating mb-3">
                            <div className="mask mask-star bg-orange-500" aria-label="1 star"></div>
                            <div className="mask mask-star bg-orange-500" aria-label="2 star"></div>
                            <div className="mask mask-star bg-orange-500" aria-label="3 star"></div>
                            <div className="mask mask-star bg-orange-500" aria-label="4 star"></div>
                            <div className="mask mask-star bg-orange-500" aria-label="5 star" aria-current="true"></div>
                        </div>
                        <div>
                            <p className='flex-grow'>The software crashes frequently, especially when multiple users are logged in. The interface feels outdated and could use a modern redesign. Additionally, the lack of detailed documentation makes troubleshooting difficult.</p>
                            <a className='underline mt-auto text-blue-600'>Read More</a>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Testimonial;