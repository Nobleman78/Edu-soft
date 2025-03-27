import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ContextApi } from '../../Context/Context';
import DOMPurify from 'dompurify';
import { assets } from '../../assets/assets';
import humanizeDuration from 'humanize-duration';
import YouTube from 'react-youtube';
import Loading from '../../components/Student/Loading';
import Myenrollement from './Myenrollement';
import { addToLocalStorage } from '../../components/PrivateRoute/Localstorage';


const Coursedetails = () => {

    const { courses, calculateRating,calculateCourseTime, addtoCart, calculateDiscount, calculateNumberOfLecture, calculateChapterTime } = useContext(ContextApi)
    const { id } = useParams();
    const [courseData, setCourseData] = useState(null)
    const [arrowFlip, setArrowFlip] = useState({});
    const [enrollButton, setEnrollButton] = useState(false);
    const [playerData, setPlayerData] = useState(null);
  


    const toggleSection = (index) => {
        setArrowFlip(prev => (
            {
                ...prev,
                [index]: !prev[index]
            }
        ));

    };
    const fetchData = async () => {
        const findData = courses.find(item => item._id === id)
        setCourseData(findData)
    }


    useEffect(() => {
        fetchData()
    }, [courseData])


    return courseData ? (
        <>

            <div className='flex lg:flex-row  flex-col-reverse gap-10  relative items-start justify-between md:px-36 px-8 md:pt-30 pt-20 text-left'>
                <div className='max-w-xl z-10  '>
                    <h1 className='md:text-3xl font-medium mb-3 '>{courseData.courseTitle}</h1>
                    <p className='text-gray-500' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(courseData.courseDescription.slice(0, 220)) }}></p>
                    <div className='flex items-center space-x-2'>
                        <p>{calculateRating(courseData)}</p>
                        <div className='flex'>
                            {[...Array(5)].map((_, index) => (
                                <img className='w-3.5 h-3.5' key={index} src={index < Math.floor(calculateRating(courseData)) ? assets.star : assets.star_blank} alt='' />
                            ))}
                        </div>
                        <p className='text-green-600 '>({courseData.courseRatings.length}<span className='ms-2'>{courseData.courseRatings.length > 1 ? 'Ratings' : 'Rating'}</span>)</p>
                        <p>{courseData.enrolledStudents.length} <span>{courseData.enrolledStudents.length > 1 ? 'Students' : 'Student'}</span> </p>

                    </div>
                    <p>Course By : <span className='text-blue-600'>Jesmin Chakma</span></p>

                    {/*------------------- Course Structure Div------------------- */}
                    <div className='mt-10'>
                        <h2 className='text-2xl font-medium'>Course Structure</h2>
                        {
                            courseData.courseContent.map((chapter, index) => (
                                <div key={index} className='border border-gray-300 bg-white mb-2 rounded'>
                                    <div className=' flex justify-between px-4 py-1 cursor-pointer select-none ' onClick={() => toggleSection(index)} >
                                        <div className='flex items-center gap-3 transition-transform' >
                                            {
                                                arrowFlip[index] ? <img className='rotate-180' src={assets.down_arrow_icon}></img> : <img src={assets.down_arrow_icon}></img>

                                            }
                                            <p>{chapter.chapterTitle}</p>

                                        </div>
                                        <div className='px-3 py-3'>
                                            <p>{chapter.chapterContent.length} lectures - {calculateChapterTime(chapter)}</p>

                                        </div>
                                    </div>
                                    {/* ------------------Chapter Lecture Section----------------- */}

                                    <div className={`overflow-hidden transition-all duration-300 border-t border-gray-400 ${arrowFlip[index] ? 'max-h-96' : 'max-h-0'}`}>
                                        <ul className='px-6 py-2'>
                                            {
                                                chapter.chapterContent.map((lecture, index) => (
                                                    <li key={index} className='flex justify-between items-center  '>
                                                        <div className='flex gap-3 '>
                                                            <img className='w-4' src={assets.play_icon} alt="play-icon" />
                                                            <p>{lecture.lectureTitle}</p>
                                                        </div>
                                                        <div className='flex gap-3'>
                                                            {lecture.isPreviewFree && <button onClick={() => setPlayerData({
                                                                videoId: lecture.lectureUrl.split('/').pop()
                                                            })}
                                                                className='text-blue-500 cursor-pointer' >Preview</button>}
                                                            <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, ['h', 'm'])}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                        </ul>

                                    </div>

                                </div>
                            ))
                        }
                    </div>
                    <div className='mt-10 flex flex-col gap-6'>
                        <h2 className='text-2xl'>Course Description</h2>
                        <p className='' dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(0, 30) }}></p>
                        <p className='' dangerouslySetInnerHTML={{ __html: courseData.courseDescription.slice(30, 300) }}></p>
                        <p>This course is mainly based on Freshers. Though it is based on freshers everyone can learn from this couse.</p>
                        <ul >
                            <li>Fundamentals of JavaScript</li>
                            <li>How to manipulate DOM</li>
                        </ul>
                    </div>
                </div>

                {/*---------------- Right Side--------------------- */}

                <div className='shadow-xl'>
                    {
                        playerData ? <YouTube videoId={playerData.videoId} opts={{
                            playerVars: {
                                autoplay: 1
                            }
                        }} iframeClassName='w-full aspect-video' /> : <img className='w-100' src={courseData.courseThumbnail} alt="" />
                    }
                    <div className='mx-5 flex mt-5 gap-2'>
                        <img src={assets.time_clock_icon} alt="" />
                        <p className='text-red-500'>5 days left at this price</p>
                    </div>
                    <div className='flex gap-4 mx-5 items-center mt-3'>
                        <p className='text-3xl '>{calculateDiscount(courseData.coursePrice, 20)}</p>
                        <p className='text-xl line-through'>${courseData.coursePrice}</p>
                        <p className='text-xl'>20% off</p>
                    </div>
                    {/* Calculate Rating */}
                    <div className='mx-5 mt-4'>
                        <div className='flex gap-2 justify-between ' >

                            <div className='flex gap-2'>
                                <p>{courseData.courseRatings.length}</p>
                                <img src={assets.star} alt="" />
                            </div>
                            <span className='text-gray-400'>|</span>
                            <div className='flex gap-2'>
                                <img className='w-5' src={assets.time_clock_icon} alt="" />
                                <p>{calculateCourseTime(courseData)}</p>
                                <span className='text-gray-400'>|</span>
                            </div>
                            <div className='flex gap-2'>
                                <img className='w-5' src={assets.lesson_icon} alt="" />
                                <p>{calculateNumberOfLecture(courseData)}</p>
                            </div>
                        </div>
                        {/*--------Star, total course duration and total lectures part emd-------- */}

                       <Link to='/cart'> <button  onClick={()=>addtoCart(courseData)} className='bg-blue-600 w-full px-4 py-2 mt-3 cursor-pointer text-white rounded'>{enrollButton ? 'Already Enrolled' : 'Enroll Now'}</button></Link>

                        {/*--------- Ends part------- */}

                        <div className='mt-5 mb-2 '>
                            <h2 className='text-2xl'>What's in this course</h2>
                            <div className='text-gray-600 mt-3'>
                                <p>Lifetime access with free updates</p>
                                <p>Step-by-step, hands-on project guidance.</p>
                                <p>Downloadable resources and source code.</p>
                                <p>Quizzes to test your knowledge.</p>
                                <p>Certificate of completion.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    ):<Loading/>
};

export default Coursedetails;