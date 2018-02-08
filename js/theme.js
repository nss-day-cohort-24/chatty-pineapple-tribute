//This module will change the theme of the chat window.

"use strict";

function bg1(){
	document.getElementById("chatbox").style.cssText="background-color:#6699FF;";
	}
function bg2(){
	document.getElementById("chatbox").style.cssText="background-color:#FFCC66;";
	}	
function BG (it, box) {
    var vis = (box.checked) ? bg1() : bg2();
	return vis;
}







// module.exports = ;
