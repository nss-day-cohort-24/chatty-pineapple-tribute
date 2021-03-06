"use strict";

let chatbox = document.getElementById('chatbox');
let input = document.querySelector('#inputdefault');
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

         // messageJson += `<div><h5><b>${messageItem.user}:</b>  ${messageItem.message}</h5></div>`;
          messageJson += `<div class="message"><p><b>${messageItem.user}:</b>  ${messageItem.message}<button class="del-line">X</button></p></div>`;
    }


   messageDiv.innerHTML=messageJson;
   console.log("it works");
}

dataMessages.open("GET", "messages.json");
dataMessages.send();

let userMessage = require("./add_delete_msg");
// let changeTheme = require("./");

input.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
      let message = document.querySelector('#inputdefault').value;
      userMessage.postMsg('#chatbox', message);
      input.value="";
  }
});

chatbox.addEventListener('click', (event) => {
  let line = event.target;
  userMessage.deleteMsg(line);
});

let theme = require("./theme");

// document.addEventListener("change", largeFont.fontFunctionBig);
