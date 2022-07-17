import React from 'react';
import './Edit.css'


const EditAdmins = (props) => {
    const adminUsers = props.users.filter((usr) => usr.admin == true)

    return ( <div className='edit-admins manage container-fluid'>
        <h1>Adms</h1>
        <ul className='edit-list'>

            {adminUsers.map((adm) => <li key={adm._id}>
                {`Nome: ${adm.name}`}
                <div className='buttons'>
                    <button className='edit-button no-btn-style'>Editar</button>
                    <button className='exclude-button no-btn-style'>Excluir</button>
                </div>
            </li>)}
        </ul>
    </div> );
}
 
export default EditAdmins;