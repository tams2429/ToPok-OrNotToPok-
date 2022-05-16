import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const mockResponse = {
  "name": "mewtwo",
  "description": "'t wast did create by a scientist after years of horrific gene splicing and dna engineering experiments.",
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
}



// Test that the correct components have been initally rendered against snapshot (before API interaction)

// Test that loading state components have been rendered when loading state is true

// Test that the MockAPI is called when user interacts with the PokeSearch btn + with the correct parameters (i.e. with the MockPokemonName)

// Test that the MockAPI is called when the user clicks on the SurpriseMe btn correctly with the correct parameters + endpoint

// Test that the correct components have been rendered against snapshot after receiving MockPokemonInfo (i.e. response from API)
