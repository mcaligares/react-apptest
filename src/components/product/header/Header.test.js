import React from 'react';
import {render, cleanup } from '@testing-library/react';
import Header from './Header';

const search = { searchFor: jest.fn() };
const sort = {
  sortBy: jest.fn(),
  values: [{ value: '1', text: 'vue' }, { value: '2', text: 'react' }]
};
const renderElement = (sort, search) => render(<Header sort={ sort } search={ search } />);

afterEach(cleanup);

test('product header should show sort element', () => {
  const {container} = renderElement(sort);
  expect(container.querySelectorAll('button').length).toBe(2);
});

test('product header should not show sort component', () => {
  const {container} = renderElement();
  expect(container.querySelectorAll('button').length).toBe(0);
});

test('product header should show search element', () => {
  const {container} = renderElement(sort, search);
  expect(container.querySelectorAll('input').length).toBe(1);
});

test('product header should not show search component', () => {
  const {container} = renderElement();
  expect(container.querySelectorAll('input').length).toBe(0);
});
