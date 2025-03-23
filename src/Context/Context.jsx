import React, { createContext, useEffect, useState } from 'react';
import { dummyCourses } from '../assets/assets';
export const ContextApi = createContext();
const Context = (props) => {

    const currency = '$';
    const [courses, setCourses] = useState([])
    const [iseducator,setIsEducator] = useState(true)

    const courseData = async () => {
        setCourses(dummyCourses)
    }

    const calculateRating = (course)=>{
        if(course.courseRatings.length === 0){
            return 0;
        }
        let totalRating = 0;
        course.courseRatings.forEach(item=>{
            totalRating = totalRating + item.rating
        })
        return totalRating / course.courseRatings.length

    }
    useEffect(() => {
        courseData()
    }, [])

    const contextValue = {
        currency, courses,calculateRating,iseducator,setIsEducator
    }
    return (
        <ContextApi.Provider value={contextValue}>
            {props.children}
        </ContextApi.Provider>
    );
};

export default Context;