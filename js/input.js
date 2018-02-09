//This module will take the users input and will return the message after a key press

"use strict";

// let input = document.querySelector('#inputdefault');
// let messages = [];
//
// let submitMessage = function(e) {
//   // console.log("any text");
//   if(e.keyCode == 13 && input.value !== null) {
//     messages.push(input.value);
//     input.value = "";
//   }
// };
//
// let getMessages = ()=> {
//   return messages;
// };
//
// module.exports = {submitMessage, getMessages};




let something = (id, message)=> {
  let aRay = [];
  aRay.push(message);
  document.querySelector(id).innerHTML += `<div class="message"><p>${message}<button>Delete</button></p></div>`;
  console.log(aRay);
  };


module.exports = {something};
