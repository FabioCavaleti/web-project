import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sign.css'
import * as userApi from '../helpers/UserApi'

const SignIn = ({login, handleAdm, handleUser, handleLogin}) => {

    const [inputLogin, setInputLogin] = useState(""); // Recebe credenciais de login do input
    const [inputPass, setInputPass] = useState(""); // Recebe credenciais de senha do input
    const [status, setStatus] = useState({
        type: '',
        message: ''
    })
    const navigate = useNavigate();


    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        if(login == false)
        {

            let userObj = {userName: inputLogin, password: inputPass}
            let user = await userApi.getLogin(userObj)
            
    
            // let user = users.filter((item) => item.name == login && item.password == pass ? true : false)
    
            if(user.length == 1)
            {
                setStatus({type: "Sucesso", message:"Login efetuado com sucesso!!"})
                handleLogin(true)
                handleUser(user[0])
                if(user[0].admin == true)
                {
                    handleAdm(true)
                }
                else{
                    handleAdm(false)
                }
                window.alert(`Olá ${user[0].name}, login efetuado com sucesso!!`)
                
                navigate('/')
    
            }
            else
            {
                setStatus({type: 'failed', message:'Login ou senha invalido!!'})
                window.alert(`Login ou senha invalidos!!`)
            }
        }
        else
        {
            window.alert("Usuario já está logado!!")
        }

    }


    return ( <div className='sign-in container-fluid'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className='login-form'>
                    <label>
                        Usuário:
                        <input type='text' name={inputLogin} onChange={(e) =>{setInputLogin(e.target.value)}} />
                    </label>
                    <label>
                        Senha:
                        <input type='password' name={inputPass} onChange={(e) => {setInputPass(e.target.value)}} />
                    </label>
                    <input className='sign-btn btn' value='Fazer login' type='submit'></input>

                </form>
    </div> );
}
 
export default SignIn;