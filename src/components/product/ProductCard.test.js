import React from 'react';
import { Provider } from 'unstated';
import UserStore from '../../store/UserStore';
import {render, cleanup} from '@testing-library/react';
import ProductCard from './ProductCard';

const user = { _id: 1, name: 'Chuck Norris', points: 999999999 };
const product = {name: 'Ultrabook', category: 'Laptops', cost: 1000, img: '/some/img.svg'};
const renderComponentWithProvider = () =>
  render(
    <Provider inject={[new UserStore({user})]}>
      <ProductCard product={ product }/>
    </Provider>
  );

afterEach(cleanup);

test('product card should show the name and category', () => {
  const {container} = renderComponentWithProvider();
  expect(container.querySelector('.info').textContent).toContain(product.name);
  expect(container.querySelector('.info').textContent).toContain(product.category);
});

test('product card should show the product image', () => {
  const {container} = renderComponentWithProvider();
  const imageElement = container.querySelector(`div.product-image`);
  expect(imageElement).toBeDefined();
});

/** Actually the redeem element hide by css. So I am thinking change that to do the hide programatly.*/
// test('product card should show the redeem button only when mouse over', () => {
//   const {container} = renderComponentWithProvider();
//   expect(container.querySelector('.redeem').style).toEqual(product.img);
// });
