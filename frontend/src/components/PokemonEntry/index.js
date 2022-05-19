// STYLESHEETS
import './index.css'

export const PokemonEntry = ({name, description, sprite}) => {
  return (
    <section className='pokemon-entry-container'>
      <img src={sprite} alt='Searched pokemon sprite appearance' className='pokemon-img'/>
      <h2 className='pokemon-name'>{name}</h2>
      <p className='pokemon-description'>{description}</p>
    </section>
  )
}