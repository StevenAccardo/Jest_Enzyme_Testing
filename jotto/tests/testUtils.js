import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../src/reducers';
import { middlewares } from '../src/store';

export const storeFactory = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 *@function findByTestAtter
 *@param {ShallowWrapper} wrapper = Component props specific to setup.
 *@param {string} val - Value of data-test attribute for search.
 *@returns {ShallowWrapper}
 */

export const findByTestAtter = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
  expect(propError).toBeUndefined();
};
