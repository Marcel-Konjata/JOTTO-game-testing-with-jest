import React from 'react';
import App from './App';
import { shallow } from "enzyme";

/**
 * Setup function for testing app component
 * @returns function shallow(<App />)
 */

const Appcomponent = () => {
  return shallow(<App />)
}

test('render without crash', () => {
  const wrapper = Appcomponent();
  expect(wrapper.length).not.toBe(0)
})

test('should redner top level jsx', () => {
  const wrapper = Appcomponent().find('.App-component');
  expect(wrapper.length).toBe(1)
})


