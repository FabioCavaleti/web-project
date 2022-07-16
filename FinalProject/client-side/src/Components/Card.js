import React from 'react';
import './Card.css'
import { Link, useNavigate } from 'react-router-dom';


const Card = ({book}) => {
    const navigate = useNavigate();
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
            <button onClick={ () => {navigate(`/bookpage/${_id}`)}} className='saiba-mais-btn'>SAIBA MAIS</button>

            
        </div>
     );
}
 
export default Card;