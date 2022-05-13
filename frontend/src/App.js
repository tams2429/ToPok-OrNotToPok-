// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { SearchBtn } from './components/SearchBtn'
import axios from 'axios'

export const App = () => {

  const [searchString, setSearchString] = useState('')

  console.log({searchString})

  const pokemonSearchEndpoint = `/pokemon/${searchString}/`

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
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <SearchBar searchString={searchString} setSearchString={setSearchString}/>
        <SearchBtn btnText='Poké Search' searchString={searchString} onClick={handleClick}/>
        <SearchBtn btnText='Surprise Me' />
        <button onClick={handleClick}>click me</button>
        <p>
          Test
        </p>
      </header>
    </div>
  );
}