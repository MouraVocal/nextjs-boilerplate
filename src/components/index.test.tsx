import '@testing-library/jest-dom'
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
})
