import './App.css';
import NavBar from './Components/NavBar';
import TopBar from './Components/TopBar';
import Footer from './Components/Footer'
import { useEffect, useState, useContext } from 'react';
import Book from './Components/Book';
import Card from './Components/Card'
import Home from './Pages/Home'
import BookInfo from './Pages/BookPage'
import Admin from './Pages/Admin';
import EditAdmins from './Pages/EditAdmins';
import EditClients from './Pages/EditClients';

import Payment from './Pages/Payment';

import {BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import BookPage from './Pages/BookPage';
import CartPage from './Pages/CartPage';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

import users from './DataBases/userDB'
import Perfil from './Pages/Pefil';
import EditProducts from './Pages/EditProducts';
import Context from './context/Context';

function App() {

  const {
    bookList,
    filterByCategory,
    filterBooks,
    filterByGenre,
    filterByPrice,
    orderByColumn
  } = useContext(Context);

  useEffect(() => {
    filterBooks();
  }, [filterByCategory, filterByGenre, orderByColumn, filterByPrice])

  const navigate = useNavigate();

  // Lidando com login no front end
  const [login, setLogin] = useState(localStorage.getItem('isLogged') !== undefined ? localStorage.getItem('isLogged'): false ) // Verifica se o usuário está logado ou nao 

  //Função para logout
  const handleLogout = () => {
    setLogin(false)
    localStorage.setItem('isLogged', false);
    localStorage.setItem('user', JSON.stringify({}))
    navigate('/')
    
  }

  const doLogin = (bool) =>
  {
    setLogin(bool);
  }


  const [cart, setCart] = useState([]);
  
  /*GERENCIAMENTO DO CARRINHO */
  const addItem = (item) => {
    setCart([...cart, item]);
  }

  const clearCart = () =>{
    setCart([]);
  }

  const deleteItem = (item) =>
  {
    let filteredCart = cart.filter(i => i.id !== item.id)
    setCart(filteredCart);
  }
  
  return (
        <div className="App">
          <TopBar login={login} handleLogout={handleLogout}></TopBar>
          <NavBar></NavBar>

          <Routes>
            <Route path='/bookpage/:id' element={<BookPage bookList={bookList} addItem={addItem}/>} />
            <Route path='/payment' element={<Payment cart={cart} clearCart={clearCart} />} />
            <Route path='/cart' element={<CartPage cart={cart} deleteItem={deleteItem} clearCart={clearCart}/>} />
            <Route path='/sign-in' element={<SignIn users={users} doLogin={doLogin}/>} />
            <Route path='/sign-up' element={<SignUp users={users} />} />
            <Route path='/admin/edit/admins' element={<EditAdmins users={users} />} />
            <Route path='/admin/edit/clients' element={<EditClients users={users} />} />
            <Route path='/admin/edit/products' element={<EditProducts bookList={bookList} />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/perfil' element={<Perfil user={login === true ? JSON.parse(localStorage.getItem('user')) : null} />} />
            <Route exact path="/" element={<Home bookList={bookList}/>} />
            <Route path="*" element={
              <div> Caminho nao existe</div>
            } />
          </Routes>
          <Footer></Footer>
        </div>
  );
}

export default App;
