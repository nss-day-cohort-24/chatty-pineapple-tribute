//This module will take the users input and will return the message after a key press

"use strict";

let input = document.querySelector('input');
let messages = [];

function submitMessage(e) {
  // console.log("any text");
  if(e.keyCode == 13 && input.value !== null) {
    messages.push(input.value);
    console.log(messages);
    input.value = "";
  }
}
// getMessages() {
//   return messages;
// };

module.exports = {submitMessage};
// , getMessages
