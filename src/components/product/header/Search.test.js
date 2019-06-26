import React from 'react';
import {render, cleanup, fireEvent } from '@testing-library/react';
import Search from './Search';

const searchForMock = jest.fn();
const renderElement = () => render(<Search searchFor={ searchForMock } />);

afterEach(cleanup);

test('search component should show an input field', () => {
  const {container} = renderElement();
  expect(container.querySelectorAll('input').length).toBe(1);
});

test('search component should call to search function when user typed', () => {
  const {container} = renderElement();
  fireEvent.change(container.querySelector('input'), { target: { value: 'blabla' } });
  expect(searchForMock).toBeCalled();
});

