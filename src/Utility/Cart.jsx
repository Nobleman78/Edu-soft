import React, { useContext } from 'react';
import { ContextApi } from '../Context/Context';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { calculateCourseTime, cart, calculateTotalDiscountPrice, calculateTotalPrice, calculateDiscount } = useContext(ContextApi);

    return (
        <div className='mt-20'>
            <h2 className='text-4xl font-semibold mb-2'>Shopping Cart</h2>
            <h2 className='text-xl font-semibold mb-2'>{cart.length} {cart.length > 1 ? 'Courses' : 'Course'} in cart</h2>
            <div className='flex gap-5'>
                {/* Left Part Div */}
                <div className='w-2/3 flex flex-col gap-3'>
                    {
                        cart.map((item, index) => {
                            return (
                                <div key={index}>

                                    <div className='flex justify-between gap-3  border border-gray-400 rounded px-4 py-2 ' key={index}>
                                        <div className='flex gap-3'>
                                            <img className='w-30' src={item.courseThumbnail} alt="" />
                                            <div>
                                                <p>{item.courseTitle}</p>
                                                <p>{calculateCourseTime(item)}</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-2'>
                                            <p className='text-blue-600'>{calculateDiscount(item.coursePrice, 20)}</p>
                                            <p className='line-through'>{item.coursePrice}</p>

                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

                {/* Right Part Div */}
                <div className='w-1/3  '>
                    <h2 className='text-2xl mb-3'>Total Price :</h2>
                    <p className='text-3xl text-blue-600'>{calculateTotalDiscountPrice(20)}</p>
                    <p className='line-through' >{calculateTotalPrice()}</p>
                    <p>20% Off</p>
                    <Link to='/orders'>  <button className='bg-blue-500 mt-3 px-3 py-2 w-full cursor-pointer text-white '>Proceed To CheckOut</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Cart;