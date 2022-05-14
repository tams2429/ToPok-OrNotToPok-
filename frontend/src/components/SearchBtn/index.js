// STYLESHEETS
import './index.css';

export const SearchBtn = ({btnText, searchString, onClick}) => {

  return (
    // Disable the button only if the searchString is empty, 
    // If no searchString is passed as prop (i.e. undefined) => enable the button
    <button type='button' disabled={searchString === '' ? true : false } onClick={onClick} className='searchBtn'>{btnText}</button>
  )
}