import React from 'react';
import './InfoCard.css'
import { useNavigate } from 'react-router-dom';

const InfoCard = ({book, addItem}) => {

    const navigate = useNavigate();


    const handleAddClick = () => {
        addItem(book)
        window.alert("Item adicionado ao carrinho")
    }

    const handleBuyClick = () => {
        addItem(book)
        navigate('/cart')
    }


    return ( 
        <div className='info-card'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='book-img'>
                        <img src={book.img} alt='capa-do-livro'></img>
                    </div>
                    <div className='payment'>
                        <h1 className='book-title'>{book.title}</h1>
                        <h3 className='book-subtitle'>Autor: {book.author} | Editora: {book.publisher}</h3>
                        <h2 className='book-value'>R${book.price}</h2>
                        <button onClick={handleAddClick} className='add-chart-btn hover'>Adicionar ao carrinho</button>
                        <br />
                        <button onClick={handleBuyClick} className='buy-btn hover'>Comprar</button>

                    </div>
                </div>
            </div>


        </div>
     );
}
 
export default InfoCard;