import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import movies from './data/movies'

function App() {
  const [newMovies, setNewMovies] = useState(movies)
  const [selectedOption, setSelectedOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('')
  const options = ['Fantascienza', 'Thriller', 'Romantico', 'Azione'];


  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  function handleFormSubmit(e) {
    e.preventDefault()

    setSearchQuery('')
  };

  useEffect(() => {
    setNewMovies(movies.filter(movie => movie.genre.includes(selectedOption)))
  }, [selectedOption])


  useEffect(() => {
    setNewMovies(movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery])

  return (
    <>
      <div className='container'>
        <h1>
          My Movies
        </h1>
        <form onSubmit={handleFormSubmit}>
          <input type="text"
            className="search"
            name="search"
            id="search"
            placeholder='type here your movie'
            value={searchQuery}
            onChange={handleSearchQuery}
          />
          <button className='btn btn-primary' type='submit'>submit</button>
        </form>

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
