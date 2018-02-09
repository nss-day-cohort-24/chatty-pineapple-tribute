
// "use strict";
// var chatLog = document.getElementById("chatlog");
// console.log("what is theElement?", chatLog);


// // let userMessageInput = document.getElementById("user-msg");

// // Function expression for the el....
// var newMessageLine = function sentIt() {
//     var userMessageInput = document.getElementById("user-msg");
//     console.log("what is userMessageInput?", userMessageInput);
//     var printValue = chatLog;
//     console.log("what is user msg?", printValue);
//     // console.log("what is the parent element", parentElement);
//     printValue.innerHTML += userMessageInput;
// };


// var addDelButton = function createDelButton() {
//     var deleteButton = document.createElement("BUTTON"); // Create a <button> element
//     var textNode = document.createTextNode("Delete Line"); // Create a text node
//     deleteButton.appendChild(t); // Append the text to <button>
//     document.chatLog.appendChild(btn); // Append <button> to <body>;
// };


// var userMessageInput = document.getElementById("user-msg");

// userMessageInput.addEventListener('keypress', function(e) {
//     if (e.keyCode === 13) {
//         var userString = document.getElementById("user-msg").value;
//         console.log("what did they type?", userString);
//         console.log("YOUR KEY IS WORKING!!!");
//         // newMessageLine();
//     }
// });
"use strict";

// may need to change the require....
const samsMod = require('./getMessages');

function newLine(array) {
    var chatBox = document.getElementById("chatbox");
    var printValue = samsMod.pop();
    var postTheNewLine = `<div><p>${printValue} <button class="del-line">Delete</button></p></div>`;
    chatBox.innerHTML += postTheNewLine;
}

module.exports = newLine;
