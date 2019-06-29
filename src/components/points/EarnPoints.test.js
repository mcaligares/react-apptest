import React from 'react';
import {render, cleanup, fireEvent } from '@testing-library/react';
import EarnPoints from './EarnPoints';

const points = {points: 1000, coins: 1, earnPoints: jest.fn()};
const renderElementWith = (obj) => {
  return render(<EarnPoints points={ obj.points } coins={obj.coins} earnPoints={obj.earnPoints} />)
};

afterEach(cleanup);

test('component should show a button to eran points and her coins', () => {
  const {container} = renderElementWith(points);
  expect(container.querySelectorAll('button').length).toBe(1);
  expect(container.querySelectorAll('img').length).toBe(points.coins);
});

test('component should call the earnPoints method', () => {
  const {container} = renderElementWith(points);
  fireEvent.click(container.querySelector('button'));
  expect(points.earnPoints).toBeCalled();
});
