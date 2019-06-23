import React from 'react';
import {render, cleanup} from '@testing-library/react';
import ProductCard from './ProductCard';

const product = {name: 'Ultrabook', category: 'Laptops', cost: 1000, img: '/some/img.svg'};
const element = <ProductCard product={ product }/>

afterEach(cleanup);

test('product card should show the name and category', () => {
  const {container} = render(element);
  expect(container.querySelector('.info').textContent).toContain(product.name);
  expect(container.querySelector('.info').textContent).toContain(product.category);
});

test('product card should show the product image', () => {
  const {container} = render(element);
  const imageElement = container.querySelector(`img[alt=${product.name}]`);
  expect(imageElement.getAttribute('src')).toEqual(product.img);
});

/** Actually the redeem element hide by css. So I am thinking change that to do the hide programatly.*/
// test('product card should show the redeem button only when mouse over', () => {
//   const {container} = render(element);
//   expect(container.querySelector('.redeem').style).toEqual(product.img);
// });
