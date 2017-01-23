var createCatList = function (name, food, quote) {
  var newCat = document.createElement('ul');
  newCat.classList.add('cat');

  var listName = document.createElement('li');
  var listFood = document.createElement('li');
  var listQuote = document.createElement('li');
  listName.innerText = ("My name is " + name);
  listFood.innerText = ("My favourite food is " + food);
  listQuote.innerText = ("My quote for today is " + quote);
  newCat.appendChild(listName);
  newCat.appendChild(listFood);
  newCat.appendChild(listQuote);

  return newCat;
}

var createImage = function (url) {
  var img = document.createElement('img');

  img.src = url;
  img.width = 500;
  return img;
}

var appendElements = function (cats, img, list) {
  list.appendChild(img);
  cats.appendChild(list);
}

var addCat = function(name, food, quote, url) {
  var img = createImage(url);
  var list = createCatList(name, food, quote);

  var cats = document.getElementById('cats');
  appendElements(cats, img, list);
}


var app = function() {
  
  addCat("Boba", "Sock fluff", "'Meow'", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");
  addCat("Barnaby", "Tuna", "'Mew'", "http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg");
  addCat("Max", "Whiskas Temptations", "'Miaaaow'", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");
  addCat("Jimmy", "Spaghetti", "'Destroy Buzz Lightyear'", "https://i.ytimg.com/vi/cNycdfFEgBc/maxresdefault.jpg");
}

window.onload = app;

// Use the code provided to complete the following tasks:

// Add JS code to allow a new cat to be added programmatically. Do it rough and ready at first!
// Refactor the code to make it easy to add a new cat, just like we did with the quotes.
// OPTIONAL: Remove the cat data in the HTML and add them via your javascript. If you want to be fancy, put the cat data into an array.
// OPTIONAL: Style the site!
// Hint: Be careful with the order you append your elements to each other! Also be careful with what you need to pass when setting an image's width via the DOM.