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



//Beginning of webapp Process
var start = (function(){

  eventListener.createEventListener(document.getElementById('form'), 'submit', input.inputValue);


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
  function generateGifUrl(){
    //code here
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
