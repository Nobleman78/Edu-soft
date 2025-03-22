import React from 'react';
import Hero from '../../components/Student/Hero';
import Companies from '../../components/Student/Companies';
import OurServices from '../../Utility/OurServices';
import CourseSection from '../../components/Student/CourseSection';


const Home = () => {
    return (
        <div>
           <Hero/>
           <Companies/>
           <OurServices/>
           <CourseSection/>
        
        </div>
    );
};

export default Home;