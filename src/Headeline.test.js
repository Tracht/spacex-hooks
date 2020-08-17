import React from 'react';
import { render } from '@testing-library/react';
import Headline from './Headline';

test('renders Headline title and quote', () => {
  const { getByText } = render(<Headline />);
});
