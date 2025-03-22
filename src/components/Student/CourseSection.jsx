import React from 'react';
import { Link } from 'react-router-dom';

const CourseSection = () => {
    return (
        <div className='mt-10 py-16 md:px-40 px-8  '>
            <h2 className='text-center text-3xl font-medium'>Our Courses</h2>
            <p className='text-center mb-3 mt-3 '>Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.</p>
            <Link className='flex justify-center mx-auto w-50 bg-[#20B486] text-white px-10 py-3 rounded' to='/course-list' onClick={() => scrollTo(0, 0)}>Show all courses</Link>
        </div>
    );
};

export default CourseSection;