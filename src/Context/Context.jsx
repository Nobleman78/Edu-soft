import React, { createContext, useEffect, useState } from 'react';
import { dummyCourses } from '../assets/assets';
import humanizeDuration from 'humanize-duration';

export const ContextApi = createContext();
const Context = (props) => {

    const currency = '$';
    const [courses, setCourses] = useState([])
    const [iseducator, setIsEducator] = useState(true)
    const [enrollCourses, setEnrollCourses] = useState([])
    const [cart, setCart] = useState([])
    console.log(cart)
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.coursePrice, 0);
    };
    const calculateTotalDiscountPrice = (discount) => {
        const TotalPrice = calculateTotalPrice();
        let discountPrice = TotalPrice - (TotalPrice * (discount / 100))
        return discountPrice.toFixed(2);
    }




    const addtoCart = (courseData) => {
        console.log(courseData)
        let isPresent = false;
        cart.find(item => {
            if (item._id === courseData._id) {
                isPresent = true;
            }
            if (item._id === courseData._id) {
                alert('This item is already exist')
            }

        })
        if (isPresent)
            return;

        setCart([...cart, courseData])

    }






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



    //    Fetching Data here
    useEffect(() => {
        courseData()

    }, [])

    const contextValue = {
        currency, courses, calculateRating, iseducator, setIsEducator,
        calculateChapterTime, calculateNumberOfLecture, calculateCourseTime, calculateDiscount
        , enrollCourses, addtoCart, calculateTotalPrice, cart,calculateTotalDiscountPrice
    }
    return (
        <ContextApi.Provider value={contextValue}>
            {props.children}
        </ContextApi.Provider>
    );
};

export default Context;