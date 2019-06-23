import React from 'react';
import {render, cleanup} from '@testing-library/react';
import HeaderTop from './HeaderTop';

const user = { name: 'Chuck Norris', points: 999999999 };
const elementWith = (user) => <HeaderTop user={ user }/>;
const getTextFromProfile = (container) => container.querySelector('.profile').textContent;

afterEach(cleanup);

test('main header should show the user name', () => {
  const {container} = render(elementWith(user));
  expect(getTextFromProfile(container)).toContain(user.name);
});

test('main header should show the user points', () => {
  const {container} = render(elementWith(user));
  expect(getTextFromProfile(container)).toContain(user.points);
});

test('main header should show a loading icon when the user is not available', () => {
  const {container} = render(elementWith(null));
  expect(container.querySelector('.profile img').className).toBe('loading');
});
