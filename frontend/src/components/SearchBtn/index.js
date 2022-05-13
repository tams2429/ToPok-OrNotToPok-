
export const SearchBtn = ({btnText, searchString}) => {

  return (
    // Disable the button only if the searchString is empty, 
    // If no searchString is passed as prop (i.e. undefined) => enable the button
    <button type='button' disabled={searchString === '' ? true : false }>{btnText}</button>
  )
}