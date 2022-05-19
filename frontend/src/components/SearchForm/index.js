// COMPONENTS
import { SearchBar } from '../SearchBar';
import { SearchBtn } from '../SearchBtn';

// STYLESHEETS
import './index.css';

export const SearchForm = ({handleSearch, searchString, setSearchString, handleRandomSearch}) => {
  return (
    <form onSubmit={handleSearch}>
      {/* TODO: refactor handleChange to here */}
      <SearchBar searchString={searchString} setSearchString={setSearchString} handleSearch={handleSearch}/>
      <SearchBtn btnText='Poké Search' btnType='submit' searchString={searchString} isDisabled={!searchString}/>
      <SearchBtn btnText='Surprise Me' btnType='button' isDisabled={false} onClick={handleRandomSearch}/>
    </form>  
  )
}