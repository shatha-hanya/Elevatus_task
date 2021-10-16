/* this component is responsible for rendering products from Data.js*/
import React from 'react';
import Product from './Product';


export default function CartItems(props) {
    const {products, onAdd} = props;
    return (
        <div>
            {products.map((product)=>(
                <Product key={product.id} product={product} onAdd={onAdd}></Product>
            ))}
        </div>
    )
}

