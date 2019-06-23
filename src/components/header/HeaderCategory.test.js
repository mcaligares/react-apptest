import React from 'react';
import {render, cleanup} from '@testing-library/react';
import HeaderCategory from './HeaderCategory';

const category = { title: 'Vue is awesome!', background: '/some/image.svg' };
const element = <HeaderCategory category={ category }/>

afterEach(cleanup);

test('header category should have a main title', () => {
  const {container} = render(element);
  expect(container.querySelector('h1').textContent).toEqual(category.title);
});

test('header category should have a background image', () => {
  const {container} = render(element);
  expect(container.querySelector('header').style.backgroundImage).toContain(category.background);
});
