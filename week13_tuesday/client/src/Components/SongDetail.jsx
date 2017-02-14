var React = require('react');

var SongDetail = function (props) {
  if (!props.song) {
    return <h4></h4>
  }
  
  return (
    <div>
    <h3>{props.songs.feed.entry.["im:name"].label}</h3>
    </div>
  )

};


module.exports = SongDetail;