import React from 'react';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <img src={assets.logo} alt="" />
            <input type="text" placeholder='Want to learn' />
            <div>
                <ul className='flex items-center gap-2  '>
                    <NavLink to='/' className='hover:text-green-500 cursor-pointer'>Home</NavLink>
                    <NavLink to='/about'>About us</NavLink>
                    <NavLink to='/course-list'>Courses</NavLink>
                    <NavLink to='/contact'>Contact Us</NavLink>
                </ul>
            </div>
            <div>
                <ul className='flex items-center gap-3'>
                    <NavLink className='cursor-pointer'>Sign in</NavLink>
                    <NavLink className='bg-[#20B486] cursor-pointer px-2 py-1 rounded text-white'>Create Free Account</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;