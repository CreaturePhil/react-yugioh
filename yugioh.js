var Yugioh = React.createClass({
  createLink: function() {
    var card = this.props.card.split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('_');
    return 'http://static.api3.studiobebop.net/ygo_data/card_images/' + card + '.jpg';
  },
  render: function() {
    return (
      <div>
        <img src={this.createLink()} alt={this.props.card} />
      </div>
    );
  }
});

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
