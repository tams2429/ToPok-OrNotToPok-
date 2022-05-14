import { useState } from 'react'

// STYLESHEETS
import './index.css';

export const SearchBar = ({searchString, setSearchString}) => {

  // const [searchString, setSearchString] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setSearchString(e.target.value)
  }

  return (
    <div>
      <input className='searchBar' type='search' placeholder='Search your Pokémon here...' aria-label='search bar for pokemon' data-testid='searchBar' onChange={handleChange} value={searchString}/>
    </div>
  )
}
