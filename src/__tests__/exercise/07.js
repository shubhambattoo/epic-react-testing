// testing with context and a custom render method
// http://localhost:3000/easy-button

import * as React from 'react'
import {render, screen} from './../../test/test-utils'
import EasyButton from '../../components/easy-button'

// function renderWithTheme(ui, {theme = 'light', ...options} = {}) {
//   function Wrapper({children}) {
//     return <ThemeProvider initialTheme={theme}>{children}</ThemeProvider>
//   }
//   return render(ui, {wrapper: Wrapper, ...options})
// }

test('renders with the light styles for the light theme', () => {
  render(<EasyButton children={'Easy'} />)

  // screen.debug()
  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `)
})

test('renders with the dark styles for the dark theme', () => {
  render(<EasyButton children={'Easy'} />, {theme: 'dark'})

  // screen.debug()
  const button = screen.getByRole('button', {name: /easy/i})
  expect(button).toHaveStyle(`
    background-color: black;
    color: white;
  `)
})

/* eslint no-unused-vars:0 */
