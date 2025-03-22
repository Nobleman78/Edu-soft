import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import logoImage from '../../assets/LMS-removebg-preview.png'

const Navbar = ({data}) => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false);
    const [input, setInput] = useState(data?data:'');

    const formHandler = (e) => {
        e.preventDefault();
        navigate('/course-list/' + input)
        // Using this I just reseting the input field.
        setInput('');
          
    }

    return (
        <div className='flex items-center justify-between gap-1 md:gap-0 '>
            <div className='flex items-center gap-2'>
                <RiMenu2Fill className='md:hidden' onClick={() => setMenu(!menu)} ></RiMenu2Fill>
                <Link to='/'><img className='w-20 md:w-30' src={logoImage} alt="" /></Link>
            </div>

            {/* For Small Screen Menu Start */}
            <div className={`absolute top-0 left-0 bottom-0  overflow-hidden bg-white transition-all ${menu ? 'w-full h-60  z-10 ' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600  px-5'>
                    <div onClick={() => setMenu(false)} className='flex items-center gap-4 mt-2 mb-2'>
                        <RxCross2 className='text-2xl' />

                    </div>
                    <NavLink onClick={() => setMenu(false)} to='/' className='border-t border-b py-1 px-1'>Home</NavLink>
                    <NavLink onClick={() => setMenu(false)} to='/about' className='border-b  py-1 px-1'>About us</NavLink>
                    <NavLink onClick={() => setMenu(false)} to='/course-list' className='border-b px-1 py-1'>Courses</NavLink>
                    <NavLink onClick={() => setMenu(false)} to='/contact' className='border-b px-1 py-1'>Contact</NavLink>

                </div>

            </div>
            {/* Small Screen Menu End */}

            {/* Input Section for search start */}
            <form onSubmit={formHandler} className='relative '>
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Want to learn' className='border px-7 rounded py-1 w-30 border-gray-500  lg:w-70  outline-none shadow-none' />
                <CiSearch className='absolute ms-2 top-2.5' />
            </form>
            {/* Input section for search End */}
            <div>
                <ul className='hidden md:flex md:items-center gap-4   '>
                    <NavLink to='/' className='hover:text-green-500 cursor-pointer items-center flex flex-col'>
                        <p>Home</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>

                    <NavLink to='/about' className='flex flex-col items-center hover:text-green-500 cursor-pointer'>
                        <p>About us</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>

                    <NavLink to='/course-list' className='flex flex-col items-center hover:text-green-500 cursor-pointer'>
                        <p>Courses</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                    <NavLink to='/contact' className='flex flex-col items-center hover:text-green-500 cursor-pointer'>
                        <p>Contact Us</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                </ul>
            </div>
            <div>
                <ul className='flex items-center gap-4'>
                    <NavLink to='/login' className='cursor-pointer text-sm bg-[#20B486]  text-white px-2 py-2 md:px-3 md:py-1  md:text-base rounded'>Sign in</NavLink>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;