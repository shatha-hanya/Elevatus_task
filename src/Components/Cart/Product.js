
/*Product is the last child in the chain, and it implements each Iteam in Data.js */

import React from 'react';
import { IoAddCircle} from "react-icons/io5";

export default function Product(props) {
    const { product,onAdd,onRemove } = props;
    return (
        <div className="block">
            <h3>{product.name}</h3>
            <IoAddCircle onClick={() => onAdd(product)} className="MinusStyle"/>
        </div>

    )
}



