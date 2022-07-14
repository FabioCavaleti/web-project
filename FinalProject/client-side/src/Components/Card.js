import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({book}) => {
    const {title, _id, price, author} = book
    return ( 
        <div className='card'>
            <img src={book.img} alt="Capa de livro" className="center" />
            <h3><Link to={`/bookpage/${_id}`}>{title}</Link></h3>
            <small>{author}</small>
            <br/>
            <div className='price-value'>
                <strong>{`${price},00`}</strong>
            </div>
            <button className='saiba-mais-btn'><Link to={`/bookpage/${_id}`}>SAIBA MAIS</Link></button>

            
        </div>
     );
}
 
export default Card;