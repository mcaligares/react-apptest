import React from 'react';
import {render, cleanup, fireEvent } from '@testing-library/react';
import EarnPoints from './EarnPoints';

const points = [1000, 5000, 7500];
const renderElementWith = (points) => render(<EarnPoints points={ points } />);

afterEach(cleanup);

test('component should show 3 button to eran points', () => {
  const {container} = renderElementWith(points);
  expect(container.querySelectorAll('button').length).toBe(3);
});
