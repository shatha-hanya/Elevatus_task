
/* This component holds the user choices in the buttom of the page*/
/* item.qty is to show the quantity of the products that the user choose*/
/* + and - button are to modify and (add/remove) the product number*/

import React from 'react'

export default function Basket(props) {
    const { basketItems, onAdd, onRemove } = props;
    return (
        <div>
            <div className="block">
                {basketItems.length === 0 && <div>cart is Empty</div>}
            </div>
            {basketItems.map((item) => (
                <div key={item.id} className="row">
                    <div>{item.name}</div>
                    <div>
                        
                        <button onClick={() => onAdd(item)} >
                            +
                        </button>
                        <button onClick={() => onRemove(item)} >
                            -
                        </button>
                    </div>
                    <div>
                        {item.qty} 
                    </div>

                </div>
            ))}
        </div>
    )
}


