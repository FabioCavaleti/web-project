import React from 'react';
import {useState,useContext} from 'react'
import '../Pages/Edit.css'
import ProductForm from '../Components/ProductForm'
import EditBookForm from './EditBookForm'
import * as BookApi from '../helpers/BookApi'
import Context from '../context/Context'


import {BrowserRouter as Router, Route, Routes,useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

const EditProducts = (props) => {
    
    const deleteBook = (bookTitle) => {
        return function(e){
            e.preventDefault()
            console.log(bookTitle)
            BookApi.deleteBookByTitle(bookTitle)
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