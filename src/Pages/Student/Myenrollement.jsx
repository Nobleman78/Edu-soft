import React, { useContext } from 'react';
import { ContextApi } from '../../Context/Context';
import { assets } from '../../assets/assets';

const Myenrollement = ({getCourseId}) => {
    const { enrollCourses, calculateCourseTime } = useContext(ContextApi);
    console.log(getCourseId);
    
    return (
        <div>
            <h2>My enrollments</h2>
            <table className='md:table-auto table-fixed w-full overflow-hidden border mt-10'>
                <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden'>
                    <tr>
                        <th className='px-4 py-3 font-semibold truncate' >Course</th>
                        <th className='px-4 py-3 font-semibold truncate' >Duration</th>
                        <th className='px-4 py-3 font-semibold truncate' >Completed</th>
                        <th className='px-4 py-3 font-semibold truncate' >Status</th>
                    </tr>

                </thead>
                <tbody className=''>
                    {enrollCourses.map((course, index) => (
                        <tr key={index} className='border-b border-gray-500/20 ' >
                            <td className='md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3' >
                                <img className='w-14 sm:w-24 md:w-28' src={course.courseThumbnail} alt="" />
                                <div className='flex-1'>
                                    <p>{course.courseTitle}</p>
                                </div>

                            </td>
                            <td className='px-4 py-3 max-sm:hidden'>

                                {calculateCourseTime(course)}
                            </td>
                            <td className='px-4 py-3 max-sm:hidden'>
                                10/10  <span>Lectures</span>
                            </td>
                            <td className='px-4 py-3 max-sm:text-right'>
                                <button className='cursor-pointer bg-blue-500 px-3 text-white py-1'>Completed</button>
                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Myenrollement;