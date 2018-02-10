//This module will take the users input and will return the message after a key press

"use strict";
let aRay = [];

let postMessage = (id, message)=> {
  aRay.push(message);
  document.querySelector(id).innerHTML += `<div class="message"><p>${message}<button class="del-line">Delete</button></p></div>`;
  };


module.exports = {postMessage};
