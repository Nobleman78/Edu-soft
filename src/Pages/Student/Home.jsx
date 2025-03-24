import React from 'react';
import Hero from '../../components/Student/Hero';
import Companies from '../../components/Student/Companies';
import OurServices from '../../Utility/OurServices';
import CourseSection from '../../components/Student/CourseSection';
import Testimonial from '../../components/Student/Testimonial';
import Calltoaction from '../../components/Student/Calltoaction';


const Home = () => {
    return (
        <div>
           <Hero/>
           <Companies/>
           <OurServices/>
           <CourseSection/>
           <Testimonial/>
           <Calltoaction/>
        
        </div>
    );
};

export default Home;