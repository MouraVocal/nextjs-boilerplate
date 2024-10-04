import '@testing-library/jest-dom'
import 'jest-styled-components'
import { render, screen } from '@testing-library/react'
import { Main } from '.'

describe('Main', () => {
  it('renders a heading', () => {
    render(<Main />)

    const main = screen.queryByRole('main')

    expect(main).toBeInTheDocument()
  })

  it('should have text', () => {
    render(<Main />)

    const main = screen.queryByRole('main')

    expect(main).toHaveTextContent('Main')
  })

  it('should match snapshot', () => {
    render(<Main />)

    const container = screen.queryByRole('main')

    expect(container).toMatchSnapshot()
    expect(container).toHaveStyle('background: #121212')
  })
})
