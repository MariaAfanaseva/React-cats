import React from 'react';
import './cart.styles.css';

export const Cart = (props) => 
    <div className='cart-container'>
    <img alt='cat' src={`https://robohash.org/${props.cat.id}?set=set4&size=180x280`}/>
        <h2>{ props.cat.name }</h2>
        <p>{ props.cat.email }</p>
    </div>