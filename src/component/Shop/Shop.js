import React,{useState} from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css'

const Shop = () => {
    const productData = fakeData.slice(0,10)
    const [products,setProducts] = useState(productData)
    const [cart,setCart] = useState([])
    const handleProduct=(product)=>{
        const newCart = [...cart,product]
        setCart(newCart)
    }
    return (
        <div className='shop'>
            <div className="product-area">
                {
                    products.map((product,key)=><Product key={key} product={product} handleFunc={handleProduct}></Product>)
                }
            </div>
            <div className="cart-area">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;