(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
//This module will take the users input and will return the message after a key press

"use strict";

let postMessage = (id, message)=> {
  let aRay = [];
  aRay.push(message);
  document.querySelector(id).innerHTML += `<div class="message"><p>${message}<button>Delete</button></p></div>`;
  console.log(aRay);
  };


module.exports = {postMessage};

},{}],2:[function(require,module,exports){
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
// console.log(chatBox.enterMessage.submitMessage());


},{"./input":1}]},{},[2]);
