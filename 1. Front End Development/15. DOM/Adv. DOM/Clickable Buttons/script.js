// Using "addEventlistener" we can make buttons clickable
document.querySelector("button").addEventListener("click", clickHandle);

function clickHandle() {
  //This is the function which gets called by "addEventlistener"
  alert("I got clicked");
}

// We can also pass this function as an "Anonmyous Function"
document.querySelector("button").addEventListener("click", function () {
  alert("I got clicked!");
});
