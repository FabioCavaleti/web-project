import React, {useEffect, useState} from 'react';
import './CartPage.css'
import foto from '../Assets/livroGenerico.jpg'
import { Link } from 'react-router-dom';

const CartPage = ({cart, setCart, deleteItem, clearCart, addQuantity, reduceQuantity}) => {

    
    const handleClickBuy = () => {
    }

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

                <Link to='/payment'>
                    <button onClick={handleClickBuy} className='buy-cart-btn btn'>Finalizar Compra</button>
                </Link>
                        <br />
                        <button onClick={handleClickClear} className='clear-cart-btn btn'>Limpar carrinho</button>
        </div>
     );
}
 
export default CartPage;