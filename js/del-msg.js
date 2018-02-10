"use strict";

let deleteMsg = (line) => {
  if(line.className == 'del-line') {
    let button = event.target;
    let p = button.parentNode;
    let div = p.parentNode;
    let chatbox = div.parentNode;
    chatbox.removeChild(div);
  }
};

module.exports = {deleteMsg};
