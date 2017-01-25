var data;

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.send();
}

var requestComplete = function() {
  if (this.status !== 200) return;
  var jsonString = this.responseText;
  data = JSON.parse(jsonString);
  var albums = data.albums.items;
  populateList(albums);
}

var populateList = function(albums) {
  var albumStuff = document.querySelector('#albums');
  console.log(albums);
  albums.forEach(function(album) {
    var item = document.createElement('p');
    item.innerText = album.name;
    albumStuff.appendChild(item);
  });
  console.log(albumStuff);
}

var app = function(){
  var url = "https://api.spotify.com/v1/search?q=christmas&type=album";
  makeRequest(url, requestComplete);

}

window.onload = app;