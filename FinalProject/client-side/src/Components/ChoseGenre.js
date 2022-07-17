import React, { useContext, useState } from 'react'
import Context from '../context/Context';

export default function ChoseGenre () {
  const genreArr =
  [
    ["Ação", "Action"],
    ["Fantasia", "Fantasy"],
    ["Aventura", "Adventure"],
    ["Terror", "Horror"],
    ["Suspense", "Thriller"],
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

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <div className='chose-filters'>
      <button
        onClick={handleClick}
      >Gênero</button>
      {
        clicked && genreArr.map((el, index) => (
          <label htmlFor={el[1]} key={index}>
            <input
              name="ChoseGenre"
              type="radio"
              id={el[1]}
              value={el[0]}
              onChange={ ({ target }) => setGenreInput(target.value) }
            />
            {el[0]}
          </label>
        ))
      }
    </div>
  )
}