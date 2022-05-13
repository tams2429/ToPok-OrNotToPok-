import { useState } from 'react'

export const SearchBar = ({searchString, setSearchString}) => {

  // const [searchString, setSearchString] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setSearchString(e.target.value)
  }

  return (
    <div>
      <label>Search your Pokémon here</label>
      <input type='search' placeholder='Search your Pokémon here...' aria-label='search bar for pokemon' data-testid='searchBar' onChange={handleChange} value={searchString}/>
    </div>
  )
}