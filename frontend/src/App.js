import axios from 'axios'

// COMPONENTS
import { useState } from 'react'
import { PokemonEntry } from './components/PokemonEntry'
import { Loading } from './components/Loading'
import { SearchForm } from './components/SearchForm'

// STYLESHEETS
import './App.css'

// CONSTANTS
import { pokemonSearchEndpointPrefix, totalSearchablePokemon } from './constants' 

export const App = () => {

  const [searchString, setSearchString] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [pokemonInfo, setPokemonInfo] = useState(null)

  // Fetches pokemon based on user's search string query
  const handleSearch = async (e) => {
    e.preventDefault()

    // Clear any existing errorMessage and start loading spinner
    setErrorMessage('')
    setLoading(true)

    // Logic to convert searchString to lowercase
    const lowerCaseSearchString = searchString.toLowerCase()

    try {
      const response = await axios.get(pokemonSearchEndpointPrefix + lowerCaseSearchString)

      // Updates state with response from API endpoint and stop loading spinner
      setPokemonInfo(response.data)
      setLoading(false)
    } 
    catch (err) {

      // Updates state with error response from API endpoint and stop loading spinner
      setLoading(false)
      setErrorMessage(err.response.data.errorMessage)
    }
  }

  // Generates random pokemon id upto and including id: 898 and fetches pokemon
  const handleRandomSearch = async() => {
    const randomId = Math.floor(Math.random() * totalSearchablePokemon) + 1
    setErrorMessage('')
    setLoading(true)
    
    try {
      const response = await axios.get(pokemonSearchEndpointPrefix + randomId.toString())
      setPokemonInfo(response.data)
      setLoading(false)
    } 
    catch (err) {
      setLoading(false)
      setErrorMessage(err.response.data.errorMessage)
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Pokéspear</h1>
      </header>
      <main>
        {loading ?
        <Loading />
        :
        <section>
          <SearchForm handleSearch={handleSearch} searchString={searchString} setSearchString={setSearchString} handleRandomSearch={handleRandomSearch}/>
          {errorMessage ? 
          <h2 className='error-message'>{errorMessage}</h2>
          :
          pokemonInfo && <PokemonEntry {...pokemonInfo}/>
          }
        </section>
        }
      </main>
    </div>
  )
}
