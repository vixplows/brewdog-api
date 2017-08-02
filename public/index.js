var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();

  request.addEventListener("load", callback);

  request.open("GET", url);
  request.send();
}

var requestComplete = function () {
  if (this.status !== 200) return; 
 var jsonString = this.responseText;
 var beers = JSON.parse(jsonString); 
 createNameArray(beers);
 // need to then populate beer list??
}

// make this a resuable loopThrough?
var createNameArray = function(beers){
  var beerNames = [];
  beers.forEach(function(beer) {
    beerNames.push(beer.name);
  });
  displayBeerList(beerNames);
}

// make this a resuable displayList?
var displayBeerList = function(array) {
  var ul = document.querySelector('#beer-list');
  array.forEach(function(name) {
    var li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
  });
}

var app = function () {
  var url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);
}

window.addEventListener('load', app);
