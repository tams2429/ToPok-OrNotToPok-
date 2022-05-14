import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Test that the correct components have been rendered against snapshot

// Test that loading state components have been rendered when loading state is true

// Test using mockData that the PokeEntry card component is correctly rendered

// Test that the SurpriseMe button correctly calls the API with the correct parameters + endpoint

// Test that the API is being called with the correct parameters with PokeSearch button

