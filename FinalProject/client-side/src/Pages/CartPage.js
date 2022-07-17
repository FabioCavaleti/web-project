import React, {useEffect, useState} from 'react';
import './CartPage.css'
import foto from '../Assets/livroGenerico.jpg'
import { Link, useNavigate } from 'react-router-dom';

const CartPage = ({cart, login, deleteItem, clearCart, addQuantity, reduceQuantity}) => {

    
    const handleClickClear = () =>{
        clearCart();
    }
    const calculaTot = () => {
        
        let sum = 0;
        cart.map((item) =>{
            sum += parseFloat(item.qtd * item.price)
        })
        
        return parseFloat(sum).toFixed(2);
    }

    
    const [total, setTotal] = useState(calculaTot())

    useEffect(() =>{
        setTotal(calculaTot());
    }, [cart])


    const navigate = useNavigate();

    
    const handleClickBuy = () => {
        if(total > 0.0)
        {
            if(login == true)
            {
                navigate('/payment')
            }
            else
            {
                navigate('/sign-in')
            }
        }
        else
        {
            window.alert("O carrinho está vazio!!")
        }
    }
    
    return ( 
        <div className='cart-container'>
            <h1>Carrinho</h1>
            <ul className='cart-list'>
                {cart.map(item =>
                    <li className='cart-item' key={item._id}>
                        <div className='left'>
                            <Link to={`/bookpage/${item._id}`}>
                                <img className='cart-product-img' alt='foto-do-livro' src={item.img}/>
                            </Link>
                           <span>
                             {`${item.title} `}
                            </span>
                        </div>
                        <div className='qtd'>
                            <button onClick={() =>{reduceQuantity(item)}}>-</button>
                            {`${item.qtd}`}
                            <button onClick={() => {addQuantity(item)}}>+</button>

                        </div>
                        <div className='right'>
                            <span>
                            {`R$${item.price}`}
                            </span>
                            <button className='delete-item-btn' onClick={() =>{deleteItem(item)}}>X</button>

                        </div>
                    </li>    
                )}
            </ul>

            <div className='final-value'>
                <span>{total > 0.0 ? `Total: R$${total}` : `o carrinho está vazio`}</span>
            </div>

                <button onClick={handleClickBuy} className='buy-cart-btn btn'>Finalizar Compra</button>
                <br />
                <button onClick={handleClickClear} className='clear-cart-btn btn'>Limpar carrinho</button>
        </div>
     );
}
 
export default CartPage;