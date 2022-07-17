

import React from 'react';
import * as BookApi from '../helpers/BookApi'
import { Link } from 'react-router-dom'
import {useState,useContext} from 'react'
import Context from '../context/Context'

//Bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row'; 

import '../Pages/Edit.css'



const EditBookForm = () =>{

    let {bookObj} = useContext(Context);


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


/*Validação de formulário*/ 
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
        
        }
        

    updateBook();
    setValidated(true);
    };


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
        BookApi.attBook(bookObj)
    }
     

    





    const[inputVisible,setInputVisible] = useState(false);



    
    







    return(
        <>
        <div className="page-container">
            <div className="image-container">
                <img src={bookObj.img} className="book-image" alt="bookImage"/>
                <div>
                    {inputVisible == false ? (
                        <span className="edit-img-link" onClick={(e) => {setInputVisible(true)}}>Editar imagem</span>
                        ):
                        (
                            <div className="input-img-div">
                                <input type="text" onChange={(e) => {setImg(e.target.value)}} onDragEnterCapture={(e) => {setInputVisible(false)}}/>
                                <Button onClick={(e) => {setInputVisible(false)}}>Salvar imagem</Button>
                            </div>
                        )}
                </div>  

                <div className="price-container"> 
                    <span>Preço: R$<input type="number"></input> </span>
                </div>


                <div className="qtd-container"> 
                    <span>Quantidade em estoque:<input type="number"></input> </span>
                </div>





            </div>
            <div className="edit-form-container">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Título</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Título"
                            defaultValue={bookObj.title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Autor(a)</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Autor(a)"
                            defaultValue={bookObj.author}
                            onChange={(e) => setTitle(e.target.author)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Editora</Form.Label>
                            <Form.Control
                            type="text"
                            placeholder="Editora"
                            aria-describedby="inputGroupPrepend"
                            defaultValue={bookObj.publisher}
                            required
                            onChange={(e) => setPublisher(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                            Please choose a username.
                            </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control 
                            type="text" 
                            as="textarea"
                            placeholder="Descrição"
                            defaultValue={bookObj.description} 
                            required 
                            onChange={(e) => setDescription(e.target.value)}/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>



                   {/* <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>Gênero</Form.Label>
                        <Form.Select type="text" placeholder="State" required defaultValue={bookObj.genre}>
                            <option>Ação</option>
                            <option>Aventura</option>
                            <option>Terror</option>
                            <option>Romance</option>
                            <option>Suspense</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Select type="text" placeholder="Zip" required defaultValue={bookObj.category}>
                            <option>Mais vendidos</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom06">
                        <Form.Label>Edição</Form.Label>
                        <Form.Control type="text" placeholder="" required defaultValue={bookObj.edition}></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                        </Form.Control.Feedback>
                    </Form.Group>*/}




                </Row>
                <Button type="submit" onClick={handleSubmit}>Salvar alterações</Button>
            </Form>
                


            
            </div>
            
            
        
        </div> 
        <div className="teste">
            oi
        </div>
        </>  
    )




}

export default EditBookForm