import React from 'react'
import { render, screen } from '@testing-library/react'
import Main from './main'

test('renders image title', () => {
  render(<Main />);
  const linkElement = screen.getByText(/image/i);
  expect(linkElement).toBeInTheDocument();
})