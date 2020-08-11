import React from 'react';

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
        alt= ""
        className = 'yugioh'
        onError = "this.style.display='none'"
        src = { this.createLink() }
      />
    );
  }
}

export default Yugioh;