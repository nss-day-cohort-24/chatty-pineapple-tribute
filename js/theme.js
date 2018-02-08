//This module will change the color theme of the chat window.

"use strict";

function themeColor(x, _this) {
	if (_this.checked) {
	  x.style.backgroundColor = '#333';
	} else  {
	  x.style.backgroundColor = '#DCDCDC';
	}
  }






 module.exports = themeColor;
