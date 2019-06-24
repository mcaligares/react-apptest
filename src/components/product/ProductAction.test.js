import React from 'react';
import {render, cleanup } from '@testing-library/react';
import ProductAction from './ProductAction';
import AppState from '../../Store';

const product = {_id: 1, name: 'Ultrabook', category: 'Laptops', cost: 1000, img: '/some/img.svg'};
const renderElementWith = (p, user) => render(<ProductAction product={p} store={new AppState({user})} />);

afterEach(cleanup);

test('product action should hide the component when user do not have enough points', () => {
  const {container} = renderElementWith(product, {points: 100 });
  expect(container.textContent).toEqual('');
});

test('product action should show the price and button when user have enough points', () => {
  const {container} = renderElementWith(product, {points: 10000 });
  expect(container.querySelectorAll('button').length).toBe(1);
  expect(container.querySelector('span').textContent).toEqual(product.cost.toString());
});
