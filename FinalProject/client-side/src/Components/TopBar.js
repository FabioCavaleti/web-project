import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import users from '../DataBases/userDB';
import './TopBar.css'

const TopBar = ({login, handleLogout}) => {

    let usr = (login == 'true' ? JSON.parse(localStorage.getItem('user')) : {} )
    let adm = (usr != {} && usr.admin == true ? true : false)


    // const usr = login == true ? JSON.parse(localStorage.getItem('user')) : {}
    /*console.log("Teste")
    console.log(login)
    console.log(usr)
    console.log("adm", adm)*/

    
    return ( 
        <div className='top-bar'>
            <Link to='/'>
                Bookstore
            </Link>
            <div className='nav-itens'>

                <Link className={`${login ? 'hidden' : ''}`} to='/sign-in'>
                    Sign in
                </Link>
                
                <Link className={`${login ? 'hidden' : ''}`} to='/sign-up'>
                    Sign up
                </Link>
                <Link to='/admin' className={`${adm ? '' : 'hidden'}`}>
                    Admin
                </Link>
                <Link className={`${login ? '' : 'hidden'}`} to='/perfil'>
                    Perfil
                </Link>
                <button onClick={handleLogout} className={`${login ? 'logout-btn' : 'logout-btn hidden'}`}>
                    Logout
                </button>
                
                <Link to='/cart'>
                    Carrinho
                </Link>
                

            </div>

        </div>
     );
}
 
export default TopBar;