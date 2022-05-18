// STYLESHEETS
import './index.css';

export const SearchBtn = ({btnText, btnType, isDisabled, onClick}) => {

  return (
    // Disable the button only if the searchString is empty, 
    // If no searchString is passed as prop (i.e. undefined) => enable the button
    <button type={btnType} disabled={isDisabled} className={`searchBtn ${isDisabled === true ? 'disabled' : ''}`} onClick={onClick}>{btnText}</button>
  )
}