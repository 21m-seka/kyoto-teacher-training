/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

let tubtreger;

// iframeリロード
function reload1() {
	document.getElementById('triangle').src += '';
}
function reload2() {
	document.getElementById('square').src += '';
}
function reload3() {
	document.getElementById('asd').src += '';
}
function reload4() {
	document.getElementById('asdf').src += '';
}

document.getElementById('reload1').onclick = reload1;
document.getElementById('reload2').onclick = reload2;
document.getElementById('reload3').onclick = reload3;
document.getElementById('reload4').onclick = reload4;




// タブメニュー切り替え
function tubchange() {
	if (tubtreger == 1) {
		document.getElementById('tub1').classList.add('tubmenuselected');
		document.getElementById('tub2').classList.remove('tubmenuselected');
		document.getElementById('tub3').classList.remove('tubmenuselected');
		document.getElementById('tub4').classList.remove('tubmenuselected');

		document.getElementById('iframecont1').classList.remove('iframeconthidden');
		document.getElementById('iframecont2').classList.add('iframeconthidden');
		document.getElementById('iframecont3').classList.add('iframeconthidden');
		document.getElementById('iframecont4').classList.add('iframeconthidden');
	} else if (tubtreger == 2) {
		document.getElementById('tub1').classList.remove('tubmenuselected');
		document.getElementById('tub2').classList.add('tubmenuselected');
		document.getElementById('tub3').classList.remove('tubmenuselected');
		document.getElementById('tub4').classList.remove('tubmenuselected');

		document.getElementById('iframecont1').classList.add('iframeconthidden');
		document.getElementById('iframecont2').classList.remove('iframeconthidden');
		document.getElementById('iframecont3').classList.add('iframeconthidden');
		document.getElementById('iframecont4').classList.add('iframeconthidden');
	} else if (tubtreger == 3) {
		document.getElementById('tub1').classList.remove('tubmenuselected');
		document.getElementById('tub2').classList.remove('tubmenuselected');
		document.getElementById('tub3').classList.add('tubmenuselected');
		document.getElementById('tub4').classList.remove('tubmenuselected');

		document.getElementById('iframecont1').classList.add('iframeconthidden');
		document.getElementById('iframecont2').classList.add('iframeconthidden');
		document.getElementById('iframecont3').classList.remove('iframeconthidden');
		document.getElementById('iframecont4').classList.add('iframeconthidden');
	}
	else if (tubtreger == 4) {
		document.getElementById('tub1').classList.remove('tubmenuselected');
		document.getElementById('tub2').classList.remove('tubmenuselected');
		document.getElementById('tub3').classList.remove('tubmenuselected');
		document.getElementById('tub4').classList.add('tubmenuselected');

		document.getElementById('iframecont1').classList.add('iframeconthidden');
		document.getElementById('iframecont2').classList.add('iframeconthidden');
		document.getElementById('iframecont3').classList.add('iframeconthidden');
		document.getElementById('iframecont4').classList.remove('iframeconthidden');
	}
}

function tubtregerchange1() {
	tubtreger = 1;
	tubchange();
}
function tubtregerchange2() {
	tubtreger = 2;
	tubchange();
}
function tubtregerchange3() {
	tubtreger = 3;
	tubchange();
}
function tubtregerchange4() {
	tubtreger = 4;
	tubchange();
}

document.getElementById('tub1').onclick = tubtregerchange1;
document.getElementById('tub2').onclick = tubtregerchange2;
document.getElementById('tub3').onclick = tubtregerchange3;
document.getElementById('tub4').onclick = tubtregerchange4;




// サンプルダウンロード
function dl1() {
	document.getElementById("dl1").download = "test1.sb3"
	document.getElementById("dl1").href = "./file/test1.sb3";
}
document.getElementById('dl1').onclick = dl1;

// function dl2() {
// 	document.getElementById("dl2").download = "test2.sb3"
// 	document.getElementById("dl2").href = "./file/test2.sb3";
// }
// document.getElementById('dl2').onclick = dl2;

// function dl3() {
// 	document.getElementById("dl3").download = "test3.sb3"
// 	document.getElementById("dl3").href = "./file/test3.sb3";
// }
// document.getElementById('dl3').onclick = dl3;

// function dl4() {
// 	document.getElementById("dl4").download = "test4.sb3"
// 	document.getElementById("dl4").href = "./file/test4.sb3";
// }
// document.getElementById('dl4').onclick = dl4;



