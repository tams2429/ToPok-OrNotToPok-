import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import { App } from './App';

jest.mock('axios')

describe('Main application', () => {

  const mockSearchString = 'mewtwo'
  const mockResponse = {
    data: {
      "name": "mewtwo",
      "description": "'t wast did create by a scientist after years of horrific gene splicing and dna engineering experiments.",
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
    }
  }
  const mockErrorResponse = {
    response: {
      data: {
        errorMessage: '400: Looks like something went wrong, please try again'
      }
    }
  }

  it('should render properly before search and match snapshot', () => {
    const appComponent = render(<App />)
    expect(appComponent.container).toMatchSnapshot()
  })

  it('should render the loading components when in a loading state', async () => {
    const { getByLabelText, getByText, getByTestId, container } = render(<App />)
    const searchBarInputComponent = getByLabelText('Searchbar-for-pokemon')
    fireEvent.change(searchBarInputComponent, {
      target: { value: mockSearchString },
    })

    axios.get.mockResolvedValueOnce(mockResponse)
    fireEvent.click(getByText('Poké Search'))

    await waitFor(() => {
      getByTestId('loading-text')
    })
    
    expect(container).toMatchSnapshot()

    await waitFor(() => {
      getByText(mockSearchString)
    })
  })

  it('should fetch and display the pokemon info when the user searches for a valid pokemon', async () => {
    const { getByLabelText, getByText, container } = render(<App />)
    const searchBarInputComponent = getByLabelText('Searchbar-for-pokemon')
    fireEvent.change(searchBarInputComponent, {
      target: { value: mockSearchString },
    })

    axios.get.mockResolvedValueOnce(mockResponse)
    fireEvent.click(getByText('Poké Search'))

    await waitFor(() => {
      getByText(mockSearchString)
    })
    
    expect(axios.get).toHaveBeenCalledWith(`/pokemon/${mockSearchString}`)
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(container).toMatchSnapshot()
  })

  it('should fetch and display pokemon info when user clicks on the Surprise Me button (i.e. random search)', async () => {
    const { getByLabelText, getByText, container } = render(<App />)
    const searchBarInputComponent = getByLabelText('Searchbar-for-pokemon')
    axios.get.mockResolvedValueOnce(mockResponse)
    fireEvent.click(getByText('Surprise Me'))

    await waitFor(() => {
      getByText(mockSearchString)
    })

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(container).toMatchSnapshot()
  })

  it('should throw an error message when the user searches for an invalid pokemon/error with network', async () => {
    const { getByLabelText, getByText, container } = render(<App />)
    const searchBarInputComponent = getByLabelText('Searchbar-for-pokemon')
    fireEvent.change(searchBarInputComponent, {
      target: { value: 'qwerty' },
    })
    axios.get.mockRejectedValueOnce(mockErrorResponse)
    fireEvent.click(getByText('Poké Search'))

    await waitFor(() => {
      getByText(mockErrorResponse.response.data.errorMessage)
    })

    expect(axios.get).toHaveBeenCalledWith(`/pokemon/qwerty`)
    expect(container).toMatchSnapshot()

  })

})