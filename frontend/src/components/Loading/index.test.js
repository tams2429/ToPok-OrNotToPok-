import { render, fireEvent } from '@testing-library/react'
import { Loading } from './index' 

describe('Loading Component', () => {

  it('should render properly and match snapshot', () => {
    const loadingComponent = render(<Loading />)
    expect(loadingComponent.container).toMatchSnapshot()
  })
})