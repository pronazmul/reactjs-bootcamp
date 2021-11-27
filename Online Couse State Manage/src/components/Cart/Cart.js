import React from 'react';

const Cart = (props) => {
    return (
            <li className='list-group-item mb-1'>
                <div className='d-flex flex-row justify-content-between'>
                <span className='font-weight-bold text-color1'>{props.course.title}</span>
                <span className='font-weight-bold text-color1'>$ {props.course.price}</span>
                </div>
            </li>
    );
};

export default Cart;