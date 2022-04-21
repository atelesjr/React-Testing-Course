import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCameWithSpaces } from './App';

//functionals tests

test('button has initial color', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({ backgroundColor: 'Midnight Blue' })
  expect(colorButton.textContent).toBe('Change to Medium Violet Red')

})

test('initial condiditions', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue'})
  expect(colorButton).toBeEnabled()

  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()


})

test('checkbox disables button on first click and enables on second click', () => {
  render(<App />)

  const checkbox = screen.getByRole('checkbox',{ name: 'Disable button'})
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()

})

test('disable button has gray background and reverts to MediumVioletRed', () => {
  render(<App />)

  const checkbox = screen.getByRole('checkbox',{ name: 'Disable button'})
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle('background-color: gray')

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle('background-color: MediumVioletRed')
})

test('disable button has gray background and reverts to Midnight Blue', () => {
  render(<App />)

  const checkbox = screen.getByRole('checkbox',{ name: 'Disable button'})
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })

  fireEvent.click(colorButton)

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle('background-color: gray')

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle('background-color: MidnightBlue')

})

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCameWithSpaces('Red')).toBe('Red')
  })

  test('Works for one inner capital letters', () => {
    expect(replaceCameWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })

  test('Works for multiple inner capital letters', () => {
    expect(replaceCameWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})

// test('default', () => {



// })

