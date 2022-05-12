import React, { useState } from 'react'

export const Search = () => {

  const [searchString, setSearchString] = useState('')

  console.log({searchString})

  return (
    <form>
      <label>Search your Pokémon here</label>
      <input type='search' aria-label='search bar for pokemon' data-testid='searchBar' onChange={(e) => setSearchString(e.target.value)}/>
    </form>
  )
}