import React from 'react';
import {useState} from 'react'
import '../Pages/Edit.css'
import ProductForm from '../Components/ProductForm'
import EditBookForm from '../Components/EditBookForm'

const EditProducts = (props) => {
    return ( <div className='edit-products manage container-fluid'>
        <h1>Livros</h1>
        <ul className='edit-list'>
            {props.bookList.map((book) => 
            <li key={book.id}>
                {`Nome: ${book.title}`}
                <div className='buttons'>
                    <button className='edit-button no-btn-style'>Editar</button>
                    <button className='exclude-button no-btn-style'>Excluir</button>
                </div>
            </li>
            )}
            
        </ul>
        <ProductForm/>
    </div> );
}
 
export default EditProducts;