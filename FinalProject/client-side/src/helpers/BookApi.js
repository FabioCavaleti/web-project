export const getBookByTitle = async (title) => {
  const url = `/api/getBook/${title}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export const getBooks = async () => {
  const url = `/api/getBook/`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export const addBook = async (bookObj) => {

  console.log(bookObj)
  const url = `/api/addBook`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookObj),
  });
  const data = await response.json();
  return data;
}

export const deleteBookByTitle = async (title) => {
  const url = `/api/deleteBook/${title}`;
  const response = await fetch(url, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
}

export const attBook = async (bookObj,bookToChange) => {
  const url = `/api/attBook/${bookToChange}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookObj),
  });
  const data = await response.json();
  console.log(data)
  return data;
}
