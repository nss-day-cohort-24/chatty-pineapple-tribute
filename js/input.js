//This module will take the users input and will return the message after a key press

"use strict";

let postMessage = (id, message)=> {
  let aRay = [];
  aRay.push(message);
  document.querySelector(id).innerHTML += `<div class="message"><p>${message}<button>Delete</button></p></div>`;
  console.log(aRay);
  };


module.exports = {postMessage};
