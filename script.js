// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;

// Full-width images (not utilized)
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Three images side by side
function three() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.msFlex = "33%";  // IE10
      elements[i].style.flex = "33%";
    }
  }

// highlight current button
var buttons = document.getElementById("myButtons");
var btns = buttons.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}