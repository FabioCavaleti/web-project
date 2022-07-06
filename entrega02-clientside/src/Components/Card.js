import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import capa from '../Assets/livroGenerico.jpg';

function Card({ book }) {
  return (
    <div className="card">
      <img src={capa} alt="Capa de livro" className="center" />
      <h3><Link to={`/bookpage/${book.id}`}>{book.titulo}</Link></h3>
      <small>{book.autores}</small>
      <br />
      <div className="price-value">
        <strong>{book.valor}</strong>
      </div>
      <button className="saiba-mais-btn"><Link to={`/bookpage/${book.id}`}>SAIBA MAIS</Link></button>

    </div>
  );
}

export default Card;
