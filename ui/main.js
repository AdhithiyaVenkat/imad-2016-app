//Counter Code
var button = document.getElementById('counter');
button.onclick = function() {
  
  //Create a request object to counter end point
  var request= new XMLHttpRequest();
  
  //Capture the request and store it in a variable
  request.onreadystatechange = function() {
      if( request.readystate === XMLHttpRequest.DONE );
      //Take some action
      {
          var counter;
          if(request.status === 200)
            counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
      }
      //Not yet done
     }; 
};

//Make a request
request.open('GET' , 'http://adhithiyavenkat.imad.hasura-app.io/counter' , true);
request.send(null);
    

