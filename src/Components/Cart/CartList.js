import React from 'react';
import CartItem from "./CartItem";
import propTypes from 'prop-types';

export default function CartList({value}) {
    const { cart } = value;
    return (
        <div className="container-fluid">
            {cart.map((item)=>
                <CartItem id={item.id} item={item} value={value} />
            )}
        </div>
    )
}

CartList.propTypes={
    value: propTypes.object
}