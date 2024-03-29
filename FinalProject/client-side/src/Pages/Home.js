import React, { useContext } from 'react';
import Card from '../Components/Card'
import FilterControl from '../Components/FilterControl';
import Context from '../context/Context';
import './Home.css'
import BooksWrapper from './Home-style';


const Home = ({bookList}) => {
  const {
    filterArea
  } = useContext(Context)

  console.log(bookList)

  return ( 
      <div className='home-wrapper'>
        { filterArea && (
          <div className='filter-wrapper filter-container'>
            <FilterControl/>
          </div>
        )}
        <BooksWrapper filterArea={filterArea}>
            <ul className='books-container'>
              {bookList.map(book =>
                <li className='book-item' key={book._id}>
                  <Card book={book} ></Card>
                </li>
              )}
            </ul>
        </BooksWrapper>
      </div>
  );
}
 
export default Home;