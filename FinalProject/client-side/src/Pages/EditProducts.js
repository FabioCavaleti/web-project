import React from 'react';
import {useContext} from 'react'
import '../Pages/Edit.css'
import ProductForm from '../Components/ProductForm'
import * as BookApi from '../helpers/BookApi'
import Context from '../context/Context'

import { Link } from 'react-router-dom'

const EditProducts = (props) => {
    
    const { AttBookList } = useContext(Context);

    const deleteBook = (bookTitle) => {
        return function(e){
            e.preventDefault()
            console.log(bookTitle)
            BookApi.deleteBookByTitle(bookTitle).then(AttBookList())
        }
    }
    
    const {setBookObj} = useContext(Context)  

    const handleClick = ({target}) =>{
        const index = target.id;
        const book = props.bookList[index];
        setBookObj(book);
    }

    return ( 
      
    <div className='edit-products manage container-fluid'>
        <ProductForm/>
        
        <h1>Livros</h1>
        <ul className='edit-list'>
            {props.bookList.map((book,index) => (
            <li key={book._id}>{`Nome: ${book.title}`}
                <div className='buttons'>                    
                    <Link to='/editBook'><button id={index} className='edit-button no-btn-style' onClick={handleClick}>Editar</button></Link>
                    <button className='exclude-button no-btn-style' onClick={deleteBook(book.title)}>Excluir</button>
                </div>
            </li>
           ))}        
        </ul>
    </div>
     );
}
 
export default EditProducts;