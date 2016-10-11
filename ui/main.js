//Counter Code
var button = document.getElementById('counter');
button.onclick = function() {
  
  //Make a request to the counter end point
  var request= new XMLHttpRequest();
  
  //Capture the request and store it in a variable
  request.onreadystatechange = function() {
      if( request.readystate === XMLHttpRequest.DONE);
      //Execute if response is received
      {
          if(request.status === 200)
          var counter = request.responseText;
          var span = document.getElementById('count');
          span.innerHTML = counter.toString();
      }
      //Not yet done
    } ; 
};

//Make a request
request.open('GET' , 'http://adhithiyavenkat.imad.hasura-app.io/counter' , true);
request.send(null);
    

