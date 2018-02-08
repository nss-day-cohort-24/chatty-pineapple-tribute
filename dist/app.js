(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
//This module will take the users input and will return the message after a key press

"use strict";

let input = document.querySelector('input');
let message = "";

function submitMessage(e) {
  // console.log("any text");
  if(e.keyCode == 13 && input.value !== null) {
    message = input.value;
  }
}

module.exports = {submitMessage};

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
    let messageDiv = document.getElementById("chatlog");
    let messageJson = '';
    let item;
    for (item in taco){
        let messageItem = taco[item];

          messageJson += `<div><h2> ${messageItem.user}:${messageItem.message}</h2></div>`;
    }


   messageDiv.innerHTML = messageJson;
   console.log("it works");
}


let enterMessage = require("./input");
// let createDButton = require("./");
// let clearMessages = require("./");
// let changeTheme = require("./");
// let deleteMessage = require("./");

// let chatBox = {
//   enterMessage,
//   createDButton,
//   clearMessages,
//   changeTheme,
//   deleteMessage
// };
document.addEventListener("keydown", enterMessage.submitMessage);
// console.log(chatBox.enterMessage.submitMessage());

},{"./input":1}]},{},[2]);
