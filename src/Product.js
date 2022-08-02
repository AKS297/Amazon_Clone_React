import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 function Product({id,title,image,price,rating}){
    const [{},dispatch]=useStateValue();
    const addToBasket=()=>{
     dispatch({
        type:'ADD_TO_BASKET',
        item:{
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating
        }
     })
     toast.success('Item added to cart');
    };
    return(
        <div className='product'>
        <div className='product__info'>
        <p>{title}</p>
        <p className='product__'>
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
         {
            Array(rating).fill().map((_)=>(
                <p>⭐</p>
            ))
         }
        </div>
        </div>
        
        <img src={image} alt='' />
        <button onClick={addToBasket}>Add to Cart</button>
        <div>
            <ToastContainer  />
        </div>
        </div>
       
    );
}
export default Product;