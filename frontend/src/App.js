import axios from 'axios'

// COMPONENTS
import { useState, useEffect } from 'react'
import { SearchBar } from './components/SearchBar'
import { SearchBtn } from './components/SearchBtn'

// STYLESHEETS
import './App.css';

export const App = () => {

  const [searchString, setSearchString] = useState('')
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  console.log({searchString})

  const pokemonSearchEndpoint = `/pokemon/${searchString}/`

  // useEffect(() => {
  //   setLoading(false)
  // }, [])

  // Upon completing initial render, enforced an initial 2 second delay to reset loading state back to false for aesthetic purposes
  // Can remove to improve perfomance
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  //API call/function to extract logic later
  const handleClick = async () => {
    //Extract following logic into a function and invoke
    console.log({pokemonSearchEndpoint})
    try {
      
      const response = await axios.get(pokemonSearchEndpoint)
      console.log({response})
    } 
    catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        Pokéspear
      </header>
      {loading ?
      <div className='loading-wrapper'>
        <p className='classic-1' />
        <div className='pokeball' />
      </div>
       :
        <>
          <SearchBar searchString={searchString} setSearchString={setSearchString}/>
          <SearchBtn btnText='Poké Search' searchString={searchString} onClick={handleClick}/>
          <SearchBtn btnText='Surprise Me' />
          {/* PokemonEntry card component goes here */}
        </>
      }

    </div>

  );
}