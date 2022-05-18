import { render } from '@testing-library/react'
import { PokemonEntry } from './index'

describe('Pokemon Entry Card Component', () => {

  const initialProps = {
    name: 'mewtwo',
    description: 't wast did create by a scientist after years of horrific gene splicing and dna engineering experiments.',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png'
  }

  it('should render properly and match snapshot', () => {
    const pokemonEntryComponent = render(<PokemonEntry {...initialProps}/>)
    expect(pokemonEntryComponent.container).toMatchSnapshot()
  })
})