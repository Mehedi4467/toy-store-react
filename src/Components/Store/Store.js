import React, { useEffect, useState } from 'react';
import { Cart, CartBox } from '../Cart/Cart';

import Toy from '../Toy/Toy';
import './Store.css';
const Store = () => {

    const [toys, setToys] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartBox, showCart] = useState(true);


    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(toys => setToys(toys));
    }, []);

    // add to cart function
    const addToCart = (id) => {
        const exists = cart.find(toy => toy.id === id);
        if (!exists) {

            const product = toys.find(toy => toy.id === id);

            const uniqueId = cart.filter(uniToy => uniToy.id !== id);

            const newCart = [...uniqueId, product];
            if (newCart.length <= 4) {
                setCart(newCart);
            }
            else {
                alert("You have already added 4 Items.");
            }
        }
        else {
            alert("Oop!! This Item already exists");
        }

    }
    // remove all cart item
    const removeCart = () => {
        const newCart = [];
        setCart(newCart);
    }

    //remove single cart item
    const singleCartToyRemove = (id) => {

        const deleteIndex = cart.find((deleteItem) => deleteItem.id === id);

        let newCart = [...cart];
        if (deleteIndex) {
            newCart.splice(cart.indexOf(deleteIndex), 1);
            setCart(newCart);
        }


    }





    return (
        <div className='toy-body'>
            <div className='toy-product'>
                {
                    toys.map(toy => <Toy toy={toy} key={toy.id} addToCart={addToCart}></Toy>)
                }
            </div>
            <div>
                <Cart cart={cart} removeCart={removeCart} singleCartToyRemove={singleCartToyRemove} cartBox={cartBox} showCart={() => showCart(true)}  ></Cart>
                <CartBox cart={cart} showCart={() => showCart(false)} cartBox={cartBox} ></CartBox>

            </div>
        </div>
    );
};

export default Store;