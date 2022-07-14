import React, {useState} from 'react';
import './Sign.css'
import * as UserApi from '../helpers/UserApi'
import { useNavigate } from 'react-router-dom';

const SignUp = ({handleLogin, handleAdm, handleUser}) => {

    const navigate = useNavigate();

    const [login, setLogin] = useState(""); // Recebe credenciais de login do input
    const [pass, setPass] = useState(""); // Recebe credenciais de senha do input
    const [name, setName] = useState(""); // Recebe nome do input
    const [email, setEmail] = useState(""); // Recebe email do input
    const [phone, setPhone] = useState(""); // Recebe phone do input
    const [addr, setAddr] = useState(""); // Recebe endereço do input

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        // Criando json que vai ser enviado para o servidor cadastrar no banco.
        let userObj = {userName: login, password: pass, name: name};
        if(email != "")
        {
            userObj.email = email;
        }
        if(phone != "")
        {
            userObj.tel = phone;
        }
        if(addr != "")
        {
            userObj.addr = addr;
        }
        UserApi.addUser(userObj);

        window.alert("Cadastro efetuado com sucesso!!")

        navigate('/sing-in');


    }

    return (
    <div className='sign-in container-fluid'>
        <h1>Registre - se</h1>
        <form onSubmit={handleSubmit} className='login-form'>
            <label>
                Usuário:
                <input type='text' name={login} onChange={(e) =>{setLogin(e.target.value)}} />
            </label>
            <label>
                Senha:
                <input type='password' name={pass} onChange={(e) => {setPass(e.target.value)}} />
            </label>
            <label>
                Nome:
                <input type='text' name={name} onChange={(e) => {setName(e.target.value)}} />
            </label>
            <label>
                email:
                <input type='email' name={email} onChange={(e) => {setEmail(e.target.value)}} />
            </label>
            <label>
                Telegone:
                <input type='text' name={phone} onChange={(e) => {setPhone(e.target.value)}} />
            </label>
            <label>
                Endereço:
                <input type='text' name={addr} onChange={(e) => {setAddr(e.target.value)}} />
            </label>
            <input className='sign-btn btn' value='Cadastre - se' type='submit'></input>
        </form>
    </div> 

    );
}
 
export default SignUp;