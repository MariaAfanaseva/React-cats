import React from 'react';
import './card_list.styles.css';
import { Card } from '../card/card.component';

export const CardList = (props) => 
    <div className='card-list'>
        {
            props.cats.map(cat => 
            <Card key={ cat.id } cat={ cat }/>)
        }
    </div>