"use strict";

var chatLog = document.getElementById("chatlog");
console.log("what is theElement?", chatLog);


const samsMod = require('./getMessages');

function functionName(array) {
    var chatBox = document.getElementById("chatbox");
    var printValue = getMessages.pop();
    var postTheNewLine = `<div><p>${printValue} <button class="del-line">Delete</button></p></div>`;
    chatBox.innerHTML += postTheNewLine;
}

module.exports = functionName;