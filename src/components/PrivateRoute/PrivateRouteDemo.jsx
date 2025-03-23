import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import Login from '../../Utility/Login';
import { ContextApi } from '../../Context/Context';

const PrivateRouteDemo = () => {
    const {iseducator,setIsEducator} = useContext(ContextApi);
    const navigate = useNavigate();
    return (
        <div className='hidden md:flex items-center gap-5text-gray-500'>
            <div>
                {
                    // This user will be come from the firebase.
                    user &&
                    <>
                        <button onClick={()=>{navigate('/educator')}}>{iseducator? 'Educator Dashboard':'Become Educator'}</button>
                        <Link to='my-enrollments'>My Enrollments</Link>
                    </>
                }
            </div>
            {
                user?<FaRegUserCircle/>:<Login/>
            }

        </div>
    );
};

export default PrivateRouteDemo;