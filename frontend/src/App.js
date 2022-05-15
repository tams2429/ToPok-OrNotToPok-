import axios from 'axios'

// COMPONENTS
import { useState, useEffect } from 'react'
import { SearchBar } from './components/SearchBar'
import { SearchBtn } from './components/SearchBtn'
import { PokemonEntry } from './components/PokemonEntry'

// STYLESHEETS
import './App.css';

export const App = () => {

  const [searchString, setSearchString] = useState('')
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [pokemonInfo, setPokemonInfo] = useState(null)

  console.log({searchString})

  const pokemonSearchEndpointPrefix = '/pokemon/'

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
    //Logic to convert searchString to lowercase
    setLoading(true)
    const lowerCaseSearchString = searchString.toLowerCase()
    //TODO: refactor by extracting following logic into a function and invoke
    try {
      
      const response = await axios.get(pokemonSearchEndpointPrefix + lowerCaseSearchString)
      setPokemonInfo(response.data)
      setLoading(false)
    } 
    catch (err) {
      setLoading(false)
      setErrorMessage(err.response.data.errorMessage)
    }
  }

  const mockResponse = {
    "name": "mewtwo",
    "description": "'t wast did create by a scientist after years of horrific gene splicing and dna engineering experiments.",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
  }

  console.log('Pokemon info is:', pokemonInfo)
  console.log('Error message is:', errorMessage)
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
          {/* {error handling goes here} */}
          {/* {errorMessage ? 
          <h2>{errorMessage} Please try again</h2>
          :
          pokemonInfo && <PokemonEntry {...pokemonInfo}/>
          } */}
          {pokemonInfo && <PokemonEntry {...pokemonInfo}/>}
          {/* {mockResponse && <PokemonEntry {...mockResponse}/>} */}
        </>
      }
    </div>

  );
}
