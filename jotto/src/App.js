import React from 'react';
import GuessedWords from './GuessedWords';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <GuessedWords name="steve" />
      </div>
    );
  }
}

export default App;
