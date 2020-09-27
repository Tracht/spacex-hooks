import React from 'react';
import { render } from '@testing-library/react';
import Homepage from './Homepage';

test('renders Hompeage title and quote', () => {
  const { getByText } = render(<Homepage />);
});