//Generic API Module Code
var apiCall = (function(){
    function apiGet(url, cb){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                cb(JSON.parse(xhr.responseText));
            }
            else{
              console.log("Waiting for response");
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    }
    return {
      apiGet:apiGet
    };
})();

//Input Value module
var input = (function(){
    function inputValue(parent, id){
        return parent.getElementById(id).value;
    }
    return {
      inputValue: inputValue
    };
})();

//create url
var createsURL = (function(){
  function generateGenreUrl(id){
    var url = 'https://api.themoviedb.org/3/genre/' + id +'/movies?api_key=a2230c2d2bfec8e19602e73fa268f106&language=en-US&include_adult=false&sort_by=created_at.asc';
    return url;
  }
  function generateGifUrl(){
    //code here
  }
  return {
    cat: generateGenreUrl,
    generateGifUrl: generateGifUrl
  }
})();

console.log(createsURL);
