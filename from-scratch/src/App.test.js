import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from './App';

test('renders without error', () => {
  const wrapper = shallow(<App />);
});
