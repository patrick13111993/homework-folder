var React = require('react');

var Film = React.createClass({

  propTypes: {
    title: React.PropTypes.string
  },

  render: function() {
    return (
      <div className="film">
      <h4>{ this.props.title }</h4>
      </div>
      );
  }
});

module.exports = Film;