import React from 'react';
import './Toy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Toy = ({ toy, addToCart }) => {
    const { name, image, price, id } = toy;

    return (
        <div className='single-product'>
            <div className='toy-image'>
                <img src={image} alt={name} />
            </div>
            <div className='toy-info'>
                <p className='toy-name'>{name}</p>
                <p>$ {price}</p>
            </div>
            <div className='cart-btn'>
                <button onClick={() => addToCart(id)}>
                    <p>Add Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </div>


    );
};

export default Toy;