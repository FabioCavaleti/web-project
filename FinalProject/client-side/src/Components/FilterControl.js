import React, { useContext } from 'react'
import Context from '../context/Context'
import ChoseGenre from './ChoseGenre'
import ChosePrice from './ChosePrice'
import ChoseSort from './ChoseSort'

export default function FilterControl () {

  const {
    excludeFilters,
  } = useContext(Context);

  const handleClick = () => {
    excludeFilters();
  };

  return (
    <div>
      <ChosePrice/>
      <ChoseGenre/>
      <ChoseSort/>
      <button
        onClick={handleClick}
      >Limpar Filtros</button>
    </div>
  )
}