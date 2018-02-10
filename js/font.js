//This module will change the font size in the chat window.

"use strict";
var fonting = document.getElementById("changeFont");   // links to html button

function fontFunctionBig(event) {
    console.log("font change", event.target.checked);
    
    if (event.target.checked == true) {
        console.log("hola");
        document.getElementById("newFont").style.fontSize= "5em"; // run this function
     }else {
         console.log("adios");
         document.getElementById("newFont").style.fontSize= "";

     }
}






module.exports = {fontFunctionBig};
