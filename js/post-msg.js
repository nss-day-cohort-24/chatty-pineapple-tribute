//This module will delete individual messages.

/* This module should contain 
TODO: A function that accepts an element id, and the user message, 
TODO: and then add the user's message - along with the delete button - to the specified parent element. Each message should be stored in a private array in this module. This module should also expose a function to read all messages, and delete a single message.

// This module should accept a message element id and then remove the correct element from the DOM. This module should also remove the corresponding message from the private array that was created in the previous module.*/

"use strict";

let chatLog = document.getElementById("chatlog");
console.log("what is theElement?", chatLog);

let userMessageInput = document.getElementById("user-msg");
// Function expression for the el....
let newMessageLine = function sentIt(chatLog, string) {
    console.log("what is user msg?", userMessageInput);
    var parentElement = chatLog.parentElement;
    console.log("what is the parent element", parentElement);
    // The parent element of chatLog will most likely be a <div>.....
    parentElement.innerHTML += userMessageInput;
};

userMessageInput.addEventListener('keyup', function(e) {
    newMessageLine()
})


module.exports = ;


let deleteButton;