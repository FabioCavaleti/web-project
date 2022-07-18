

import React from 'react';
import * as BookApi from '../helpers/BookApi'
import { Link } from 'react-router-dom'
import {useState,useContext} from 'react'
import Context from '../context/Context'



import '../Pages/Edit.css'



const EditBookForm = () =>{

    let {bookObj} = useContext(Context);

    const { AttBookList } = useContext(Context)




   


    const [title, setTitle] = useState(bookObj.title)
    const [author, setAuthor] = useState(bookObj.author)
    const [edition, setEdition] = useState(bookObj.edition)
    const[publisher, setPublisher] = useState(bookObj.publisher)
    const[description,setDescription] = useState(bookObj.description)
    const[genre,setGenre] = useState(bookObj.genre)
    const[category,setCategory] = useState(bookObj.category)
    const[img,setImg] = useState(bookObj.img)
    const[price,setPrice] = useState(bookObj.price)
    const[inv_qtd,setInv_qtd] = useState(bookObj.inv_qtd)


  //Atualição do livro
    const updateBook = () =>{
        bookObj = {
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
                sold_qtd:bookObj.sold_qtd,
            }
        console.log(bookObj)
        BookApi.attBook(bookObj).then(AttBookList())
    }
     
    
    return(
        <>
            <div className="page-container">
                <div className="image-container">
                    <img src={bookObj.img} className="book-image" alt="bookImage"/>
                </div>

                <div className="edit-form-container">
                    <div className="input-line"><span className="">Título:</span><input defaultValue={bookObj.title} placeholder='Digite o nome do livro' onChange={(e) => setTitle(e.target.value)}></input></div><br></br>
                    <div className=""><span className="">Autor:</span><input defaultValue={bookObj.author} placeholder='Digite o nome do autor' onChange={(e) => setAuthor(e.target.value)}></input></div><br></br>
                    <div className=""><span className="">Edição:</span><input defaultValue={bookObj.edition} type="number" placeholder='Selecione a edição do livro' onChange={(e) => setEdition(e.target.value)}></input></div><br></br>
                    <div className=""><span className="">Editora:</span><input defaultValue={bookObj.publisher} type="text" placeholder='Digite o nome da editora do livro' onChange={(e) => setPublisher(e.target.value)}></input></div><br></br>
                    <div className=""><span className="">Descrição:</span><textarea defaultValue={bookObj.description} className="text-area"  placeholder='Digite a sinopse do livro' onChange={(e) => setDescription(e.target.value)}></textarea></div><br></br>
                    <div className=""><span className="" >Gênero:</span>
                    <select type="text" onChange={(e) => setGenre(e.target.value)}>
                        <option>Ação</option>
                        <option>Aventura</option>
                        <option>Terror</option>
                        <option>Suspense</option>
                    </select></div><br></br>
                    <div className=""><span className="">Categoria:</span>
                    <select type="text" onChange={(e) => setCategory(e.target.value)}>
                        <option>Lançamento</option>
                        <option>Clássico</option>
                        <option>HQ/Manga</option>
                        <option>Literatura infatujuvenil</option>
                        <option>Literatura nacional</option>
                    </select></div><br></br>
                    <div className=""><span className="">Imagem:</span><input defaultValue={bookObj.img} type="text" placeholder='Coloque a url da capa do livro' onChange={(e) => setImg(e.target.value)}></input></div><br></br>
                    <div className=""><span className="">Preço:</span><input defaultValue={bookObj.price} type="number" placeholder='Digite o preço do livro' onChange={(e) => setPrice(e.target.value)}></input></div><br></br>
                    <div className=""><span className="">Quantidade em estoque:</span><input defaultValue={bookObj.inv_qtd} type="number" placeholder='Selecione a quantidade de livros em estoque' onChange={(e) => setInv_qtd(e.target.value)}></input></div><br></br>

                    <Link to='/admin/edit/products'>
                        <button className="btn" onClick={updateBook}>Salvar alterações</button>
                    </Link>
                </div>
            </div>
        </>  
    )




}

export default EditBookForm