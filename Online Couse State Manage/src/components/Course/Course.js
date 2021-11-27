import React, { useState } from 'react';
import DemoCourse from '../../DemoCourse'
import Banner from '../Banner/Banner';
import CourseCard from '../CourseCard/CourseCard';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Course = () => {

    const [cart, setCart] = useState([])
    
    const mannageCart =(item)=>{
        const newAdded =[...cart, item]
        setCart(newAdded)
    }
    const totalPrice = cart.reduce((initial, course)=> initial + course.price,0)
        return (
            <div className='container-fluid bg-color'>
                <Banner length={DemoCourse.length}></Banner>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-9">
                            <h2 className='text-color text-center font-weight-bold'>All Courses</h2><br></br>
                            <div className="row pb-5">
                                {DemoCourse.map(course=><CourseCard key={course.title} course={course} mannageCart={mannageCart}></CourseCard>)}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h2 className='text-color text-center font-weight-bold'>Cart</h2><br></br>
                            <ul className='list-group'>
                                {
                                    cart.map(course=> <Cart key={course.title} course={course}></Cart>)
                                }
                            </ul>
                            <h4 className='text-center card-bg py-2 rounded mt-3'><FontAwesomeIcon icon={faShoppingCart}/> Check Out: ${totalPrice} </h4>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default Course;
