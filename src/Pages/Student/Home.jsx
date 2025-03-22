import React from 'react';
import Hero from '../../components/Student/Hero';
import Companies from '../../components/Student/Companies';
import OurServices from '../../Utility/OurServices';


const Home = () => {
    return (
        <div>
           <Hero/>
           <Companies/>
           <OurServices/>
        
        </div>
    );
};

export default Home;