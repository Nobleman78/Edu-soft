import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [success, setSuccess] = useState(false)
    const [showpassword,setShowPassword] = useState(false);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        form.reset()
    }
    return (
        <div>
            <form onSubmit={handleLogin} className='shadow-2xl rounded-xl w-[90%] h-[400px] px-5 py-5 sm:max-w-96 m-auto mt-14 text-gray-800' >
                <h1 className="text-2xl">Sign in</h1>
                <p className=" border cursor-pointer rounded bg-blue-400 text-white flex items-center gap-5 justify-center mt-4 px-2 py-1"> <FcGoogle ></FcGoogle>Login with google</p>
                <div className="flex flex-col gap-1 ">
                    <div className="flex mt-3 flex-col gap-2">
                        <label>Email</label>
                        <input name="email" className="w-[100%] px-2 border outline-none shadow-none rounded py-1" type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className="flex flex-col gap-2 relative">
                        <label>Password</label>
                        <input name="password" className="w-[100%] px-2 border outline-none shadow-none py-1 rounded" type={showpassword?'text':'password'} placeholder='Enter Your Password' />
                        <div className='absolute top-10.5 right-2' onClick={()=>setShowPassword(!showpassword)} >
                           
                          {
                            showpassword ?  <FaEye  />: <FaEyeSlash/>
                          }
                        </div>
                    </div>
                    <div className='items-center flex justify-between   '>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" />
                            <span className='text-sm remember-me ' >Remember Me</span>
                        </div>
                        <div>
                            <a className='text-sm cursor-pointer '>Forgot Password</a>
                        </div>
                    </div>
                    <button className=" w-[100%] my-2 py-1 cursor-pointer  bg-[#20B486] text-white" >Sign in</button>
                    <div className="flex flex-col sm:flex-row text-center  gap-2 mt-2">
                        <p>Doesn't Have Account?</p>
                        <Link to='/registration'><button className="cursor-pointer">Registration Here</button></Link>
                    </div>
                    {
                        success && <p className='text-green-500'>
                            Login Succesful
                        </p>
                    }
                </div>


            </form>

        </div>
    );
};

export default Login;