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