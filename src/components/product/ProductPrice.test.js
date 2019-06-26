import React from 'react';
import {render, cleanup } from '@testing-library/react';
import ProductPrice from './ProductPrice';

const renderElementWith = (props) => render(<ProductPrice price={ props.price } points={ props.userPoints } />);

afterEach(cleanup);

test('product price should show the price label with redeem class when points are enough', () => {
  const props = { price: 100, userPoints: 1000 };
  const {container} = renderElementWith(props);
  expect(container.firstChild.className).toEqual('price redeem');
});

test('product price should show the price label without redeem class when user do not have enough points', () => {
  const props = { price: 1000, userPoints: 100 };
  const {container} = renderElementWith(props);
  expect(container.firstChild.className).toEqual('price');
});
