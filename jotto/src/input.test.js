import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAtter, storeFactory } from '../tests/testUtils';
import Input, { UnconnectedInput } from './Input';

const setup = (initialState = {}) => {
  //setups up a store with the passed in initial state
  const store = storeFactory(initialState);
  //Use .dive() when dealing with connected components in order to access the actual component within the connect HOC
  const wrapper = shallow(<Input store={store} />).dive();
  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test('renders without component error', () => {
      const component = findByTestAtter(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('renders input box', () => {
      const inputBox = findByTestAtter(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });
    test('renders submit button', () => {
      const submitButton = findByTestAtter(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
    });
  });

  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test('renders without component error', () => {
      const component = findByTestAtter(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('does not renders input box', () => {
      const inputBox = findByTestAtter(wrapper, 'input-box');
      expect(inputBox.length).toBe(0);
    });
    test('does not renders submit button', () => {
      const submitButton = findByTestAtter(wrapper, 'submit-button');
      expect(submitButton.length).toBe(0);
    });
  });
});

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    //accesses the component instance, then its props, then the success property within those props
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test('"guessWord" action creator is a function prop', () => {
    const wrapper = setup();
    //grabs the guessWord action creator from the props
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe('"guessWord" action creator call', () => {
  let guesswordMock;
  let wrapper;
  const guessedWord = 'train';
  beforeEach(() => {
    guesswordMock = jest.fn();

    const props = {
      guessWord: guesswordMock
    };

    wrapper = shallow(<UnconnectedInput {...props} />);

    //add value to input box
    wrapper.instance().inputBox.current = { value: guessedWord };

    const submitButton = findByTestAtter(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });
  });

  test('calls "guessWord" when button is clicked', () => {
    const guessWordCallCount = guesswordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });

  test('"guessWord" with input value as argument', () => {
    const guessedWordArg = guesswordMock.mock.calls[0][0];
    expect(guessedWordArg).toBe(guessedWord);
  });

  test('input box clears on submit', () => {
    expect(wrapper.instance().inputBox.current.value).toBe('');
  });
});
