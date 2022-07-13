import React from 'react'

export default function ChosePrice () {

  const setTypeInput = (value) => console.log(value);

  return (
    <div className='chose-filters'>
      <button>Faixa de Preço</button>
      <label htmlFor="30">
        <input
          name="ChosePrice"
          type="radio"
          id="30"
          value="30"
          onChange={ ({ target }) => setTypeInput(target.value) }
        />
        Até R$30
      </label>
      <label htmlFor="30 - 50">
        <input
          name="ChosePrice"
          type="radio"
          id="30 - 50"
          value="30 - 50"
          onChange={ ({ target }) => setTypeInput(target.value) }
        />
        R$30 - R$50
      </label>
      <label htmlFor="50 - 80">
        <input
          name="ChosePrice"
          type="radio"
          id="50 - 80"
          value="50 - 80"
          onChange={ ({ target }) => setTypeInput(target.value) }
        />
        R$50 - R$80
      </label>
      <label htmlFor="80 - 140">
        <input
          name="ChosePrice"
          type="radio"
          id="80 - 140"
          value="80 - 140"
          onChange={ ({ target }) => setTypeInput(target.value) }
        />
        R$80 - R$140
      </label>
      <label htmlFor="140">
        <input
          name="ChosePrice"
          type="radio"
          id="140"
          value="140"
          onChange={ ({ target }) => setTypeInput(target.value) }
        />
        Acima de R$140
      </label>
    </div>
  )
}