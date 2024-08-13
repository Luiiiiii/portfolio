function myBtn() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function bg(){
  let body = document.getElementById("body");
  if(body.style.background === "black"){
     body.style.background = "white";
  } else {
      body.style.background = "black";
  }
  let button = document.querySelector(".switch");
   if(button.innerHTML === "Light Mode"){
      button.innerHTML = "Dark Mode";
  } else {
       button.innerHTML = "Light Mode";
   }
}
  
