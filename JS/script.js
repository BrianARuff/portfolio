'use strict';

// xhr request for nav bar
window.onload = function loadDoc() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
     document.getElementById("nav").innerHTML = this.responseText;
    }
  };
  xhr.open("GET", "../HTML/nav.html", true);
  xhr.send();
};

