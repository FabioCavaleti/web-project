import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({book}) => {
    const {title, id, price, author} = book
    return ( 
        <div className='card'>
            <img src={'https://images-na.ssl-images-amazon.com/images/I/81-jvnt+hgL.jpg'} alt="Capa de livro" className="center" />
            <h3><Link to={`/bookpage/${id}`}>{title}</Link></h3>
            <small>{author}</small>
            <br/>
            <div className='price-value'>
                <strong>{`${price},00`}</strong>
            </div>
            <button className='saiba-mais-btn'><Link to={`/bookpage/${id}`}>SAIBA MAIS</Link></button>

            
        </div>
     );
}
 
export default Card;