import React from 'react';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]} />
      </div>
    );
  }
}

export default App;
