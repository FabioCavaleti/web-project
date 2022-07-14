import React from 'react';
import {useState} from 'react'
import '../Pages/Edit.css'
import ProductForm from '../Components/ProductForm'
import EditBookForm from './EditBookForm'
import * as BookApi from '../helpers/BookApi'

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
    
    
    
    
    return ( 
      
    <div className='edit-products manage container-fluid'>
        <ProductForm/>
        
        <h1>Livros</h1>
        <ul className='edit-list'>
            {props.bookList.map((book) => (
            <li key={book.id}>{`Nome: ${book.title}`}
                <div className='buttons'>
                    <Routes>   
                        <Route path='/editBook' element={<EditBookForm/>}/>   
                    </Routes>
                    <Link to='/editBook'><button className='edit-button no-btn-style'>Editar</button></Link>
                    <button className='exclude-button no-btn-style' onClick={deleteBook(book.title)}>Excluir</button>
                </div>
            </li>
           ))}        
        </ul>
    </div>
     );
}
 
export default EditProducts;