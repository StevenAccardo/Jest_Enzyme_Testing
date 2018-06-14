import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button data-test="increment-button" onClick={() => this.setState({ counter: ++this.state.counter })}>
          Increment counter
        </button>
        <button data-test="decrement-button" onClick={() => this.setState({ counter: --this.state.counter })}>
          Decrement counter
        </button>
      </div>
    );
  }
}

export default App;
