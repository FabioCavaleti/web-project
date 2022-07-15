import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({book}) => {
    const {title, _id, price, author, img} = book
    return ( 
        <div className='card'>
            <img src={img} alt="Capa de livro" className="center" />
            <h3><Link to={`/bookpage/${_id}`}>{title}</Link></h3>
            <small>{author}</small>
            <br/>
            <div className='price-value'>
                <strong>{`${price}`}</strong>
            </div>
            <button className='saiba-mais-btn'><Link to={`/bookpage/${_id}`}>SAIBA MAIS</Link></button>

            
        </div>
     );
}
 
export default Card;