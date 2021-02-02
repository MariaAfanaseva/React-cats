import React from 'react';
import './cart_list.styles.css';
import { Cart } from '../cart/cart.component';

export const CartList = (props) => 
    <div className='cart-list'>
        {
            props.cats.map(cat => 
            <Cart key={ cat.id } cat={ cat }/>)
        }
    </div>