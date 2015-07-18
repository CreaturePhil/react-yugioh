var App = React.createClass({
  getInitialState: function() {
    return {
      card: 'dark magician'
    };
  },
  handleChange: function() {
    this.setState({
      card: this.refs.card.getDOMNode().value
    });
  },
  render: function() {
    return (
      <div>
        <input type="text"
              ref="card"
              value={this.state.card}
              onChange={this.handleChange} />
        <br />
        <Yugioh card={this.state.card} />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('yugioh'));
