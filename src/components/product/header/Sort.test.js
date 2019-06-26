import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import Sort from './Sort';

const setFilterMock = jest.fn();
const sortValues = [
  { value: '1', text: 'vue' },
  { value: '2', text: 'react' }
];
const element = <Sort values={ sortValues } sortBy={ setFilterMock } />

afterEach(cleanup);

test('product filter should show two buttons', () => {
  const {container} = render(element);
  expect(container.querySelectorAll('button').length).toBe(2);
});

test('filter button should add selected class when is clicked', () => {
  const {container} = render(element);
  expect(container.querySelectorAll('button.selected').length).toBe(0);
  fireEvent.click(container.querySelector('button'));
  expect(setFilterMock).toBeCalled();
  expect(container.querySelectorAll('button.selected').length).toBe(1);
});
