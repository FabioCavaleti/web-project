import React, { useContext, useState } from 'react'
import Context from '../context/Context';

export default function ChosePrice () {

  const { setFilterByPrice } = useContext(Context);

  const setPriceInput = (value) => {
    setFilterByPrice({
      priceFilter: value,
    })
  }

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <div className='chose-filters'>
      <button
        onClick={handleClick}
      >Faixa de Preço</button>
      {
        clicked && (
          <div className='chose-filters'>
            <label htmlFor="30">
              <input
                name="ChosePrice"
                type="radio"
                id="30"
                value="30"
                onChange={ ({ target }) => setPriceInput(target.value) }
              />
              Até R$30
            </label>
            <label htmlFor="30 - 50">
              <input
                name="ChosePrice"
                type="radio"
                id="30 - 50"
                value="30 - 50"
                onChange={ ({ target }) => setPriceInput(target.value) }
              />
              R$30 - R$50
            </label>
            <label htmlFor="50 - 80">
              <input
                name="ChosePrice"
                type="radio"
                id="50 - 80"
                value="50 - 80"
                onChange={ ({ target }) => setPriceInput(target.value) }
              />
              R$50 - R$80
            </label>
            <label htmlFor="80 - 140">
              <input
                name="ChosePrice"
                type="radio"
                id="80 - 140"
                value="80 - 140"
                onChange={ ({ target }) => setPriceInput(target.value) }
              />
              R$80 - R$140
            </label>
            <label htmlFor="140">
              <input
                name="ChosePrice"
                type="radio"
                id="140"
                value="140"
                onChange={ ({ target }) => setPriceInput(target.value) }
              />
              Acima de R$140
            </label>
          </div>
        )
      }
    </div>
  )
}