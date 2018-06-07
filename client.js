
window.onload = function() {
  var div = document.getElementsByClassName("color")[0];

  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);

  div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
};
