import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextApi } from '../../Context/Context';
import CourseCard from './CourseCard';

const CourseSection = () => {
    const [showcourse, setShowCourse] = useState(false);
    const { courses } = useContext(ContextApi)

   
    return (
        <div className='mt-10 py-10 lg:px-8  '>
            <h2 className='text-center text-3xl font-medium'>Our Courses</h2>
            <p className='text-center mb-3 mt-3 '>Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.</p>
            <div >
                {
                    showcourse === false ? (
                        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4'>
                            {courses.slice(0, 4).map((item, index) => <CourseCard key={index} course={item} />)}
                        </div>
                    ) :
                        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4'>
                            {courses.map((item, index) => <CourseCard key={index} course={item} />)}
                        </div>
                }
            </div>
           <div>
            {
                showcourse === true?'': <Link className='flex justify-center mx-auto w-50 hover:bg-blue-600 bg-green-700 text-white px-10 py-3 rounded' to='/course-list' onClick={() => {scrollTo(0, 0);setShowCourse(!showcourse);}}>Show all courses</Link>
            }
           </div>

        </div>
    );
};

export default CourseSection;