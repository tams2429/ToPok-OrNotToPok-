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

  // Upon completing initial render, enforced an initial 2 second delay to reset loading state back to false for aesthetic purposes
  // Can remove to improve perfomance
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  //API call/function to extract logic later
  const handleSearch = async (e) => {
    e.preventDefault()
    //Clear any existing errorMessage
    setErrorMessage('')

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

  // Random pokemon id upto and including id: 898
  const handleRandomSearch = () => {

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
      //TODO: refactor by extracting into a loading component
      <div className='loading-wrapper'>
        <p className='classic-1' />
        <div className='pokeball' />
      </div>
       :
        //TODO: refactor to using a semantic <form /> element and handleSearch => handleSubmit?
        //DONE => removed onClick={handleSearch} from <SearchBtn /> props and type=submit => to test if it works?
      <>
        <form onSubmit={handleSearch}>
          <SearchBar searchString={searchString} setSearchString={setSearchString} handleSearch={handleSearch}/>
          <SearchBtn btnText='Poké Search' searchString={searchString} isDisabled={!searchString}/>
          <SearchBtn btnText='Surprise Me' isDisabled={false}/>
        </form>  
        {errorMessage ? 
        <h2 className='error-message'>{errorMessage}</h2>
        :
        pokemonInfo && <PokemonEntry {...pokemonInfo}/>
        // mockResponse && <PokemonEntry {...mockResponse}/>
        }
        {/* {mockResponse && <PokemonEntry {...mockResponse}/>} */}
      </>
      }
    </div>

  );
}
