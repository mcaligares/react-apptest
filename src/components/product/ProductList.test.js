import React from 'react';
import {render, cleanup} from '@testing-library/react';
import ProductList from './ProductList';

const products = [
  {_id: 1, name: 'Ultrabook', category: 'Laptops', cost: 1000, img: '/some/img.svg'},
  {_id: 2, name: 'Ultrabook', category: 'Laptops', cost: 1000, img: '/some/img.svg'}
];
const elementWith = (products) => render(<ProductList products={ products }/>);

afterEach(cleanup);

test('product list should show two products', () => {
  const {container} = elementWith(products);
  expect(container.querySelectorAll('.product').length).toBe(2);
});

test('product list should show loading icon when products is empty', () => {
  const {container} = elementWith([]);
  expect(container.querySelectorAll('.product').length).toBe(0);
  expect(container.querySelector('img').className).toEqual('loading');
});

