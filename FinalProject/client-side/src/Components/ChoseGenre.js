import React, { useContext } from 'react'
import Context from '../context/Context';

export default function ChoseGenre () {
  const genreArr =
  [
    ["Ação", "Action"],
    ["Fantasia", "Fantasy"],
    ["Aventura", "Adventure"],
    ["Terror", "Horror"],
    ["Romance", "Novel"],
    ["Auto Ajuda", "Self Help"],
    ["Política", "Politics"],
    ["Didático", "Didactic"]
  ];

  const { setFilterByGenre } = useContext(Context);

  const setGenreInput = (value) => {
    setFilterByGenre({
      genreFilter: value,
    })
  }

  return (
    <div className='chose-filters'>
      <button>Gênero</button>
      {
        genreArr.map((el, index) => (
          <label htmlFor={el[1]} key={index}>
            <input
              name="ChosePrice"
              type="radio"
              id={el[1]}
              value={el[1]}
              onChange={ ({ target }) => setGenreInput(target.value) }
            />
            {el[0]}
          </label>
        ))
      }
    </div>
  )
}