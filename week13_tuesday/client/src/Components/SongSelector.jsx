var React = require('react');

var SongSelector = React.createClass({
  getInitialState: function() {
    return { selectedIndex: undefined };
  },

  handleChange: function(event) {
    var newIndex = event.target.value;
    this.setState({ selectedIndex: newIndex });
    this.props.selectSong(this.props.songs[newIndex]);
  },
  render: function () {

    console.log(this.props.feed);

    if (!this.props.songs) return;

    var options = this.props.songs.feed.entry.map(function(song, index) {
      return <option value={index} key={index}>{song.["im:name"].label}</option>
    });
    return (
      <select id="songs" value={this.state.selectedIndex} onChange={this.handleChange}>
      <option>Select a Song</option>
        {options}
      </select>
    );
  }


});

module.exports = SongSelector;