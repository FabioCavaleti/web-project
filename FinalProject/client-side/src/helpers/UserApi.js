
// Função que requisita usuário específico
export const getLogin = async (userObj) => {
    const url = `/api/login`;
    const response = await fetch(url, {
        method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
        body: JSON.stringify(userObj)
    });
    const data = await response.json();
    return data;
  }

  export const addUser = async (userObj) => {
    const url = `/api/addUser`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObj),
    });
    const data = await response.json();
    return data;
  }

// Função que requisita usuários para o servidor
 export const getUsers = async () => {
     const url = `/api/getUser/`;
     const response = await fetch(url);
     const data = await response.json();
     return data;
   }


export const deleteUserByName = async (name) => {
const url = `/api/deleteUser/${name}`;
const response = await fetch(url, {
  method: 'DELETE',
});
const data = await response.json();
return data;
}