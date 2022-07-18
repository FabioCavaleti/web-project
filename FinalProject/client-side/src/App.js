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
import AddBook from './Pages/AddBookPage';
import EditClients from './Pages/EditClients';
import EditBookForm from './Pages/EditBookForm';

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

  // Lista de livros disponiveis e itens do carrinho
  // const [bookList, setList] = useState([]);

  const {
    bookList,
    filterByCategory,
    filterBooks,
    filterByGenre,
    filterByPrice,
    orderByColumn
  } = useContext(Context);

  //Atualizar booklist direto com o banco



  useEffect(() => {
    filterBooks();
  }, [filterByCategory, filterByGenre, orderByColumn, filterByPrice])

  const navigate = useNavigate();

  // Lidando com login no front end
  const [login, setLogin] = useState(false) // Verifica se o usuario está logado ou nao 
  const [adm, setAdm] = useState(false);
  const [user, setUser] = useState({});

  //Função para logout
  const handleLogout = () => {
    setLogin(false)
    setAdm(false)
    setUser({})
    window.alert('Logout executado com sucesso!!')
    navigate('/')
    
  }

  //Funções para gerenciar login
  const handleLogin = (bool) =>
  {
    setLogin(bool);
  }

  const handleAdm = (bool) =>{
    setAdm(bool)
  }

  const handleUser = (usr) => {
    setUser(usr);
  }
  
  


  const [cart, setCart] = useState([]);
  
  /*GERENCIAMENTO DO CARRINHO */
  const addItem = (item) => {
    if(cart.indexOf(item) === -1)
    {
      console.log(item)
      if(item.inv_qtd > 0)
      {
        let cartItem = item;
        cartItem.qtd = 1;
        setCart([...cart, cartItem]);
        window.alert("Item adicionado ao carrinho")

      }
      else
      {
        window.alert('Produto fora de estoque')
      }
    }
    else
    {
      window.alert('Produto ja adicionado no carrinho')
    }
  }

  const reduceQuantity = (item) =>
  {
    if(item.qtd > 1 )
    {
      item.qtd -= 1;
      let index = cart.indexOf(item)
      let filteredCart = cart.filter(i => i._id !== item._id)
      filteredCart.splice(index, 0, item)
      setCart(filteredCart);
    }
    else{
      deleteItem(item);
    }
  }

  const addQuantity = (item) => {
    if( item.qtd < item.inv_qtd)
    {
      item.qtd += 1;
      let index = cart.indexOf(item)
      let filteredCart = cart.filter(i => i._id !== item._id)
      filteredCart.splice(index, 0, item);
      setCart(filteredCart);

    }
    else
    {
      window.alert("Não é possível adicionar mais deste produto ao carrinho")
    }
  }

  const clearCart = () =>{
    setCart([]);
  }

  const deleteItem = (item) =>
  {
    let filteredCart = cart.filter(i => i._id !== item._id)
    setCart(filteredCart);
  }

  // Teste
  
  return (
        <div className="App">
          <TopBar login={login} handleLogout={handleLogout} user={user} adm={adm}></TopBar>
          <NavBar></NavBar>

          <Routes>
            <Route path='/bookpage/:id' element={<BookPage bookList={bookList} addItem={addItem} />} />
            <Route path='/payment' element={<Payment cart={cart} clearCart={clearCart} />} />
            <Route path='/cart' element={<CartPage login={login} cart={cart} deleteItem={deleteItem} clearCart={clearCart} addQuantity={addQuantity} reduceQuantity={reduceQuantity}/>} />
            <Route path='/sign-in' element={<SignIn login={login} adm={adm} user={user} handleLogin={handleLogin} handleAdm={handleAdm} handleUser={handleUser}/>} />
            <Route path='/sign-up' element={<SignUp login={login} handleLogin={handleLogin} handleAdm={handleAdm} handleUser={handleUser} />} />
            <Route path='/admin/edit/admins' element={<EditAdmins users={users} />} />
            <Route path='/admin/edit/clients' element={<EditClients users={users} />} />
            <Route path='/admin/edit/products' element={<EditProducts bookList={bookList} />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/perfil' element={<Perfil user={user} />} />
            <Route exact path="/" element={<Home bookList={bookList}/>} />
            <Route path='/editBook' element={<EditBookForm/>}/>   
            <Route path='/addBook' element={<AddBook/>}/>

            <Route path="*" element={
              <div> Caminho nao existe</div>
            } />
          </Routes>
          {/* <Footer></Footer> */}
        </div>
  );
}

export default App;
