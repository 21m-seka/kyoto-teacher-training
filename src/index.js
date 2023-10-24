
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
function reload5() {
	document.getElementById('asdfg').src += '';
}

document.getElementById('reload1').onclick = reload1;
document.getElementById('reload2').onclick = reload2;
document.getElementById('reload3').onclick = reload3;
document.getElementById('reload4').onclick = reload4;
document.getElementById('reload5').onclick = reload5;




// タブメニュー切り替え
function tubchange() {
	if (tubtreger == 1) {
		document.getElementById('tub1').classList.add('tubmenuselected');
		document.getElementById('tub2').classList.remove('tubmenuselected');
		document.getElementById('tub3').classList.remove('tubmenuselected');
		document.getElementById('tub4').classList.remove('tubmenuselected');
		document.getElementById('tub5').classList.remove('tubmenuselected');

		document.getElementById('iframecont1').classList.remove('iframeconthidden');
		document.getElementById('iframecont2').classList.add('iframeconthidden');
		document.getElementById('iframecont3').classList.add('iframeconthidden');
		document.getElementById('iframecont4').classList.add('iframeconthidden');
		document.getElementById('iframecont5').classList.add('iframeconthidden');
	} else if (tubtreger == 2) {
		document.getElementById('tub1').classList.remove('tubmenuselected');
		document.getElementById('tub2').classList.add('tubmenuselected');
		document.getElementById('tub3').classList.remove('tubmenuselected');
		document.getElementById('tub4').classList.remove('tubmenuselected');
		document.getElementById('tub5').classList.remove('tubmenuselected');

		document.getElementById('iframecont1').classList.add('iframeconthidden');
		document.getElementById('iframecont2').classList.remove('iframeconthidden');
		document.getElementById('iframecont3').classList.add('iframeconthidden');
		document.getElementById('iframecont4').classList.add('iframeconthidden');
		document.getElementById('iframecont5').classList.add('iframeconthidden');
	} else if (tubtreger == 3) {
		document.getElementById('tub1').classList.remove('tubmenuselected');
		document.getElementById('tub2').classList.remove('tubmenuselected');
		document.getElementById('tub3').classList.add('tubmenuselected');
		document.getElementById('tub4').classList.remove('tubmenuselected');
		document.getElementById('tub5').classList.remove('tubmenuselected');

		document.getElementById('iframecont1').classList.add('iframeconthidden');
		document.getElementById('iframecont2').classList.add('iframeconthidden');
		document.getElementById('iframecont3').classList.remove('iframeconthidden');
		document.getElementById('iframecont4').classList.add('iframeconthidden');
		document.getElementById('iframecont5').classList.add('iframeconthidden');
	}
	else if (tubtreger == 4) {
		document.getElementById('tub1').classList.remove('tubmenuselected');
		document.getElementById('tub2').classList.remove('tubmenuselected');
		document.getElementById('tub3').classList.remove('tubmenuselected');
		document.getElementById('tub4').classList.add('tubmenuselected');
		document.getElementById('tub5').classList.remove('tubmenuselected');

		document.getElementById('iframecont1').classList.add('iframeconthidden');
		document.getElementById('iframecont2').classList.add('iframeconthidden');
		document.getElementById('iframecont3').classList.add('iframeconthidden');
		document.getElementById('iframecont4').classList.remove('iframeconthidden');
		document.getElementById('iframecont5').classList.add('iframeconthidden');
	} else if (tubtreger == 5) {
		document.getElementById('tub1').classList.remove('tubmenuselected');
		document.getElementById('tub2').classList.remove('tubmenuselected');
		document.getElementById('tub3').classList.remove('tubmenuselected');
		document.getElementById('tub4').classList.remove('tubmenuselected');
		document.getElementById('tub5').classList.add('tubmenuselected');

		document.getElementById('iframecont1').classList.add('iframeconthidden');
		document.getElementById('iframecont2').classList.add('iframeconthidden');
		document.getElementById('iframecont3').classList.add('iframeconthidden');
		document.getElementById('iframecont4').classList.add('iframeconthidden');
		document.getElementById('iframecont5').classList.remove('iframeconthidden');
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
function tubtregerchange5() {
	tubtreger = 5;
	tubchange();
}

document.getElementById('tub1').onclick = tubtregerchange1;
document.getElementById('tub2').onclick = tubtregerchange2;
document.getElementById('tub3').onclick = tubtregerchange3;
document.getElementById('tub4').onclick = tubtregerchange4;
document.getElementById('tub5').onclick = tubtregerchange5;




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

// function dl5() {
// 	document.getElementById("dl5").download = "test5.sb3"
// 	document.getElementById("dl5").href = "./file/test5.sb3";
// }
// document.getElementById('dl5').onclick = dl5;


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

// 5
function sampleopen5() {
	document.getElementById('sample-img-cantainar5').classList.remove('sample-hidden');
}
document.getElementById('sample5').onclick = sampleopen5;

function sampleclose5() {
	document.getElementById('sample-img-cantainar5').classList.add('sample-hidden');
}
document.getElementById('sample-close5').onclick = sampleclose5;