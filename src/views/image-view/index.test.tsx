import React from 'react'
import { render, screen } from '@testing-library/react'
import ImageView from './index'

test('renders source image title', () => {
    render(<ImageView />);
    const linkElement = screen.getByText(/source image/i);
    expect(linkElement).toBeInTheDocument();
  })

test('renders source image', () => {
  render(<ImageView />);
  const linkElement = screen.getByLabelText(/source image/i);
  expect(linkElement).toBeInTheDocument();
})