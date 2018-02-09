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
    let messageDiv = document.getElementById("chatbox");
    let messageJson = '';
    let item;
    for (item in taco){
        let messageItem = taco[item];

          messageJson += `<div><h5><b>${messageItem.user}:</b>  ${messageItem.message}<h5></div>`;
    }


   messageDiv.innerHTML=messageJson;
   console.log("it works");
}

dataMessages.open("GET", "messages.json");
dataMessages.send();


let enterMessage = require("./input");
let getMessages = require("./input");
let largeFont = require("./font");
let changeTheme = require("./theme");
// let deleteMessage = require("./");

// let chatBox = {
//   enterMessage,
//   createDButton,
//   clearMessages,
//   changeTheme,
//   deleteMessage
// };
document.addEventListener("keydown", enterMessage.submitMessage);
document.addEventListener("change", largeFont.fontFunctionBig);
// console.log(chatBox.enterMessage.submitMessage());
