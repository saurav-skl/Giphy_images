/* 1. Grab the input value */


document.querySelector(".js-go").addEventListener('click',function(){

    var input = document.querySelector("input").value;
    searchquery(input);
  
  });
  
  document.querySelector(".js-userinput").addEventListener('keyup',function(e){
  
    var input = document.querySelector("input").value;
    //console.log(input);
  
    // if the key ENTER is pressed...
    if(e.which === 13) {
      searchquery(input);
    }
  
  });
  
  /* 2. do the data stuff with the API */
 function searchquery(input){
  var url = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + input;
  
  // AJAX Request
  var GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open( 'GET', url );
  GiphyAJAXCall.send();
  
  GiphyAJAXCall.addEventListener('load',function(e){
  
    var data = e.target.response;
    pushToDOM(data);
    //console.log(data);
  
  });
 }
  
  /* 3. Show me the GIFs */
  
  function pushToDOM(input) {
  
    var response = JSON.parse(input);

    var imageUrls = response.data;

    imageUrls.forEach(function(image){

      var src= image.images.fixed_height.url;
      //console.log(src.length);
      var container = document.querySelector(".js-container");
      container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
      console.log(container.length);
    });
  
  }

  // var images = document.getElementsByTagName('img');
  // var l = images.length;
  // for (var p = 0; p < l; p++) {
  //     images[0].parentNode.removeChild(images[0]);
  // }
  // // display the image  
  // document.body.appendChild(newImage);









