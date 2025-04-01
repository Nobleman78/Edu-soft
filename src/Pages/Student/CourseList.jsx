import React, { useContext, useEffect, useState } from 'react';
import { ContextApi } from '../../Context/Context';
import CourseCard from '../../components/Student/CourseCard';
import Searchbar from '../../components/Student/Searchbar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";

const CourseList = () => {
    const { courses } = useContext(ContextApi)
    const {input } = useParams();
    const navigate = useNavigate()
   

    // Course Filter
    const [filterCourse,setFilterCourse] = useState([]);


    useEffect(()=>{
        if(courses.length > 0){
            const temCourse = courses.slice();
            input ?setFilterCourse(
                temCourse.filter(item=>item.courseTitle.toLowerCase().includes(input.toLowerCase()))
            )  :setFilterCourse(temCourse)
        }

    },[courses,input])



    return (
        <div className='mt-20 md:mt-20 '>
            <div className='flex flex-col md:flex-row items-center gap-2  justify-between px-8 '>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-4xl font-semibold'>Course list</h2>
                    <p className='text-center md:text-start'><Link to='/'><span className='text-blue-600'>Home</span> </Link>/<span className='text-gray-500'> Course list</span></p>
                </div>
                <Searchbar />
            </div>
            {
                input && <div className='px-8 mt-4 flex relative'>
                    <p className='px-2 py-1 border w-30 text-start'>{input}</p>
                    <RxCross2 onClick={()=>navigate('/course-list')} className='absolute left-30 top-1 cursor-pointer'/>
                </div>
              
            }
            <div className='mt-10 py-10 lg:px-8  '>
                <div>
                    {
                        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-4'>
                            {filterCourse.map((item, index) => <CourseCard key={index} course={item} />)}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default CourseList;