import checkPropTypes from 'check-prop-types';

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
