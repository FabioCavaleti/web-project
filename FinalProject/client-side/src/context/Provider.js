/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import Context from './Context';
import * as BooksApi from '../helpers/BookApi'

function Provider({ children }) {

  const [filterByName, setFilterByName] = useState({
    filterByName: '',
  });

  const [filterByCategory, setFilterByCategory] = useState({
    categoryFilter: '',
  });

  const [filterByPrice, setFilterByPrice]= useState({
    priceFilter: '',
  })

  const [filterByGenre, setFilterByGenre] = useState({
    genreFilter: '',
  });

  const [orderByColumn, setOrderByColumn] = useState({
    order: {column: '', sort: ''},
  })

  const excludeFilters = () => {
    setFilterByCategory({
      categoryFilter: '',
    })
    setFilterByPrice({
      priceFilter: '',
    })
    setFilterByGenre({
      genreFilter: '',
    })
    setOrderByColumn({
      order: {column: '', sort: ''},
    })
  }

  const categorySwitch = (categoryFilter, filteredArr) => {
    switch (categoryFilter) {
      case 'All':
        return filteredArr;
      default:
        return filteredArr.filter((book) => book.category.includes(categoryFilter));
    }
  }
  
  const priceSwitch = (priceFilter, Arr) => {
    switch (priceFilter) {
      case '30':
        return Arr.filter((el) => el.price <= 30);
      case '30 - 50':
        return Arr.filter((el) => el.price >= 30 && el.price <= 50);
      case '50 - 80':
        return Arr.filter((el) => el.price >= 50 && el.price <= 80);
      case '80 - 140':
        return Arr.filter((el) => el.price >= 80 && el.price <= 140);
      default:
        return Arr.filter((el) => el.price >= 140);
    }
  };

  const sorting = (Arr, sort) => {
    const MENOS_UM = -1;
    return Arr.sort((a, b) => {
      if (a.title.toLowerCase() > b.title.toLowerCase()) { 
        return sort === "ASC" ? 1 : MENOS_UM;
      }
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return sort === "ASC" ? MENOS_UM : 1;
      }
      return 0;
    });
  };

  const sortByColumn = (Arr, sort, column) => {
    const newList = Arr.filter((planetObj) => planetObj[column] !== 'unknown');
    const newList1 = Arr.filter((planetObj) => planetObj[column] === 'unknown');
    const newList2 = newList.sort((a, b) => {
      if (Number(a[column]) === Number(b[column])) return 0;
      if (sort === 'ASC') return Number(a[column]) - Number(b[column]);
      if (sort === 'DESC') return Number(b[column]) - Number(a[column]);
      return 0;
    });
    newList1.forEach((el) => newList2.push(el));
    return newList2;
  }
  

  const orderSwitch = (order, filteredArr) => {
    const { column, sort } = order;
    if (column === "title") {
      return sorting(filteredArr, sort)
    } else {
      return sortByColumn(filteredArr, sort, column)
    }
  };


  const filterBooks = () => {
    const { categoryFilter } = filterByCategory;
    const { genreFilter } = filterByGenre;
    const { priceFilter } = filterByPrice;
    const { order } = orderByColumn;
    let filteredArr = data;
    if (categoryFilter) {
      filteredArr = categorySwitch(categoryFilter, filteredArr);
    }
    if (priceFilter) {
      filteredArr = priceSwitch(priceFilter, filteredArr);
    }
    if (genreFilter) {
      filteredArr = filteredArr.filter((el) => el.genre.includes(genreFilter));
    }
    if (order.column) {
      filteredArr = orderSwitch(order, filteredArr);
    }
    setBookList(filteredArr);
  }

  const [bookList, setBookList] = useState([]);
  const [data, setData] = useState([]);
  const [filterArea, ableFilterArea] = useState(false);

  useEffect(() => {
    BooksApi.getBooks().then((Arr) => setBookList(Arr));
    BooksApi.getBooks().then((Arr) => setData(Arr));
  }, []);

  // useEffect(() => {
  //   console.log(bookList);
  // }, [bookList])

  return (
    <Context.Provider
      value={ {
        filterByName,
        setFilterByName,
        filterByCategory,
        setFilterByCategory,
        bookList,
        setBookList,
        data,
        setData,
        filterBooks,
        filterArea,
        ableFilterArea,
        filterByGenre,
        setFilterByGenre,
        orderByColumn,
        setOrderByColumn,
        filterByPrice,
        setFilterByPrice,
        excludeFilters,
      } }
    >
      {children}
    </Context.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
