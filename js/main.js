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
    let messageDiv = document.getElementById("chatlog");
    let messageJson = '';
    let item;
    for (item in taco){
        let messageItem = taco[item];
          messageJson += `<div><h2> ${messageItem.message}</h2></div>`;
    }

   messageDiv.innerHTML = messageJson;
   console.log("it works");
}


// let enterMessage = require("./");
// let createDButton = require("./");
// let clearMessages = require("./");
// let changeTheme = require("./");
// let deleteMessage = require("./");

let chatBox = {
      enterMessage,
//   createDButton,
//   clearMessages,
//   changeTheme,
//   deleteMessage
// }
console.log(chatBox.newMessage);
