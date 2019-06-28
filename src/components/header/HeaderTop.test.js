import React from 'react';
import { Provider } from 'unstated';
import {render, cleanup} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserStore from '../../store/UserStore';
import HeaderTop from './HeaderTop';

const user = { _id: 1, name: 'Chuck Norris', points: 999999999 };
const getTextFromProfile = (container) => container.querySelector('.profile').textContent;
const renderComponentWithProviderAndRouter = (user, loading) => render(
  <Router>
    <Provider inject={[new UserStore({ user, loading })]}>
      <HeaderTop user={user} />
    </Provider>
  </Router>
);

afterEach(cleanup);

test('main header should show the user name', () => {
  const {container} = renderComponentWithProviderAndRouter(user, false);
  expect(getTextFromProfile(container)).toContain(user.name);
});

test('main header should show the user points', () => {
  const {container} = renderComponentWithProviderAndRouter(user, false);
  expect(getTextFromProfile(container)).toContain(user.points);
});

test('main header should show a loading icon when the user is not available', () => {
  const unavailableUser = {};
  const {container} = renderComponentWithProviderAndRouter(unavailableUser, true);
  expect(container.querySelectorAll('img.loading').length).toBe(1);
});
