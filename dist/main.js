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

document.getElementById('reload1').onclick = reload1;
document.getElementById('reload2').onclick = reload2;
document.getElementById('reload3').onclick = reload3;




// タブメニュー切り替え
function tubchange() {
	if (tubtreger == 1) {
		document.getElementById('tub1').classList.add('tubmenuselected');
		document.getElementById('tub2').classList.remove('tubmenuselected');
		document.getElementById('tub3').classList.remove('tubmenuselected');

		document.getElementById('iframecont1').classList.remove('iframeconthidden');
		document.getElementById('iframecont2').classList.add('iframeconthidden');
		document.getElementById('iframecont3').classList.add('iframeconthidden');
	} else if (tubtreger == 2) {
		document.getElementById('tub1').classList.remove('tubmenuselected');
		document.getElementById('tub2').classList.add('tubmenuselected');
		document.getElementById('tub3').classList.remove('tubmenuselected');

		document.getElementById('iframecont1').classList.add('iframeconthidden');
		document.getElementById('iframecont2').classList.remove('iframeconthidden');
		document.getElementById('iframecont3').classList.add('iframeconthidden');
	} else if (tubtreger == 3) {
		document.getElementById('tub1').classList.remove('tubmenuselected');
		document.getElementById('tub2').classList.remove('tubmenuselected');
		document.getElementById('tub3').classList.add('tubmenuselected');

		document.getElementById('iframecont1').classList.add('iframeconthidden');
		document.getElementById('iframecont2').classList.add('iframeconthidden');
		document.getElementById('iframecont3').classList.remove('iframeconthidden');
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

document.getElementById('tub1').onclick = tubtregerchange1;
document.getElementById('tub2').onclick = tubtregerchange2;
document.getElementById('tub3').onclick = tubtregerchange3;




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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5sZXQgdHVidHJlZ2VyO1xuXG4vLyBpZnJhbWXjg6rjg63jg7zjg4lcbmZ1bmN0aW9uIHJlbG9hZDEoKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmlhbmdsZScpLnNyYyArPSAnJztcbn1cbmZ1bmN0aW9uIHJlbG9hZDIoKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcXVhcmUnKS5zcmMgKz0gJyc7XG59XG5mdW5jdGlvbiByZWxvYWQzKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXNkJykuc3JjICs9ICcnO1xufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVsb2FkMScpLm9uY2xpY2sgPSByZWxvYWQxO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlbG9hZDInKS5vbmNsaWNrID0gcmVsb2FkMjtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWxvYWQzJykub25jbGljayA9IHJlbG9hZDM7XG5cblxuXG5cbi8vIOOCv+ODluODoeODi+ODpeODvOWIh+OCiuabv+OBiFxuZnVuY3Rpb24gdHViY2hhbmdlKCkge1xuXHRpZiAodHVidHJlZ2VyID09IDEpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHViMScpLmNsYXNzTGlzdC5hZGQoJ3R1Ym1lbnVzZWxlY3RlZCcpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dWIyJykuY2xhc3NMaXN0LnJlbW92ZSgndHVibWVudXNlbGVjdGVkJyk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1YjMnKS5jbGFzc0xpc3QucmVtb3ZlKCd0dWJtZW51c2VsZWN0ZWQnKTtcblxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZnJhbWVjb250MScpLmNsYXNzTGlzdC5yZW1vdmUoJ2lmcmFtZWNvbnRoaWRkZW4nKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWZyYW1lY29udDInKS5jbGFzc0xpc3QuYWRkKCdpZnJhbWVjb250aGlkZGVuJyk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lmcmFtZWNvbnQzJykuY2xhc3NMaXN0LmFkZCgnaWZyYW1lY29udGhpZGRlbicpO1xuXHR9IGVsc2UgaWYgKHR1YnRyZWdlciA9PSAyKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1YjEnKS5jbGFzc0xpc3QucmVtb3ZlKCd0dWJtZW51c2VsZWN0ZWQnKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHViMicpLmNsYXNzTGlzdC5hZGQoJ3R1Ym1lbnVzZWxlY3RlZCcpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dWIzJykuY2xhc3NMaXN0LnJlbW92ZSgndHVibWVudXNlbGVjdGVkJyk7XG5cblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWZyYW1lY29udDEnKS5jbGFzc0xpc3QuYWRkKCdpZnJhbWVjb250aGlkZGVuJyk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lmcmFtZWNvbnQyJykuY2xhc3NMaXN0LnJlbW92ZSgnaWZyYW1lY29udGhpZGRlbicpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZnJhbWVjb250MycpLmNsYXNzTGlzdC5hZGQoJ2lmcmFtZWNvbnRoaWRkZW4nKTtcblx0fSBlbHNlIGlmICh0dWJ0cmVnZXIgPT0gMykge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dWIxJykuY2xhc3NMaXN0LnJlbW92ZSgndHVibWVudXNlbGVjdGVkJyk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1YjInKS5jbGFzc0xpc3QucmVtb3ZlKCd0dWJtZW51c2VsZWN0ZWQnKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHViMycpLmNsYXNzTGlzdC5hZGQoJ3R1Ym1lbnVzZWxlY3RlZCcpO1xuXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lmcmFtZWNvbnQxJykuY2xhc3NMaXN0LmFkZCgnaWZyYW1lY29udGhpZGRlbicpO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpZnJhbWVjb250MicpLmNsYXNzTGlzdC5hZGQoJ2lmcmFtZWNvbnRoaWRkZW4nKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWZyYW1lY29udDMnKS5jbGFzc0xpc3QucmVtb3ZlKCdpZnJhbWVjb250aGlkZGVuJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHVidHJlZ2VyY2hhbmdlMSgpIHtcblx0dHVidHJlZ2VyID0gMTtcblx0dHViY2hhbmdlKCk7XG59XG5mdW5jdGlvbiB0dWJ0cmVnZXJjaGFuZ2UyKCkge1xuXHR0dWJ0cmVnZXIgPSAyO1xuXHR0dWJjaGFuZ2UoKTtcbn1cbmZ1bmN0aW9uIHR1YnRyZWdlcmNoYW5nZTMoKSB7XG5cdHR1YnRyZWdlciA9IDM7XG5cdHR1YmNoYW5nZSgpO1xufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHViMScpLm9uY2xpY2sgPSB0dWJ0cmVnZXJjaGFuZ2UxO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R1YjInKS5vbmNsaWNrID0gdHVidHJlZ2VyY2hhbmdlMjtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0dWIzJykub25jbGljayA9IHR1YnRyZWdlcmNoYW5nZTM7XG5cblxuXG5cbi8vIOOCteODs+ODl+ODq+ODgOOCpuODs+ODreODvOODiVxuZnVuY3Rpb24gZGwxKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRsMVwiKS5kb3dubG9hZCA9IFwidGVzdDEuc2IzXCJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkbDFcIikuaHJlZiA9IFwiLi9maWxlL3Rlc3QxLnNiM1wiO1xufVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RsMScpLm9uY2xpY2sgPSBkbDE7XG5cbi8vIGZ1bmN0aW9uIGRsMigpIHtcbi8vIFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkbDJcIikuZG93bmxvYWQgPSBcInRlc3QyLnNiM1wiXG4vLyBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGwyXCIpLmhyZWYgPSBcIi4vZmlsZS90ZXN0Mi5zYjNcIjtcbi8vIH1cbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkbDInKS5vbmNsaWNrID0gZGwyO1xuXG4vLyBmdW5jdGlvbiBkbDMoKSB7XG4vLyBcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGwzXCIpLmRvd25sb2FkID0gXCJ0ZXN0My5zYjNcIlxuLy8gXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRsM1wiKS5ocmVmID0gXCIuL2ZpbGUvdGVzdDMuc2IzXCI7XG4vLyB9XG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGwzJykub25jbGljayA9IGRsMztcblxuXG5cbi8vIOOCteODs+ODl+ODq+ihqOekuuWIh+OCiuabv+OBiFxuLy8gMVxuZnVuY3Rpb24gc2FtcGxlb3BlbjEoKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYW1wbGUtaW1nLWNhbnRhaW5hcjEnKS5jbGFzc0xpc3QucmVtb3ZlKCdzYW1wbGUtaGlkZGVuJyk7XG59XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2FtcGxlMScpLm9uY2xpY2sgPSBzYW1wbGVvcGVuMTtcbmZ1bmN0aW9uIHNhbXBsZWNsb3NlMSgpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhbXBsZS1pbWctY2FudGFpbmFyMScpLmNsYXNzTGlzdC5hZGQoJ3NhbXBsZS1oaWRkZW4nKTtcbn1cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYW1wbGUtY2xvc2UxJykub25jbGljayA9IHNhbXBsZWNsb3NlMTtcblxuLy8gMlxuZnVuY3Rpb24gc2FtcGxlb3BlbjIoKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYW1wbGUtaW1nLWNhbnRhaW5hcjInKS5jbGFzc0xpc3QucmVtb3ZlKCdzYW1wbGUtaGlkZGVuJyk7XG59XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2FtcGxlMicpLm9uY2xpY2sgPSBzYW1wbGVvcGVuMjtcblxuZnVuY3Rpb24gc2FtcGxlY2xvc2UyKCkge1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2FtcGxlLWltZy1jYW50YWluYXIyJykuY2xhc3NMaXN0LmFkZCgnc2FtcGxlLWhpZGRlbicpO1xufVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhbXBsZS1jbG9zZTInKS5vbmNsaWNrID0gc2FtcGxlY2xvc2UyO1xuXG4vLyAzXG5mdW5jdGlvbiBzYW1wbGVvcGVuMygpIHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhbXBsZS1pbWctY2FudGFpbmFyMycpLmNsYXNzTGlzdC5yZW1vdmUoJ3NhbXBsZS1oaWRkZW4nKTtcbn1cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYW1wbGUzJykub25jbGljayA9IHNhbXBsZW9wZW4zO1xuXG5mdW5jdGlvbiBzYW1wbGVjbG9zZTMoKSB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYW1wbGUtaW1nLWNhbnRhaW5hcjMnKS5jbGFzc0xpc3QuYWRkKCdzYW1wbGUtaGlkZGVuJyk7XG59XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2FtcGxlLWNsb3NlMycpLm9uY2xpY2sgPSBzYW1wbGVjbG9zZTM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9