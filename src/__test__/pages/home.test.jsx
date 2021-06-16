import React from 'react';
import { render, screen } from '../test-utils';

import Home from '../../pages/index';

describe('Home', () => {
  it('should render div containing "test"', () => {
    render(<Home />);
    const text = screen.getByText(/Hello/i);
    expect(text).toBeInTheDocument(); 
  });
});