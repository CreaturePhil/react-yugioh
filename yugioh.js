(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['react'], function (React) {
      return (root.Yugioh = factory(React));
    });
  } else if (typeof exports === 'object') {
    // Node, sorta CommonJS
    module.exports = factory(require('react-tools').React);
  } else {
    // Browser global
    root.Yugioh = factory(root.React);
  }
}(this, function (React) {
  return React.createClass({displayName: "Yugioh",
    createLink: function() {
      var card = this.props.card.trim().split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }).join('_');
      return 'http://static.api3.studiobebop.net/ygo_data/card_images/' + card + '.jpg';
    },
    render: function() {
      return React.DOM.img({
        alt: this.props.card,
        className: 'yugioh',
        src: this.createLink()
      });
    }
  });
}));
