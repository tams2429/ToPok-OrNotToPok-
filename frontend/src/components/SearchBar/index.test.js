import { render } from '@testing-library/react'
import { SearchBar } from './' 




test('Search Bar component', () => {

  const mockSetSearchString = jest.fn()
  const mockHandleSearch = jest.fn()
  const initialSearchString = ''

  const { searchBarComponent } = render(<SearchBar searchString={initialSearchString} setSearchString={mockSetSearchString} handleSearch={mockHandleSearch}/>)

  //Test that the component renders properly and matches snapshot
  it('should render properly and match snapshot', () => {
    expect(searchBarComponent).toMatchSnapshot()
  })
})

//Test to check that mockSetSearchString (i.e. mockFunction) is being invoked with the input value, as user is typing

//Test that pressing the enter key calls the mockHandleSearch (i.e. mockFunction) + with the current searchString (mockSearchString)?