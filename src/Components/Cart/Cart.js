import React, { useState } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove, faBasketShopping } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, removeCart, singleCartToyRemove, cartBox, showCart }) => {

    const [winMassage, setWinMassage] = useState('');
    // const [hide, setHide] = useState(false);


    // one item choose function

    const oneItemChoose = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        if (cart.length === 4 && cart.length !== 0) {
            const winItem = cart.find((cartItem, index) => index === randomNumber);
            setWinMassage(winItem);
        }
        else {
            alert('Please select 4 item');
        }

    }

    return (
        <div className={`cart ${cartBox ? "hide" : "show"}`} >
            <h2>Selected toy</h2>
            <p className='winItem'>That product should you buy: {winMassage.name}</p>
            <div className='table-div'>
                <table>

                    <tbody className='table-body'>
                        <tr>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Delete</th>
                        </tr>
                        {
                            cart.map(toy =>

                                <tr key={toy.id}>
                                    <td><img src={toy.image} height='50px' width='50px' alt="" /> </td>
                                    <td>{toy.name}</td>
                                    <td className='remove-icon' onClick={() => singleCartToyRemove(toy.id)}> <FontAwesomeIcon icon={faRemove} size='sm' color='white' /></td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div className='btn'>
                <button onClick={oneItemChoose}>Choose 1 For Me</button>
                <button onClick={() => removeCart()}>Remove Cart</button>
                <div className='close-cart'>
                    <button onClick={() => showCart()}> Close</button>

                </div>

            </div>

        </div >

    );
};

const CartBox = ({ showCart, cartBox, cart }) => {


    return (
        <div className={`cart-box ${cartBox ? "show" : "hide"}`} onClick={() => showCart()} >
            <p>{cart.length}</p>
            <FontAwesomeIcon icon={faBasketShopping} size='3x' color='blue' />
        </div>
    )

}

export { Cart, CartBox };