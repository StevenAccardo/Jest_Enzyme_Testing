//
// import React from 'react';
// import Enzyme, { shallow } from 'enzyme';
// import App from './App';
//
// /**
//  * Factory function to create a ShallowWrapper for the App Component.
//  *@function setup
//  *@param {object} props = Component props specific to setup.
//  *@param {object} state - initial state for the setup.
//  *@returns {ShallowWrapper}
//  */
// const setup = (props = {}, state = null) => {
//   const wrapper = shallow(<App {...props} />);
//   if (state) wrapper.setState(state);
//   return wrapper;
// };
//
// /**
//  * Return ShallowWrapper containing node(s) with the given data-test value.
//  *@function findByTestAtter
//  *@param {ShallowWrapper} wrapper = Component props specific to setup.
//  *@param {string} val - Value of data-test attribute for search.
//  *@returns {ShallowWrapper}
//  */
//
// const findByTestAtter = (wrapper, val) => {
//   return wrapper.find(`[data-test="${val}"]`);
// };
//
// test('renders without error', () => {
//   const wrapper = setup();
//   const appComponent = findByTestAtter(wrapper, 'component-app');
//   expect(appComponent.length).toBe(1);
// });
// test('renders increment button', () => {
//   const wrapper = setup();
//   const button = findByTestAtter(wrapper, 'increment-button');
//   expect(button.length).toBe(1);
// });
// test('renders decrement button', () => {
//   const wrapper = setup();
//   const button = findByTestAtter(wrapper, 'decrement-button');
//   expect(button.length).toBe(1);
// });
// test('renders counter display', () => {
//   const wrapper = setup();
//   const counterDisplay = findByTestAtter(wrapper, 'counter-display');
//   expect(counterDisplay.length).toBe(1);
// });
// test('counter starts at 0', () => {
//   const wrapper = setup();
//   const initialCounterState = wrapper.state('counter');
//   expect(initialCounterState).toBe(0);
// });
// test('clicking button increments counter display', () => {
//   const counter = 7;
//   const wrapper = setup(null, { counter });
//   //find button and click
//   const button = findByTestAtter(wrapper, 'increment-button');
//   button.simulate('click');
//   wrapper.update();
//   // find display and test value
//   const counterDisplay = findByTestAtter(wrapper, 'counter-display');
//   expect(counterDisplay.text()).toContain(counter + 1);
// });
//
// test('clicking button decrements counter display', () => {
//   const counter = 7;
//   const wrapper = setup(null, { counter });
//
//   const button = findByTestAtter(wrapper, 'decrement-button');
//   button.simulate('click');
//   wrapper.update();
//
//   const counterDisplay = findByTestAtter(wrapper, 'counter-display');
//   expect(counterDisplay.text()).toContain(counter - 1);
// });
