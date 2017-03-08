



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

console.log(apiCall.apiGet);



//Input Value module
var input = (function(){

    function inputValue(parent, id){
        return parent.getElementById(id).value;
    }


    return {
      inputValue: inputValue
    };


})();

console.log(input.inputValue);
