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

  const [filterByGenre, setFilterByGenre] = useState({
    genreFilter: '',
  });

  const [orderByColumn, setOrderByColumn] = useState({
    order: {column: '', sort: ''},
  })

  const categorySwitch = (categoryFilter, filteredArr) => {
    switch (categoryFilter) {
      case 'Most sold':
        const sortBySoldQdt = filteredArr.sort((a,b) => {
          if (a.sold_qtd > b.sold_qtd) {
            return 1;
          }
          if (a.sold_qtd < b.sold_qtd) {
            return 0;
          }
          return 0;
        })
        return sortBySoldQdt.slice(0,6);
      case 'All':
        return filteredArr;
      default:
        return filteredArr.filter((book) => book.category.includes(categoryFilter));
    }
  }

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
    console.log(newList2);
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
    const { order } = orderByColumn;
    let filteredArr = data;
    if (categoryFilter) {
      filteredArr = categorySwitch(categoryFilter, filteredArr)
    }
    if (genreFilter) {
      filteredArr = filteredArr.filter((el) => el.genre.includes(genreFilter))
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

  useEffect(() => {
    console.log(bookList);
  }, [bookList])

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
