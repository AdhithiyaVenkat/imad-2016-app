//Counter Code
var button = document.getElementById('counter');
button.onclick = function() {
  
  //Create a request object to counter end point
  var request= new XMLHttpRequest();
  
  //Capture the request and store it in a variable
  request.onreadystatechange = function() {
      if( request.readyState === XMLHttpRequest.DONE );
      //Take some action
      {
        if(request.status === 200)
            counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
      }
      //Not yet done
    }; 


//Make a request
    request.open('GET' , 'http://adhithiyavenkat.imad.hasura-app.io/counter' , true);
    request.send(null);
};    

var nameInput = document.getElementById('name');
name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
  //Make a request to server and send the name
  
  //Display a list of names
  var names = ['name1', 'name2', 'name3'];
  var list = [];
  for (var i=0; i<names.length; i++)
  {
      list += '<li>' + names[i] + '</li>';
  }
  var ul = document.getElementById('namelist');
  ul= list;
};