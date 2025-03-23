import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextApi } from '../../Context/Context';

const Coursedetails = () => {
    const { courses, currency } = useContext(ContextApi)
    console.log(courses)
    const [courseData, setCourseData] = useState([])
    console.log(courseData)
    const { id } = useParams();
    console.log(id)


    const fetchData = async () => {
        courses.map(item => {
            if (item._id === id) {
                setCourseData(item)
                return null;
            }
        })
    }
    useEffect(() => {
        fetchData()
    }, [id,courses])


    return courseData? (
        <div>
          <h1>{courseData.courseTitle}</h1>
          <p>{courseData.courseDescription}</p>
        </div>
    ):<div className='opactiy-0'></div>
};

export default Coursedetails;