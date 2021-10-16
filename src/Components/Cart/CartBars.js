
/* this component holds the serach bar and the add bar on top od the shopping cart*/
import React from 'react';
import { IoAddCircle,IoSearchCircle } from "react-icons/io5";

function CartBars(props) {
    const { product,onAdd } = props;
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="searchBar">
                        <form>
                            <input type="text" placeholder="Search Item" name="searchBar"/>
                            <IoSearchCircle className="MdSerachStyle" />
                        </form>
                    </div>

                </div>
                <div className="col-sm-6">
                    <div className="addBar">
                        <form>
                            <input type="text" placeholder="Add Item" name="addBar"/>
                            <IoAddCircle onClick={() => onAdd(product)} className="addIconStyle" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartBars
