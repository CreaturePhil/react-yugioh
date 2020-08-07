import React from 'react';
import ReactDOM from 'react-dom';

class Yugioh extends React.Component {
  createLink () {
    var card =  this.props.card.trim().split(' ').map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('_');
    return 'http://static.api3.studiobebop.net/ygo_data/card_images/' + card + '.jpg';
  }
  render() {
    return (
      <img
        alt={this.props.card}
        className='yugioh'
        src={this.createLink()}
      />
    );
  }
}

export default Yugioh;