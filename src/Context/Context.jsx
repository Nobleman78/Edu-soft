import React, { createContext, useEffect, useState } from 'react';
import { dummyCourses } from '../assets/assets';
import humanizeDuration from 'humanize-duration';
export const ContextApi = createContext();
const Context = (props) => {

    const currency = '$';
    const [courses, setCourses] = useState([])
    const [iseducator, setIsEducator] = useState(true)

    const courseData = async () => {
        setCourses(dummyCourses)
    }

    //Function to calculates Course Chapter Duration Duration
 
    const calculateChapterTime = (chapter) => {
        let time = 0;
        chapter.chapterContent.map(lecture =>
            time = time + lecture.lectureDuration


        )
        return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] })
    }

    // Function to calculate course duration

    const calculateCourseTime = (course) => {
        let time = 0;
        course.courseContent.map(chapter => chapter.chapterContent.map(lecture =>
            time = time + lecture.lectureDuration
        ))
        return humanizeDuration(time * 60 * 1000, { units: ['h', 'm'] })
    }
    //Function to calculate number of lecture in the 

    const calculateNumberOfLecture = (course) => {
        let numberOfCourse = 0;
        course.courseContent.forEach(chapter => {
            if (Array.isArray(chapter.chapterContent)) {
                numberOfCourse = numberOfCourse + chapter.chapterContent.length
            }
        })
        return numberOfCourse;


    }
    // Calculate Total Rating

 

    const calculateRating = (course) => {
        if (course.courseRatings.length === 0) {
            return 0;
        }
        let totalRating = 0;
        course.courseRatings.forEach(item => {
            totalRating = totalRating + item.rating
        })
        return totalRating / course.courseRatings.length

    }
    // Calculate discounted Price

    const calculateDiscount = (price, discount) => {
        let discountedPrice = price - (price * (discount / 100))
        return discountedPrice.toFixed(2)
    }




    useEffect(() => {
        courseData()
    }, [])

    const contextValue = {
        currency, courses, calculateRating, iseducator, setIsEducator,
        calculateChapterTime, calculateNumberOfLecture, calculateCourseTime,calculateDiscount
    }
    return (
        <ContextApi.Provider value={contextValue}>
            {props.children}
        </ContextApi.Provider>
    );
};

export default Context;