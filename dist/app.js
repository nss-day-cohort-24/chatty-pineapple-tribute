(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
//This module will change the font size in the chat window.

"use strict";
var fonting = document.getElementById("changeFont");   // links to html button
function fontFunctionBig(event) {
    console.log("font change", event.target.checked);
    
    if (event.target.checked == true) {
        console.log("hola");
        document.getElementById("newFont").style.fontSize= "1.25em"; // run this function
     }else {
         console.log("adios");
         document.getElementById("newFont").style.fontSize= "1em";

     }
}






module.exports = {fontFunctionBig};

},{}],2:[function(require,module,exports){
//This module will take the users input and will return the message after a key press

"use strict";

let input = document.querySelector('#inputdefault');
let messages = [];

function submitMessage(e) {
  // console.log("any text");
  if(e.keyCode == 13 && input.value !== null) {
    messages.push(input.value);
    console.log(messages);
    input.value = "";
  }
}
function getMessages() {
  return messages;
}

module.exports = {submitMessage, getMessages};

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


let enterMessage = require("./input");
let getMessages = require("./input");
let largeFont = require("./font");
let changeTheme = require("./theme");
// let deleteMessage = require("./");

// let chatBox = {
//   enterMessage,
//   createDButton,
//   clearMessages,
//   changeTheme,
//   deleteMessage
// };
document.addEventListener("keydown", enterMessage.submitMessage);
document.addEventListener("change", largeFont.fontFunctionBig);
// console.log(chatBox.enterMessage.submitMessage());

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
