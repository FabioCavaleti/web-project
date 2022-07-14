import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DescriptionCard from '../Components/DescriptionCard';
import InfoCard from '../Components/InfoCard';
import Details from '../Components/Details';

const BookPage = ({bookList, addItem}) => {

    // PEGANDO DADOS DO LIVRO 
    const params = useParams()
    const [book, setBook] = useState(bookList.filter(book => book.id == params.id)[0]);


   
    useEffect(() =>{
        setBook(bookList.filter(book => book.id == params.id)[0])
        console.log(book)
    }, [params])

    return ( 
        <>
            <InfoCard book={book} addItem={addItem}/>
            <DescriptionCard book={book} />
            <Details book={book}/>
        </>
    );
}
 
export default BookPage;