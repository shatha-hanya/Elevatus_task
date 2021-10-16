

/* this is the main shopping cart component */

import React from 'react';
import CartBars from './CartBars';
import CartItems from './CartItems';
import Data from '../../Assets/Data/Data';
import { useState } from 'react';
import Basket from './Basket';

function Cart() {

    //For Rendering Products in main screen:
    const { products } = Data;
    const [basketItems, setBasketItems] = useState([]);

    //For Adding products :
    const onAdd = (product) => {
        const exist = basketItems.find((x) => x.id === product.id);
        if (exist) {
            setBasketItems(
                basketItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setBasketItems([...basketItems, { ...product, qty: 1 }]);
        }
    };


    //For Removing products:
    const onRemove = (product) => {
        const exist = basketItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
          setBasketItems(basketItems.filter((x) => x.id !== product.id));
        } else {
            setBasketItems(
            basketItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
    };


    return (
        <div>
            <CartBars onAdd={onAdd} products={products}/>
            <CartItems onAdd={onAdd} products={products} />
            <Basket onAdd={onAdd} onRemove={onRemove} basketItems={basketItems} />
        </div>
    )
}

export default Cart
