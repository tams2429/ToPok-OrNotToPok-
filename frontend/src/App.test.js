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



// Test that the correct components have been rendered against snapshot

// Test that loading state components have been rendered when loading state is true

// Test using mockData that the PokeEntry card component is correctly rendered

// Test that the SurpriseMe button correctly calls the API with the correct parameters + endpoint

// Test that the API is being called with the correct parameters with PokeSearch button

