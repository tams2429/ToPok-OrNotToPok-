// STYLESHEETS
import './index.css';

export const SearchBtn = ({btnText, isDisabled}) => {

  return (
    // Disable the button only if the searchString is empty, 
    // If no searchString is passed as prop (i.e. undefined) => enable the button
    <button type='submit' disabled={isDisabled} className={`searchBtn ${isDisabled && 'disabled'}`}>{btnText}</button>
  )
}