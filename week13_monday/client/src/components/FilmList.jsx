var React = require('react');

var Film = require('./Film.jsx');

var FilmList = React.createClass({

  render:function(){

    var filmNodes = this.props.data.map(function(film) {
      return (
          <Film title={ film.title } key={film.id}>
          </Film>
        );
    });

  return(
      <div className="film-list">
        <p>UK Opening This Week</p>
        { filmNodes }
      </div>
    );
  }
});

module.exports = FilmList;