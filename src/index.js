import React from 'react';
import ReactDOM from 'react-dom';
import Yugioh from './yugioh.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { card: 'dark magician' };
  }
  
  handleChange(e) {
    this.setState({ card: e.target.value });
  }
  
  render() {
    return (
      <div>
        <input
          type = "text"
          ref = "card"
          onChange={ this.handleChange.bind(this) }
          value = { this.state.card }
        />
        <br />
        <Yugioh card={ this.state.card } />
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('yugioh'));