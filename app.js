//console.log('Hi');
//Slider
var sliders = document.getElementById("slider");
var output = document.getElementById("demoOne");
output.innerHTML = sliders.value;

sliders.oninput = function() {
  output.innerHTML = this.value;
}
//Button #1
var button = document.getElementById('buttonOne');
button.addEventListener("click",function(){
	alert("You Clicked Me " + button.value + " times!");

})
//Video Generator
var one = document.getElementById('one');
var buttonTwo = document.getElementById('buttonTwo');
function playVideo(){
	one.play();
	console.log('Video Is Playing!');
}
//Dropdown #1
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function openDropdown() {
    document.getElementById("dropdown-1").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//Dropdown #2
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function openDropdownTwo() {
    document.getElementById("dropdown-2").classList.toggle("show");
}