var React = require('react');
var FilmList = require('./FilmList.jsx');

var films = [
{id: 1, title: "A Serbian Film"},
{id: 2, title: "The Human Centipede"}
];

var FilmBox = React.createClass({

  getInitialState: function() {
    return { data: films };
  },

  render: function() {
    return (
      <div className="film-box">
      <FilmList data={ this.state.data }/>
      <button type="button">Get Showtimes >></button>
      </div>
      );
  }
});

module.exports = FilmBox;