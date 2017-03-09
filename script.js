//Generic API Module Code
var api = (function(){
    function apiCall(method, url, cb){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                cb(JSON.parse(xhr.responseText));
            }
            else{
              console.log("Waiting for response");
            }
        };
        xhr.open(method, url, true);
        xhr.send();
    }
    return {
      apiCall:apiCall
    };
})();

//Input Value module
var input = (function(){
    function inputValue(ev, cb){
        ev.preventDefault();
        console.log(ev.target[0].value);
        cb(ev.target[0].value);
    }
    return {
      inputValue: inputValue
    };
})();


//addEventListener
var eventListener = (function(){

  function createEventListener(element, action, cb){
      element.addEventListener(action, cb);
  }

return {
  createEventListener:createEventListener
};

})();






//create url
var createsURL = (function(){


  function genreId(){
      var url = "https://api.themoviedb.org/3/genre/movie/list?api_key=a2230c2d2bfec8e19602e73fa268f106&language=en-US";
      return url;
  }

  function generateGenreUrl(id){
    var url = 'https://api.themoviedb.org/3/genre/' + id +'/movies?api_key=a2230c2d2bfec8e19602e73fa268f106&language=en-US&include_adult=false&sort_by=created_at.asc';
    return url;
  }

  function generateGifUrl(movie){
    var url = 'http://api.giphy.com/v1/gifs/search?q=&api_key=dc6zaTOxFJmzC&lang=en&limit=3&q=' + encodeURICompnent(movie);
    return url;
  }
  return {
    genreId: genreId,
    generateGenreUrl: generateGenreUrl,
    generateGifUrl: generateGifUrl
  };
})();

//translate genre into id number

var translateGenreToId = (function(){
  function idConverter() {


  }
})();

//Beginning of webapp Process
var start = (function(){

//  eventListener.createEventListener(document.getElementById('form'), 'submit', input.inputValue);

api.apiCall("GET", createsURL.genreId(), function(object){

  var select = document.getElementById('select');

      object.genres.forEach(function(element){
          //Create element module
          var option = document.createElement('option');
          select.appendChild(option);
          option.textContent = element.name;
          option.value = element.id;
      });

});


})();

// Function that will populate the elemnt with 3 Gifs of the same width
var populateGifs = function(object) {
  var search-results = document.querySelector('.search-results');
    for (var i = 0; i < 3; i++) {
        var gifUrl = json.data[i].images.fixed_width_small.url;
        var imageTag = document.createElement('img');
        imageTag.src = gifUrl;
        imageTag.classList.add('gifs');
        search-results.appendChild(imageTag);
}