// サンプル表示切り替え
// 1
function sampleopen1() {
	document.getElementById('sample-img-cantainar1').classList.remove('sample-hidden');
}
document.getElementById('sample1').onclick = sampleopen1;
function sampleclose1() {
	document.getElementById('sample-img-cantainar1').classList.add('sample-hidden');
}
document.getElementById('sample-close1').onclick = sampleclose1;

// 2
function sampleopen2() {
	document.getElementById('sample-img-cantainar2').classList.remove('sample-hidden');
}
document.getElementById('sample2').onclick = sampleopen2;

function sampleclose2() {
	document.getElementById('sample-img-cantainar2').classList.add('sample-hidden');
}
document.getElementById('sample-close2').onclick = sampleclose2;

// 3
function sampleopen3() {
	document.getElementById('sample-img-cantainar3').classList.remove('sample-hidden');
}
document.getElementById('sample3').onclick = sampleopen3;

function sampleclose3() {
	document.getElementById('sample-img-cantainar3').classList.add('sample-hidden');
}
document.getElementById('sample-close3').onclick = sampleclose3;

// 4
function sampleopen4() {
	document.getElementById('sample-img-cantainar4').classList.remove('sample-hidden');
}
document.getElementById('sample4').onclick = sampleopen4;

function sampleclose4() {
	document.getElementById('sample-img-cantainar4').classList.add('sample-hidden');
}
document.getElementById('sample-close4').onclick = sampleclose4;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxubGV0IHR1YnRyZWdlcjtcblxuLy8gaWZyYW1l44Oq44Ot44O844OJXG5mdW5jdGlvbiByZWxvYWQxKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJpYW5nbGUnKS5zcmMgKz0gJyc7XG59XG5mdW5jdGlvbiByZWxvYWQyKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3F1YXJlJykuc3JjICs9ICcnO1xufVxuZnVuY3Rpb24gcmVsb2FkMygpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FzZCcpLnNyYyArPSAnJztcbn1cbmZ1bmN0aW9uIHJlbG9hZDQoKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhc2RmJykuc3JjICs9ICcnO1xufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVsb2FkMScpLm9uY2xpY2sgPSByZWxvYWQxO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbG9hZDInKS5vbmNsaWNrID0gcmVsb2FkMjtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWxvYWQzJykub25jbGljayA9IHJlbG9hZDM7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVsb2FkNCcpLm9uY2xpY2sgPSByZWxvYWQ0O1xuXG5cblxuXG4vLyDjgr/jg5bjg6Hjg4vjg6Xjg7zliIfjgormm7/jgYhcbmZ1bmN0aW9uIHR1YmNoYW5nZSgpIHtcblx0aWYgKHR1YnRyZWdlciA9PSAxKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1YjEnKS5jbGFzc0xpc3QuYWRkKCd0dWJtZW51c2VsZWN0ZWQnKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHViMicpLmNsYXNzTGlzdC5yZW1vdmUoJ3R1Ym1lbnVzZWxlY3RlZCcpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dWIzJykuY2xhc3NMaXN0LnJlbW92ZSgndHVibWVudXNlbGVjdGVkJyk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1YjQnKS5jbGFzc0xpc3QucmVtb3ZlKCd0dWJtZW51c2VsZWN0ZWQnKTtcblxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZnJhbWVjb250MScpLmNsYXNzTGlzdC5yZW1vdmUoJ2lmcmFtZWNvbnRoaWRkZW4nKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWZyYW1lY29udDInKS5jbGFzc0xpc3QuYWRkKCdpZnJhbWVjb250aGlkZGVuJyk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lmcmFtZWNvbnQzJykuY2xhc3NMaXN0LmFkZCgnaWZyYW1lY29udGhpZGRlbicpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZnJhbWVjb250NCcpLmNsYXNzTGlzdC5hZGQoJ2lmcmFtZWNvbnRoaWRkZW4nKTtcblx0fSBlbHNlIGlmICh0dWJ0cmVnZXIgPT0gMikge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dWIxJykuY2xhc3NMaXN0LnJlbW92ZSgndHVibWVudXNlbGVjdGVkJyk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1YjInKS5jbGFzc0xpc3QuYWRkKCd0dWJtZW51c2VsZWN0ZWQnKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHViMycpLmNsYXNzTGlzdC5yZW1vdmUoJ3R1Ym1lbnVzZWxlY3RlZCcpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dWI0JykuY2xhc3NMaXN0LnJlbW92ZSgndHVibWVudXNlbGVjdGVkJyk7XG5cblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWZyYW1lY29udDEnKS5jbGFzc0xpc3QuYWRkKCdpZnJhbWVjb250aGlkZGVuJyk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lmcmFtZWNvbnQyJykuY2xhc3NMaXN0LnJlbW92ZSgnaWZyYW1lY29udGhpZGRlbicpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZnJhbWVjb250MycpLmNsYXNzTGlzdC5hZGQoJ2lmcmFtZWNvbnRoaWRkZW4nKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWZyYW1lY29udDQnKS5jbGFzc0xpc3QuYWRkKCdpZnJhbWVjb250aGlkZGVuJyk7XG5cdH0gZWxzZSBpZiAodHVidHJlZ2VyID09IDMpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHViMScpLmNsYXNzTGlzdC5yZW1vdmUoJ3R1Ym1lbnVzZWxlY3RlZCcpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dWIyJykuY2xhc3NMaXN0LnJlbW92ZSgndHVibWVudXNlbGVjdGVkJyk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1YjMnKS5jbGFzc0xpc3QuYWRkKCd0dWJtZW51c2VsZWN0ZWQnKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHViNCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3R1Ym1lbnVzZWxlY3RlZCcpO1xuXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lmcmFtZWNvbnQxJykuY2xhc3NMaXN0LmFkZCgnaWZyYW1lY29udGhpZGRlbicpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZnJhbWVjb250MicpLmNsYXNzTGlzdC5hZGQoJ2lmcmFtZWNvbnRoaWRkZW4nKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWZyYW1lY29udDMnKS5jbGFzc0xpc3QucmVtb3ZlKCdpZnJhbWVjb250aGlkZGVuJyk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lmcmFtZWNvbnQ0JykuY2xhc3NMaXN0LmFkZCgnaWZyYW1lY29udGhpZGRlbicpO1xuXHR9XG5cdGVsc2UgaWYgKHR1YnRyZWdlciA9PSA0KSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1YjEnKS5jbGFzc0xpc3QucmVtb3ZlKCd0dWJtZW51c2VsZWN0ZWQnKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHViMicpLmNsYXNzTGlzdC5yZW1vdmUoJ3R1Ym1lbnVzZWxlY3RlZCcpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dWIzJykuY2xhc3NMaXN0LnJlbW92ZSgndHVibWVudXNlbGVjdGVkJyk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1YjQnKS5jbGFzc0xpc3QuYWRkKCd0dWJtZW51c2VsZWN0ZWQnKTtcblxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZnJhbWVjb250MScpLmNsYXNzTGlzdC5hZGQoJ2lmcmFtZWNvbnRoaWRkZW4nKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWZyYW1lY29udDInKS5jbGFzc0xpc3QuYWRkKCdpZnJhbWVjb250aGlkZGVuJyk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lmcmFtZWNvbnQzJykuY2xhc3NMaXN0LmFkZCgnaWZyYW1lY29udGhpZGRlbicpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZnJhbWVjb250NCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2lmcmFtZWNvbnRoaWRkZW4nKTtcblx0fVxufVxuXG5mdW5jdGlvbiB0dWJ0cmVnZXJjaGFuZ2UxKCkge1xuXHR0dWJ0cmVnZXIgPSAxO1xuXHR0dWJjaGFuZ2UoKTtcbn1cbmZ1bmN0aW9uIHR1YnRyZWdlcmNoYW5nZTIoKSB7XG5cdHR1YnRyZWdlciA9IDI7XG5cdHR1YmNoYW5nZSgpO1xufVxuZnVuY3Rpb24gdHVidHJlZ2VyY2hhbmdlMygpIHtcblx0dHVidHJlZ2VyID0gMztcblx0dHViY2hhbmdlKCk7XG59XG5mdW5jdGlvbiB0dWJ0cmVnZXJjaGFuZ2U0KCkge1xuXHR0dWJ0cmVnZXIgPSA0O1xuXHR0dWJjaGFuZ2UoKTtcbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1YjEnKS5vbmNsaWNrID0gdHVidHJlZ2VyY2hhbmdlMTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dWIyJykub25jbGljayA9IHR1YnRyZWdlcmNoYW5nZTI7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHViMycpLm9uY2xpY2sgPSB0dWJ0cmVnZXJjaGFuZ2UzO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1YjQnKS5vbmNsaWNrID0gdHVidHJlZ2VyY2hhbmdlNDtcblxuXG5cblxuLy8g44K144Oz44OX44Or44OA44Km44Oz44Ot44O844OJXG5mdW5jdGlvbiBkbDEoKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGwxXCIpLmRvd25sb2FkID0gXCJ0ZXN0MS5zYjNcIlxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRsMVwiKS5ocmVmID0gXCIuL2ZpbGUvdGVzdDEuc2IzXCI7XG59XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGwxJykub25jbGljayA9IGRsMTtcblxuLy8gZnVuY3Rpb24gZGwyKCkge1xuLy8gXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRsMlwiKS5kb3dubG9hZCA9IFwidGVzdDIuc2IzXCJcbi8vIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkbDJcIikuaHJlZiA9IFwiLi9maWxlL3Rlc3QyLnNiM1wiO1xuLy8gfVxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RsMicpLm9uY2xpY2sgPSBkbDI7XG5cbi8vIGZ1bmN0aW9uIGRsMygpIHtcbi8vIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkbDNcIikuZG93bmxvYWQgPSBcInRlc3QzLnNiM1wiXG4vLyBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGwzXCIpLmhyZWYgPSBcIi4vZmlsZS90ZXN0My5zYjNcIjtcbi8vIH1cbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkbDMnKS5vbmNsaWNrID0gZGwzO1xuXG4vLyBmdW5jdGlvbiBkbDQoKSB7XG4vLyBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGw0XCIpLmRvd25sb2FkID0gXCJ0ZXN0NC5zYjNcIlxuLy8gXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRsNFwiKS5ocmVmID0gXCIuL2ZpbGUvdGVzdDQuc2IzXCI7XG4vLyB9XG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGw0Jykub25jbGljayA9IGRsNDtcblxuXG5cbi8vIOOCteODs+ODl+ODq+ihqOekuuWIh+OCiuabv+OBiFxuLy8gMVxuZnVuY3Rpb24gc2FtcGxlb3BlbjEoKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYW1wbGUtaW1nLWNhbnRhaW5hcjEnKS5jbGFzc0xpc3QucmVtb3ZlKCdzYW1wbGUtaGlkZGVuJyk7XG59XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2FtcGxlMScpLm9uY2xpY2sgPSBzYW1wbGVvcGVuMTtcbmZ1bmN0aW9uIHNhbXBsZWNsb3NlMSgpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhbXBsZS1pbWctY2FudGFpbmFyMScpLmNsYXNzTGlzdC5hZGQoJ3NhbXBsZS1oaWRkZW4nKTtcbn1cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYW1wbGUtY2xvc2UxJykub25jbGljayA9IHNhbXBsZWNsb3NlMTtcblxuLy8gMlxuZnVuY3Rpb24gc2FtcGxlb3BlbjIoKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYW1wbGUtaW1nLWNhbnRhaW5hcjInKS5jbGFzc0xpc3QucmVtb3ZlKCdzYW1wbGUtaGlkZGVuJyk7XG59XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2FtcGxlMicpLm9uY2xpY2sgPSBzYW1wbGVvcGVuMjtcblxuZnVuY3Rpb24gc2FtcGxlY2xvc2UyKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2FtcGxlLWltZy1jYW50YWluYXIyJykuY2xhc3NMaXN0LmFkZCgnc2FtcGxlLWhpZGRlbicpO1xufVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhbXBsZS1jbG9zZTInKS5vbmNsaWNrID0gc2FtcGxlY2xvc2UyO1xuXG4vLyAzXG5mdW5jdGlvbiBzYW1wbGVvcGVuMygpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhbXBsZS1pbWctY2FudGFpbmFyMycpLmNsYXNzTGlzdC5yZW1vdmUoJ3NhbXBsZS1oaWRkZW4nKTtcbn1cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYW1wbGUzJykub25jbGljayA9IHNhbXBsZW9wZW4zO1xuXG5mdW5jdGlvbiBzYW1wbGVjbG9zZTMoKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYW1wbGUtaW1nLWNhbnRhaW5hcjMnKS5jbGFzc0xpc3QuYWRkKCdzYW1wbGUtaGlkZGVuJyk7XG59XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2FtcGxlLWNsb3NlMycpLm9uY2xpY2sgPSBzYW1wbGVjbG9zZTM7XG5cbi8vIDRcbmZ1bmN0aW9uIHNhbXBsZW9wZW40KCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2FtcGxlLWltZy1jYW50YWluYXI0JykuY2xhc3NMaXN0LnJlbW92ZSgnc2FtcGxlLWhpZGRlbicpO1xufVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhbXBsZTQnKS5vbmNsaWNrID0gc2FtcGxlb3BlbjQ7XG5cbmZ1bmN0aW9uIHNhbXBsZWNsb3NlNCgpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhbXBsZS1pbWctY2FudGFpbmFyNCcpLmNsYXNzTGlzdC5hZGQoJ3NhbXBsZS1oaWRkZW4nKTtcbn1cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYW1wbGUtY2xvc2U0Jykub25jbGljayA9IHNhbXBsZWNsb3NlNDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=