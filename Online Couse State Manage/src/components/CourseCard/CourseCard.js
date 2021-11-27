import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'

const CourseCard = (props) => {
    const {title, instructor, price, ratting, image } = props.course
    return (
            <div className='col-md-4'>
                <div>
                    <div className="card card-bg mb-3 shadow" >
                            <img height='160' className="card-img-top" src={image} alt=""/>
                        <div className="card-body">
                            <h5 className ='font-weight-bold text-color1 m-0'>{title}</h5>
                            <p className ='text-danger font-weight-bold m-0'><small>{instructor}</small></p>
                            <div className="row d-flex flex-row justify-content-between">
                                <div className="col-md-6 font-weight-bold m-0">${price}</div>
                                <div className="col-md-6 font-weight-bold m-0"><span className='bg-warning rounded'>{ratting}</span></div>
                            </div>
                            <button onClick={()=>props.mannageCart(props.course)} className='btn btn-success rounded d-block mx-auto mt-4'><FontAwesomeIcon icon={faSmile}/> Enroll Course</button>
                        </div>
                    </div>           
                </div>
            </div>
    );
};

export default CourseCard;