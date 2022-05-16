import { useState } from 'react'

// STYLESHEETS
import './index.css';

export const SearchBar = ({searchString, setSearchString, handleSearch}) => {

  const handleChange = e => {
    e.preventDefault()
    setSearchString(e.target.value)
  }

  const handleKeyUp = e => {
    if (e.keyCode === 13) {
      return handleSearch()
    }
  }

  return (
    <div>
      <input className='searchBar' type='search' placeholder='Search your Pokémon here...' aria-label='search bar for pokemon' data-testid='searchBar' onChange={handleChange} value={searchString} onKeyUp={handleKeyUp}/>
    </div>
  )
}