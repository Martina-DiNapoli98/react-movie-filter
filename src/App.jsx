import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import movies from './data/movies'

function App() {
  const [newMovies, setNewMovies] = useState(movies)
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Fantascienza', 'Thriller', 'Romantico', 'Azione'];


  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    setNewMovies(movies.filter(movie => movie.genre.includes(selectedOption)))
  }, [selectedOption])


  return (
    <>
      <div className='container'>
        <h1>
          My Movies
        </h1>
        <label htmlFor="options" className="form-label">Scegli un'opzione:</label>
        <select
          id="options"
          value={selectedOption}
          onChange={handleChange}
          className="form-select m-2"
        >
          <option value="">Seleziona:</option>
          {options.map((option, index) => (
            <option key={index}>
              {option}
            </option>
          ))}
        </select>
        <div className='card'>
          <ul className='list'>
            {
              newMovies.map((movie, index) => (
                <li key={`movie-${index}`}>
                  {movie.title}

                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
