// STYLESHEETS
import './index.css';

export const Loading = () => {
  return (
    <section className='loading-wrapper'>
      <p className='loading-text' data-testid='loading-text'/>
      <div className='pokeball' />
    </section>
  )
}