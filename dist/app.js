(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
//This module will change the font size in the chat window.

"use strict";
var fonting = document.getElementById("changeFont");   // links to html button

function fontFunctionBig(event) {
    console.log("font change", event.target.checked);
    
    if (event.target.checked == true) {
        console.log("hola");
        document.getElementById("newFont").style.fontSize= "5em"; // run this function
     }else {
         console.log("adios");
         document.getElementById("newFont").style.fontSize= "";

     }
}






module.exports = {fontFunctionBig};

},{}],2:[function(require,module,exports){
//This module will take the users input and will return the message after a key press

"use strict";


let postMessage = (id, message)=> {
  let aRay = [];
  aRay.push(message);
  document.querySelector(id).innerHTML += `<div class="message"><p>${message}<button>Delete</button></p></div>`;
  console.log(aRay);
  };

module.exports = {postMessage};


},{}],3:[function(require,module,exports){
"use strict";

let dataMessages = new XMLHttpRequest();

dataMessages.addEventListener("load", postMessage);

function postMessage(event) {
    console.log("keep going");
    let messageJson = JSON.parse(event.target.responseText);
    console.log("messageJson", messageJson);
    showData(messageJson);
}

function showData(taco) {
    let messageDiv = document.getElementById("chatbox");
    let messageJson = '';
    let item;
    for (item in taco){
        let messageItem = taco[item];

          messageJson += `<div><h5><b>${messageItem.user}:</b>  ${messageItem.message}<h5></div>`;
    }


   messageDiv.innerHTML=messageJson;
   console.log("it works");
}

dataMessages.open("GET", "messages.json");
dataMessages.send();

// let getMessages = require("./input");
let postUserMessage = require("./input");
// let changeTheme = require("./");
// let deleteMessage = require("./");


let input = document.querySelector('#inputdefault');
input.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
      let message = document.querySelector('#inputdefault').value;
      postUserMessage.postMessage('#chatbox', message);
      input.value="";
  }
});
  
document.addEventListener("change", largeFont.fontFunctionBig);

},{"./font":1,"./input":2,"./theme":4}],4:[function(require,module,exports){
//This module will change the color theme of the chat window.

"use strict";

function themeColor(x, _this) {
  if (_this.checked) {
		x.style.backgroundColor = '#2c314f';
		x.style.color = 'white';
  } else  {
		x.style.backgroundColor = '#FFFFFF';
		x.style.color = 'black';
		
  }
}







 module.exports = themeColor;

},{}]},{},[3]);
