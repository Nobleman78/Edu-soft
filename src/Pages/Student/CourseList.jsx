import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextApi } from '../../Context/Context';
import CourseCard from '../../components/Student/CourseCard';

const CourseList = () => {
    const { courses } = useContext(ContextApi)
    return (
        <div className='mt-10 md:mt-12'>
            <h2 className='text-4xl font-semibold'>Course list</h2>
            <p><Link to='/'><span className='text-blue-600'>Home</span> </Link>/<span className='text-gray-500'> Course list</span></p>
            <div className='mt-10 py-10 lg:px-8  '>
                <h2 className='text-center text-3xl font-medium'>Our Courses</h2>
                <p className='text-center mb-3 mt-3 '>Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.</p>
                <div>
                    {
                        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4'>
                            {courses.map((item, index) => <CourseCard key={index} course={item} />)}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default CourseList;