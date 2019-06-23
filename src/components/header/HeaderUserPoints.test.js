import React from 'react';
import {render, cleanup} from '@testing-library/react';
import HeaderUserPoints from './HeaderUserPoints';

const points = 1000;
const elementWith = (points) => <HeaderUserPoints points={ points }/>;

afterEach(cleanup);

test('should show the user points', () => {
  const {container} = render(elementWith(points));
  expect(container.firstChild.textContent).toContain(points);
});
