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

          messageJson += `<div id="textOptions"><h5> ${messageItem.user}:${messageItem.message}<h5></div>`;
    }


   messageDiv.innerHTML=messageJson;
   console.log("it works");
}

dataMessages.open("GET", "messages.json");
dataMessages.send();


let enterMessage = require("./input");
let getMessages = require("./input");
// let clearMessages = require("./");
// let changeTheme = require("./");
// let deleteMessage = require("./");

// let chatBox = {
//   enterMessage,
//   createDButton,
//   clearMessages,
//   changeTheme,
//   deleteMessage
// };
document.addEventListener("keydown", enterMessage.submitMessage);
// console.log(chatBox.enterMessage.submitMessage());
