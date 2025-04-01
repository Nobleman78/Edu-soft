import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import logoImage from '../../assets/LMS-removebg-preview.png'
import { IoCartOutline } from "react-icons/io5";
import { ContextApi } from '../../Context/Context';

const Navbar = ({ data }) => {
    const navigate = useNavigate();
    const { cart, lsCourseData } = useContext(ContextApi);
    const [menu, setMenu] = useState(false);
    const [input, setInput] = useState(data ? data : '');
    const closeMenu = () => {
        setMenu(false);
    };

    const formHandler = (e) => {
        e.preventDefault();
        navigate('/course-list/' + input)
        setInput('');

    }

    return (
        <div className='flex items-center gap-5 justify-between px-4 md:px-6 lg:px-8 w-auto top-0 bg-white sticky  z-50  '>
            {/* Nav logo Start*/}

            <RiMenu2Fill className='md:hidden text-xl' onClick={() => setMenu(!menu)} ></RiMenu2Fill>
            <Link to='/'><img className='w-20 md:w-30' src={logoImage} alt="" /></Link>

            {/* Nav logo End */}



            {/* Mobile Menu */}
            <div className={`md:hidden fixed w-100 inset-0 bg-white z-40 transition-all duration-300 ease-in-out transform ${menu ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex flex-col h-full p-6'>
                    <div className='flex justify-between items-center mb-8'>
                        <img className='h-8 w-auto' src={logoImage} alt="LMS Logo" />
                        <button onClick={closeMenu} className='text-2xl focus:outline-none' aria-label="Close menu"  >
                            <RxCross2 />
                        </button>
                    </div>

                    <div className='flex flex-col space-y-4'>
                        <NavLink to='/' className='text-lg py-2 px-4 rounded hover:bg-gray-100' onClick={closeMenu} activeClassName="font-semibold text-green-500" >
                            Home
                        </NavLink>
                        <NavLink to='/about' className='text-lg py-2 px-4 rounded hover:bg-gray-100' onClick={closeMenu} activeClassName="font-semibold text-green-500"  >
                            About us
                        </NavLink>
                        <NavLink to='/course-list' className='text-lg py-2 px-4 rounded hover:bg-gray-100' onClick={closeMenu} activeClassName="font-semibold text-green-500"       >
                            Courses
                        </NavLink>
                        <NavLink to='/contact' className='text-lg py-2 px-4 rounded hover:bg-gray-100' onClick={closeMenu} activeClassName="font-semibold text-green-500"   >
                            Contact
                        </NavLink>
                    </div>
                    <form onSubmit={formHandler} className='mt-8 relative'>
                        <input  onChange={(e) => setInput(e.target.value)}  value={input}  type="text"  placeholder='What do you want to learn?'  className='w-full border px-4 py-2 pl-10 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent' />
                        <CiSearch className='absolute left-3 top-3 text-gray-400' />
                    </form>
                </div>
            </div>


            {/* Input Section for search start */}
            <form onSubmit={formHandler} className='hidden relative '>
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Want to learn' className='border px-7 rounded py-1 w-30 border-gray-500  lg:w-70  outline-none shadow-none' />
                <CiSearch className='absolute ms-2 top-2.5' />
            </form>
            {/* Input section for search End */}



            {/* Main Navbar Section Start */}
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
            {/* Main Navbar Section End */}



            {/* Login Navbar */}
            <div className='flex items-center gap-4'>
                <NavLink to='/cart' className='relative'>
                    <IoCartOutline className='text-2xl' />
                    {cart.length > 0 && (
                        <span className='absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs rounded-full'>
                            {cart.length}
                        </span>
                    )}
                </NavLink>
                <NavLink
                    to='/login'
                    className='hidden sm:inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors duration-200 text-sm font-medium'
                >
                    Sign in
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;