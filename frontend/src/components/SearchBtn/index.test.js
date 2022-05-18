import { render, fireEvent } from '@testing-library/react'
import { SearchBtn } from './index'

describe('Search Button when btnType=`submit`(i.e. pokeSearch Button)', () => {
  const initialSubmitProps = {
    btnText: 'Poké Search',
    btnType: 'submit',
    isDisabled: false,
  }

  it('should render properly and match snapshot when disabled', () => {
    const pokeSearchBtnComponent = render(<SearchBtn {...initialSubmitProps} isDisabled={true} />)
    expect(pokeSearchBtnComponent.container).toMatchSnapshot()
  })
  it('should render properly and match snapshot when not disabled', () => {
    const pokeSearchBtnComponent = render(<SearchBtn {...initialSubmitProps} />)
    expect(pokeSearchBtnComponent.container).toMatchSnapshot()
  })
})

describe('Search Button when btnType=`button`(i.e. Surprise Me Button)', () => {
  const mockHandleRandomSearch = jest.fn()

  const initialBtnProps = {
    btnText: 'Surprise Me',
    btnType: 'button',
    isDisabled: false,
    onClick: mockHandleRandomSearch,
  }
  it('should render properly and match snapshot', () => {
    const surpriseMeBtnComponent = render(<SearchBtn {...initialBtnProps} />)
    expect(surpriseMeBtnComponent.container).toMatchSnapshot()
  })

  it('should call the mockHandleRandomSearch function when the button is clicked', () => {
    const {getByText} = render(<SearchBtn {...initialBtnProps} />)
    fireEvent.click(getByText(initialBtnProps.btnText))
    expect(mockHandleRandomSearch).toHaveBeenCalledTimes(1)

  })
})

