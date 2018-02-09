//This module will change the color theme of the chat window.

"use strict";

function themeColor(x, _this) {
  if (_this.checked) {
		x.style.backgroundColor = '#2c314f';
		x.style.color = 'white';
  } else  {
		x.style.backgroundColor = '#FFFFFF';
		x.style.color = 'black';
		
  }
}







 module.exports = themeColor;
