import React from 'react';
import './Edit.css'
import * as UserApi from '../helpers/UserApi'
import Context from '../context/Context'
import {useContext} from 'react'



const EditClients = (props) => {

    const { AttBookList } = useContext(Context);



    const deleteBook = (userName) => {
        return function(e){
            e.preventDefault()
            console.log(userName)
            UserApi.deleteUserByName(userName).then(AttBookList())
        }
    }






    return ( <div className='edit-clients manage container-fluid'>

            <h1>Clientes</h1>
            <ul className='edit-list'>

                {props.users.map((usr) => <li key={usr._id}>
                    {`Nome: ${usr.name}`}
                    <div className='buttons'>
                        <button className='edit-button no-btn-style'>Editar</button>
                        <button className='exclude-button no-btn-style' onClick={deleteBook(usr.name)}>Excluir</button>
                    </div>
                </li>)}
            </ul>
        
    </div> );
}
 
export default EditClients;