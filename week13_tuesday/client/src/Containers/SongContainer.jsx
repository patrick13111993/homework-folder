var React = require('react');
var SongSelector = require('../components/SongSelector.jsx');
var SongDetail = require('../components/SongDetail.jsx');

var SongContainer = React.createClass({
  getInitialState: function () {
    return { songs: null, focusSong: null };
  },

  componentDidMount: function(callback) {
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      if (request.status !== 200){
        return;
      }
      var data = JSON.parse(request.responseText);
      console.log(data);
      this.setState({ songs : data });

    }.bind(this);
    request.send();
  },

  setFocusSong: function(song) {
    this.setState({ focusSong: song })
  },

  render: function () {
    return (
      <div>
      <SongSelector songs={this.state.songs} selectSong={this.setFocusSong}/>
      <SongDetail song={this.state.focusSong}/>
      </div>
      );
  }
});

module.exports = SongContainer;