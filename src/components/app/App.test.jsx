import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('inputs a color and changes the div', () => {
    render(<App />);

    const colorInput = screen.getByLabelText('Input Color');
  });
});
