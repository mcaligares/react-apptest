import React from 'react';
import { Provider } from 'unstated';
import AppState from '../../Store';
import {render, cleanup} from '@testing-library/react';
import ProductList from './ProductList';

const user = { _id: 1, name: 'Chuck Norris', points: 999999999 };
const products = [
  {_id: 1, name: 'Ultrabook', category: 'Laptops', cost: 1000, img: '/some/img.svg'},
  {_id: 2, name: 'Ultrabook', category: 'Laptops', cost: 1000, img: '/some/img.svg'}
];

const renderComponentWithProvider = (products) =>
  render(
    <Provider inject={[new AppState({products, user})]}>
      <ProductList products={ products } />
    </Provider>
  );

afterEach(cleanup);

test('product list should show two products', () => {
  const {container} = renderComponentWithProvider(products);
  expect(container.querySelectorAll('.product').length).toBe(2);
});

test('product list should show loading icon when products is empty', () => {
  const {container} = renderComponentWithProvider([]);
  expect(container.querySelectorAll('.product').length).toBe(0);
  expect(container.querySelector('img').className).toEqual('loading');
});
