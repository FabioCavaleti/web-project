import React from 'react';
import './Edit.css'

const EditClients = (props) => {


    return ( <div className='edit-clients manage container-fluid'>

            <h1>Clientes</h1>
            <ul className='edit-list'>

                {props.users.map((usr) => <li key={usr._id}>
                    {`Nome: ${usr.name}`}
                    <div className='buttons'>
                        <button className='edit-button no-btn-style'>Editar</button>
                        <button className='exclude-button no-btn-style'>Excluir</button>
                    </div>
                </li>)}
            </ul>
        
    </div> );
}
 
export default EditClients;