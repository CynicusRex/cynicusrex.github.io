document.addEventListener("DOMContentLoaded", function () {
    let source = document.getElementsByClassName("source");
    for (n = 0; n < source.length; n++) {
     	source[n].innerHTML = '[' + '<a href="#sources">' + (n+1) + '</a>' + ']';
    }
  });