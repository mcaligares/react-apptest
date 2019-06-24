import React from 'react';
import {render, cleanup } from '@testing-library/react';
import ProductPrice from './ProductPrice';

const renderElementWith = (price, points) => render(<ProductPrice price={ price } points={ points } />);

afterEach(cleanup);

test('product price should show the buy icon when points are enough', () => {
  const {container} = renderElementWith(100, 1000);
  expect(container.querySelector('img').getAttribute('src')).toContain('shop.svg');
});

test('product price should show the points needed when user do not have enough points', () => {
  const {container} = renderElementWith(1000, 100);
  expect(container.querySelector('.price-info').className).toContain('need');
  expect(container.firstChild.textContent).toContain('You need ' + 900);
});
