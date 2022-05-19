// COMPONENTS
import { SearchBar } from '../SearchBar';
import { SearchBtn } from '../SearchBtn';

export const SearchForm = ({handleSearch, searchString, setSearchString, handleRandomSearch}) => {
  return (
    <form onSubmit={handleSearch}>
      <SearchBar searchString={searchString} setSearchString={setSearchString} handleSearch={handleSearch}/>
      <SearchBtn btnText='Poké Search' btnType='submit' isDisabled={!searchString}/>
      <SearchBtn btnText='Surprise Me' btnType='button' isDisabled={false} onClick={handleRandomSearch}/>
    </form>  
  )
}