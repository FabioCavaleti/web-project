import React, { useContext, useEffect, useState } from 'react'
import Context from '../context/Context';

export default function ChoseSort () {
  const optionsArr =
  [
    ['Selecione', {column: '',  sort: ''}],
    ['Maior Preço', {column: 'price',  sort: 'ASC'}],
    ['Menor Preço', {column: 'price',  sort: 'DESC'}],
    ['Mais Vendidos', {column: 'sold_qtd',  sort: 'ASC'}],
    ['A-Z', {column: 'title',  sort: 'ASC'}],
    ['Z-A', {column: 'title',  sort: 'DESC'}],
    ['Data de Lançamento', {column: '', sort: ''}],
  ];

  const {
    setOrderByColumn,
  } = useContext(Context);

  const handleChange = ({target}) => {
    const { value } = target;
    const order = optionsArr[value][1]
    console.log(order);
    setOrderByColumn({
      order
    })
  };

  return (
    <div className='chose-filters'>
      <label>
        <select
          name='options'
          onChange={ handleChange }
        >
          {
            optionsArr.map((option, index) => (
              <option key={index} value={index} >{option[0]}</option>
            ))
          }
        </select>
      </label>
    </div>
  )
}