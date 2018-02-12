//This module will change the color theme of the chat window.

"use strict";



var darkTheme = document.getElementById("Checkbox1");
var chatbox = document.getElementById("chatbox");
var largeFont = document.getElementById("Checkbox2");
var messageBox = document.getElementById("message-container");


function themeColor() {
    if (darkTheme.checked === true) {
        chatbox.style.backgroundColor = '#2c314f';
        chatbox.style.color = 'white';
        console.log("the box is checked");
    } else if (darkTheme.checked === false) {
      chatbox.style.backgroundColor = '#FFFFFF';
      chatbox.style.color = 'black';
console.log("the box is not checked");
    }
}
darkTheme.addEventListener("click", themeColor);

function changeFontSize() {
    if (largeFont.checked === true) {
        chatbox.style.fontSize = "2em";
    } else if (largeFont.checked === false) {
        chatbox.style.fontSize = "";
    }
}

largeFont.addEventListener("click", changeFontSize);

 module.exports = {themeColor, changeFontSize};
