var React = require('react');
var ReactDOM = require('react-dom');

var FilmBox = require('./components/FilmBox.jsx');
var FilmList = require('./components/FilmList.jsx');

window.onload = function () {
  ReactDOM.render(
    <FilmBox />,
    document.getElementById('app')
  );
}
