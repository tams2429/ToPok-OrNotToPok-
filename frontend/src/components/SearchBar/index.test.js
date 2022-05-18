import { render, fireEvent } from '@testing-library/react'
import { SearchBar } from './index' 

describe('Search Bar component', () => {

  const mockSetSearchString = jest.fn()
  const mockHandleSearch = jest.fn()
  const initialSearchString = ''
  const mockSearchString = 'pikachu'


  it('should render properly and match snapshot', () => {
    const searchBarComponent = render(<SearchBar searchString={initialSearchString} setSearchString={mockSetSearchString} handleSearch={mockHandleSearch}/>)
    expect(searchBarComponent.container).toMatchSnapshot()
  })

  
  it('should call the mockSetSearchString function (i.e. updates the searchString that is used to call the API) with the current value in the input component', () => {
    const {getByLabelText} = render(<SearchBar searchString={initialSearchString} setSearchString={mockSetSearchString} handleSearch={mockHandleSearch}/>)
    const searchBarInputComponent = getByLabelText('Searchbar-for-pokemon')
    fireEvent.change(searchBarInputComponent, {
      target: { value: mockSearchString },
    })
    expect(mockSetSearchString).toHaveBeenCalledTimes(1)
    expect(mockSetSearchString).toHaveBeenCalledWith(mockSearchString)
  })

  it('should call the mockHandleSearch function (i.e. API fetch) when the user presses the Enter key on the keyboard', () => {
    const {getByLabelText} = render(<SearchBar searchString={initialSearchString} setSearchString={mockSetSearchString} handleSearch={mockHandleSearch}/>)
    const searchBarInputComponent = getByLabelText('Searchbar-for-pokemon')
    fireEvent.keyUp(searchBarInputComponent, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
      keyCode: 13
    })
    expect(mockHandleSearch).toHaveBeenCalledTimes(1)
  })

})