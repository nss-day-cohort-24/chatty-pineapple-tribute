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


// let getMessages = require("./input");
let postUserMessage = require("./input");
// let changeTheme = require("./");
// let deleteMessage = require("./");


let input = document.querySelector('#inputdefault');
input.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
      let message = document.querySelector('#inputdefault').value;
      postUserMessage.postMessage('#chatbox', message);
      input.value="";
  }
});

document.addEventListener("change", largeFont.fontFunctionBig);
// console.log(chatBox.enterMessage.submitMessage());

