import React from 'react';
import Card from '../Components/Card'

const Home = ({bookList}) => {

    return ( 
        <div className='container'>
                  <ul className='books-container'>
                    {bookList.map(book =>
                      <li className='book-item' key={book._id}>
                        <Card book={book} ></Card>
                      </li>
                    )}  

                  </ul>
                </div>
     );
}
 
export default Home;