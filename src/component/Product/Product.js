import React from 'react';
import { HiShoppingCart } from "react-icons/hi";
import './Product.css';

const Product = (props) => {
    const{img,name,seller,category,price}=props.product;
    const features = props.product.features;

    return (
        <div className='product'>
            <div className="img-area">
                <img src={img} alt="" />
            </div>
            <div className="info-area">
                <p>{name}</p>
                <div className="info">
                    <div className="info-2">
                        <p><span>By: </span>{seller}</p>
                        <p><span>Categoty: </span>{category}</p>
                        <p><span>Price: </span>{price}</p>
                        <button onClick={()=>props.handleFunc(props.product)}> <HiShoppingCart/>Add to cart</button>
                    </div>
                    <div className="info-2">
                        
                        <ul>
                            {
                                features.map((feature,id)=> <li key={id}>{feature.description}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;