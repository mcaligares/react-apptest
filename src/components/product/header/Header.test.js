import React from 'react';
import {render, cleanup } from '@testing-library/react';
import Header from './Header';

const sort = {
  sortBy: jest.fn(),
  values: [{ value: '1', text: 'vue' }, { value: '2', text: 'react' }]
};
const renderElement = (sort) => render(<Header sort={ sort } />);

afterEach(cleanup);

test('product header should show sort element', () => {
  const {container} = renderElement(sort);
  expect(container.querySelectorAll('button').length).toBe(2);
});

test('product header should not show sort component', () => {
  const {container} = renderElement();
  expect(container.querySelectorAll('button').length).toBe(0);
});
