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

var createNameArray = function(beers){
  var beerNames = [];
  beers.forEach(function(beer) {
    beerNames.push(beer.name);
  });
  displayBeerList(beerNames);
}

var displayBeerList = function(array) {
  var ul = document.querySelector
  // function that gets all the beer names in the beer list and displays
  // create elements

}

var app = function () {
  var url = "https://api.punkapi.com/v2/beers";
  makeRequest(url, requestComplete);
}

window.addEventListener('load', app);
