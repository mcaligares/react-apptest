import React from 'react';
import { Provider } from 'unstated';
import AppState from '../../Store';
import {render, cleanup} from '@testing-library/react';
import HeaderTop from './HeaderTop';

const user = { _id: 1, name: 'Chuck Norris', points: 999999999 };
const getTextFromProfile = (container) => container.querySelector('.profile').textContent;
const renderComponentWithProvider = (user) =>
  render(
    <Provider inject={[new AppState({user})]}>
      <HeaderTop/>
    </Provider>
  );

afterEach(cleanup);

test('main header should show the user name', () => {
  const {container} = renderComponentWithProvider(user);
  expect(getTextFromProfile(container)).toContain(user.name);
});

test('main header should show the user points', () => {
  const {container} = renderComponentWithProvider(user);
  expect(getTextFromProfile(container)).toContain(user.points);
});

test('main header should show a loading icon when the user is not available', () => {
  const unavailableUser = {};
  const {container} = renderComponentWithProvider(unavailableUser);
  expect(container.querySelectorAll('img.loading').length).toBe(1);
});
