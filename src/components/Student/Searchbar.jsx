import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Searchbar = ({data}) => {
    const navigate = useNavigate();
    const [input, setInput] = useState(data?data:'')
    const onSearchHandler = (e) => {
        e.preventDefault();
        navigate('/course-list/' + input)
        setInput('')
    }
    return (
        <form onSubmit={onSearchHandler} className='flex items-center justify-between border py-3  border-gray-500/20 rounded w-70 mt-3 md:w-[50%] mx-auto relative bg-white '>
            <div className='flex items-center'>
                <CiSearch className='md:w-auto w-10 px-3 text-xl' />
                <input onChange={(e)=>setInput(e.target.value)} value={input} className=' outline-none shadow-none w-100' type="text" placeholder='Search here' />
            </div>
            <button className='bg-[#20b486] rounded px-7 md:px-10 py-3 mx-1 md:py-3 absolute right-[-4px] text-white'>Search</button>

        </form>

    );
};

export default Searchbar;