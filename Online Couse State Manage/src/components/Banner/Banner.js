import React from 'react';
import programming from '../../images/programming.gif'

const Banner = (props) => {
    return (
        <div className='container-fluid bg-color'>
            <div style={{height:'400px'}} className="container">
                <div className="row d-flex flex-row justify-content-between align-items-center">
                    <div className="col-md-7">
                        <h1 className='text-center text-color display-4 font-weight-bold'>Learn Course Online</h1>
                        <p className='lead text-light text-center'>The world's largest selection of courses</p>
                        <h2 className='text-center text-color font-weight-bold'>Course Uploaded: {props.length}</h2>
                    </div>
                    <div className="col-md-5">
                        <img className='mt-3' height='350' src={programming} alt=""/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;