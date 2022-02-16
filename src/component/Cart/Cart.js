import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total =cart.reduce((total,product)=> total + product.price,0)
    total = fixed(total)
    let shipping = 0;
    if(total>35){
        shipping = 4.99;
    }else if(total>15){
        shipping = 7.99;
    }else if(total>0){
        shipping=12.99;
    }
    const tax = fixed((total*.05))
    const grandTotal = fixed((total+shipping+tax))
    function fixed(number){
        const fixedNum = Number(number.toFixed(2))
        return fixedNum
    }
    
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p><span>Total Order : </span>{cart.length}</p>
            <p><span>Product price : </span>{total}</p>
            <p><span>Shipping: </span>{shipping}</p>
            <p><span>Tax : </span>{tax}</p>
            <p><span>Total Price: </span>{grandTotal}</p>
            <button>Place Order</button>
        </div>
    );
};

export default Cart;