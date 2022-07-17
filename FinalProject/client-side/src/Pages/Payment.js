import React from 'react';
import './Payment.css'
import PaymentForm from '../Components/PaymentForm';





const Payment = (props) => {

    const calculaTot = () => {
        
        let sum = 0;
        props.cart.map((item) =>{
            sum += parseFloat(item.price)
        })
        
        return parseFloat(sum).toFixed(2);
    }

    return ( 
        <div className='payment-container container-fluid'>
            <h1 className='total-value'>{`Total: R$${calculaTot()}`}</h1>
            <PaymentForm cart={props.cart} clearCart={props.clearCart}></PaymentForm>
        </div>
     );
}
 
export default Payment;