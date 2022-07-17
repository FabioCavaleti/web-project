import React from 'react';
import './Perfil.css'

const Perfil = (props) => {

    const createUserInfo = (keys, values) => {
        const arr = [];
        for(let i = 0; i < keys.length; i++)
            arr.push({key: keys[i],value: values[i]})

        return arr;
    }


    let userInfo = createUserInfo(Object.keys(props.user), Object.values(props.user));
    userInfo = userInfo.filter((item) => item.key !== 'password' && item.key !== 'admin' && item.key !== '_id' && item.key !== "__v")
    console.log(userInfo)
    return ( 
        <div className='container-perfil container-fluid'>
            <h1>Perfil</h1>
            <ul className='user-list-info'>
                {
                    userInfo.map((item) =>
                        <li className='user-list-item'>{`${item.key} : ${item.value}`}</li>
                        )  
                }
            </ul>

        </div>
     );
}
 
export default Perfil;