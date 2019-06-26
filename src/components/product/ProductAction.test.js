import React from 'react';
import {render, cleanup, fireEvent } from '@testing-library/react';
import ProductAction from './ProductAction';

const product = {_id: 1, name: 'Ultrabook', category: 'Laptops', cost: 1000, img: '/some/img.svg'};
const renderElementWith = (p, points, onRedeem) => render(<ProductAction product={p} points={points} redeemProduct={onRedeem} />);

afterEach(cleanup);

test('product action should show the needed points when user do not have enough points', () => {
  const {container} = renderElementWith(product, 100, () => {});
  expect(container.textContent).toContain('You need 900');
});

test('product action should show the button when user have enough points', () => {
  const redeemProductMock = jest.fn();
  const {container} = renderElementWith(product, 1000, redeemProductMock);
  expect(container.querySelectorAll('button').length).toBe(1);
  fireEvent.click(container.querySelector('button'));
  expect(redeemProductMock).toBeCalled();
});
