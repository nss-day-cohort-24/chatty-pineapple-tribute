"use strict";
let aRay = [];

let postMsg = (id, message)=> {
  aRay.push(message);
  document.querySelector(id).innerHTML += `<div class="message"><p>${message}<button class="del-line">Delete</button></p></div>`;
  console.log(aRay);
  };

let deleteMsg = (line) => {
  if(line.className == 'del-line') {
    let button = event.target;
    let p = button.parentNode;
    let div = p.parentNode;
    let chatbox = div.parentNode;
    chatbox.removeChild(div);
    // let pos = aRay.indexOf(p.textContent);
    // console.log(p.textContent);
    // aRay.splice(pos, 1);
    // console.log(aRay);
  }
};

// let allMsgs = () => {
//   return aRay;
// };

module.exports = {postMsg, deleteMsg};
