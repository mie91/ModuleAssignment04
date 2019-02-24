//Given the following API, create a list of TODO cards on a webpage.


var cardContainer = document.getElementById("card-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var myRequest = new XMLHttpRequest();
    myRequest.open("GET", "https://jsonplaceholder.typicode.com/todos")
    myRequest.onload = function () {
        var myData = JSON.parse(myRequest.responseText); 
        addHTML(myData);
};

myRequest.send();
    
});


//funtion that adds HTML to the page:

function addHTML(data) {
  var htmlCode = "";

  for (i = 0; i < data.length; i++) {
        htmlCode += "<div>" + "<p>" + "<b>" + "User ID: " + "</b>" + data[i].userId + "<p>" + "<b>" + " ID: " + "</b>" + data[i].id + "<p>" + "<b>" + "Title: " + "</b>"  + data[i].title + "<p>" + "<b>" + " Completed: " + "</b>" + data[i].completed + "<p> " +  "</p>" + "</div>";
    }
    
    
    cardContainer.insertAdjacentHTML("beforebegin", htmlCode);
}


