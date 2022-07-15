import React from 'react';
import {useState} from 'react'
import * as BookApi from '../helpers/BookApi'
import '../Pages/Edit.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


const ProductForm = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
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
        
        BookApi.addBook(bookObj);
    }


    
    return(
    <>
        <Button variant="primary" onClick={handleShow}>
            Adicionar novo Livro
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Coloque as informações do livro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div>
                <form onSubmit={addNewBook} className='edit-products manage container-fluid'>
                    <label>Nome:</label><input type='text' placeholder='Digite o nome do livro' onChange={(e) => setTitle(e.target.value)}></input><br></br>
                    <label>Autor:</label><input type='text' placeholder='Digite o nome do autor' onChange={(e) => setAuthor(e.target.value)}></input><br></br>
                    <label>Edição:</label><input type='number' placeholder='Selecione a edição do livro' onChange={(e) => setEdition(e.target.value)}></input><br></br>
                    <label>Editora:</label><input type='text' placeholder='Digite o nome da editora do livro' onChange={(e) => setPublisher(e.target.value)}></input><br></br>
                    <label>Sinopse:</label><input type='text' placeholder='Digite a sinopse do livro' onChange={(e) => setDescription(e.target.value)}></input><br></br>
                    <label>Gênero:</label><select onChange={(e) => setGenre(e.target.value)}>
                        <option value="Ação">Ação</option>
                        <option value="Aventura">Aventura</option>
                        <option value="Suspense">Suspense</option>
                        <option value="Romance">Romance</option>
                        <option value="Terror">Terror</option>
                    </select><br></br>
                    <label>Categoria:</label><input type='text' placeholder='Digite a categoria do livro' onChange={(e) => setCategory(e.target.value)}></input><br></br>
                    <label>Foto da Capa:</label><input type='text' placeholder='Coloque a url da capa do livro' onChange={(e) => setImg(e.target.value)}></input><br></br>
                    <label>Preço:</label><input type='number' placeholder='Digite o preço do livro' onChange={(e) => setPrice(e.target.value)}></input><br></br>
                    <label>Quantidade em estoque:</label><input type='number' placeholder='Selecione a quantidade de livros em estoque' onChange={(e) => setInv_qtd(e.target.value)}></input><br></br>

                    <input type='submit' value='Salvar Livro'></input>
                </form>
            </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>
        
















        



    );

}

export default ProductForm