(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";
let aRay = [];

let postMsg = (id, message)=> {
  aRay.push(message);
  document.querySelector(id).innerHTML += `<div class="message"><p>${message}<button class="del-line">X
  </button></p></div>`;
  console.log(aRay);
  };

let deleteMsg = (line) => {
  if(line.className == 'del-line') {
    let button = event.target;
    let p = button.parentNode;
    let div = p.parentNode;
    let chatbox = div.parentNode;
    chatbox.removeChild(div);
    // let pos = aRay.indexOf(p.textContent);
    // console.log(p.textContent);
    // aRay.splice(pos, 1);
    // console.log(aRay);
  }
};

// let allMsgs = () => {
//   return aRay;
// };

module.exports = {postMsg, deleteMsg};

},{}],2:[function(require,module,exports){
"use strict";

let chatbox = document.getElementById('chatbox');
let input = document.querySelector('#inputdefault');
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

          messageJson += `<div><h5><b>${messageItem.user}:</b>  ${messageItem.message}</h5></div>`;
          //messageJson += `<div><p><b>${messageItem.user}:</b>  ${messageItem.message}<button class="del-line">Delete</button></p></div>`;
    }


   messageDiv.innerHTML=messageJson;
   console.log("it works");
}

dataMessages.open("GET", "messages.json");
dataMessages.send();

let userMessage = require("./add_delete_msg");
// let changeTheme = require("./");

input.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
      let message = document.querySelector('#inputdefault').value;
      userMessage.postMsg('#chatbox', message);
      input.value="";
  }
});

chatbox.addEventListener('click', (event) => {
  let line = event.target;
  userMessage.deleteMsg(line);
});

let theme = require("./theme");

// document.addEventListener("change", largeFont.fontFunctionBig);

},{"./add_delete_msg":1,"./theme":3}],3:[function(require,module,exports){
//This module will change the color theme of the chat window.

"use strict";



var darkTheme = document.getElementById("Checkbox1");
var chatbox = document.getElementById("chatbox");


function themeColor() {
    if (darkTheme.checked === true) {
        chatbox.style.backgroundColor = '#2c314f';
        chatbox.style.color = 'white';
        console.log("the box is checked");
    } else if (darkTheme.checked === false) {
      chatbox.style.backgroundColor = '#FFFFFF';
      chatbox.style.color = 'black';
console.log("the box is not checked");
    }
}
darkTheme.addEventListener("click", themeColor);

 module.exports = {themeColor};

},{}]},{},[2]);
