import React, { useState } from 'react';
import { validate } from 'uuid';
import * as yup from 'yup';
import {Navigate, useNavigate} from 'react-router-dom'
import * as BookApi from '../helpers/BookApi'


const PaymentForm = (props) => {

    // Fazer função que verifica os dados corretamente, limpa carrinho e finaliza compra no submit
    const navigate = useNavigate();

    const [status, setStatus] = useState({ // Validação do formulario e exibição de sucesso / erro
        type: '',
        message: ''
    })
    
    // Dados para a realização da compra
    const [name, setName] = useState("");
    const [card, setCard] = useState(""); // Numero cartao de credito
    const [userId, setUserId] = useState("") // CPF
    const [bornDate, setBornDate] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("");
    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        //VALIDAR DADOS

        //const paymentData = {name,userId,bornDate,email, card, address}
        props.cart.map(item => {
            
            let obj = {
                title: item.title,
                inv_qtd: item.inv_qtd - item.qtd
            }
            
            BookApi.attBook(obj);

            // Falta atualizar booklist com os novos dados do banco
            
            
        })
        
        props.clearCart();
        window.alert("Compra realizada com sucesso!!")
        navigate('/')
        

    }

    return ( 
        <div className='form'>
            <h1>Insira seus dados</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input required type='text' value={name} onChange={(e) =>{setName(e.target.value)}} />   
                </label>
                <label>
                    CPF:
                    <input required type='text' value={userId} onChange={(e) =>{setUserId(e.target.value)}} />   
                </label>
                <label>
                    Data de nascimento:
                    <input required type='date' value={bornDate} onChange={(e) =>{setBornDate(e.target.value)}} />   
                </label>
                <label>
                    Email:
                    <input  required type='email' value={email} onChange={(e) =>{setEmail(e.target.value)}} />   
                </label>
                <label>
                    Cartao de credito:
                    <input  required type='text' value={card} onChange={(e) =>{setCard(e.target.value)}} />
                </label>
                <label>
                    Endereço:
                    <input required type='text' value={address} onChange={(e) =>{setAddress(e.target.value)}} />
                </label>
                    <input className='payment-submit btn' value='Finalizar a compra' type='submit' />
            </form>
        </div>
     );
}
 
export default PaymentForm;