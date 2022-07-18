import React, { useContext } from 'react';
import {useState} from 'react'
import * as BookApi from '../helpers/BookApi'
import './AddBookPage.css'

import { Link } from 'react-router-dom'

import Context from '../context/Context';
import {AttBookList} from '../context/Provider'




const ProductForm = () => {
    
    const [title, setTitle] = useState()
    const [author, setAuthor] = useState()
    const [edition, setEdition] = useState()
    const[publisher, setPublisher] = useState()
    const[description,setDescription] = useState()
    const[genre,setGenre] = useState()
    const[category,setCategory] = useState()
    const[img,setImg] = useState()
    const[price,setPrice] = useState()
    const[inv_qtd,setInv_qtd] = useState()

    const { AttBookList } = useContext(Context);


    const addNewBook = (e) => {
        e.preventDefault()


        const bookObj = {
            title,
            author, 
            edition:Number(edition),
            publisher, 
            description,
            genre, 
            category, 
            img, 
            price:Number(price), 
            inv_qtd:Number(inv_qtd), 
            sold_qtd:0
        } 
        console.log(bookObj)

        alert("Livro adicionado ao estoque");
        BookApi.addBook(bookObj)
        AttBookList();
    }


    
    return(
    <>
        <div className="page-elements-position page-container">
            <h1 className="page-title">Coloque as informações do livro</h1>
            <div className="input-line"><span className="labels">Título:</span><input placeholder='Digite o nome do livro' onChange={(e) => setTitle(e.target.value)}></input></div><br></br>
            <div className=""><span className="labels">Autor:</span><input placeholder='Digite o nome do autor' onChange={(e) => setAuthor(e.target.value)}></input></div><br></br>
            <div className=""><span className="labels">Edição:</span><input type="number" placeholder='Selecione a edição do livro' onChange={(e) => setEdition(e.target.value)}></input></div><br></br>
            <div className=""><span className="labels">Editora:</span><input type="text" placeholder='Digite o nome da editora do livro' onChange={(e) => setPublisher(e.target.value)}></input></div><br></br>
            <div className=""><span className="labels">Descrição:</span><textarea className="text-area"  placeholder='Digite a sinopse do livro' onChange={(e) => setDescription(e.target.value)}></textarea></div><br></br>
            <div className=""><span className="labels" >Gênero:</span>
            <select type="text" onChange={(e) => setGenre(e.target.value)}>
                <option>Ação</option>
                <option>Aventura</option>
                <option>Terror</option>
                <option>Suspense</option>
            </select></div><br></br>
            <div className=""><span className="labels">Categoria:</span>
            <select type="text" onChange={(e) => setCategory(e.target.value)}>
                <option>Lançamento</option>
                <option>Clássico</option>
                <option>HQ/Manga</option>
                <option>Literatura infatujuvenil</option>
                <option>Literatura nacional</option>
            </select></div><br></br>
            <div className=""><span className="labels">Imagem:</span><input type="text" placeholder='Coloque a url da capa do livro' onChange={(e) => setImg(e.target.value)}></input></div><br></br>
            <div className=""><span className="labels">Preço:</span><input type="number" placeholder='Digite o preço do livro' onChange={(e) => setPrice(e.target.value)}></input></div><br></br>
            <div className=""><span className="labels">Quantidade em estoque:</span><input type="number" placeholder='Selecione a quantidade de livros em estoque' onChange={(e) => setInv_qtd(e.target.value)}></input></div><br></br>

            <Link to='/admin/edit/products'>
                        <button className='btn'>Editar produtos</button>
            </Link>
            <Link to='/admin/edit/products'>
                <button className="btn" onClick={addNewBook}>Adicionar livro</button>
            </Link>
            
        </div> 
    </>
    );
}

export default ProductForm