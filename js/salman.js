if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 400);

}

var x = 0;

//var titleText = ["FR", "FRE", "FREA", "FREAK", "FREAKI", "FREAKIS", "FREAKISH", "FREAKIS", "FREAKI", "FREAK", "FREA", "FRE", "FR", "F"];
var titleText = ["F-------", "FR------", "FRE-----", "FREA----", "FREAK---", "FREAKI--", "FREAKIS-", "FREAKISH", "-REAKISH", "--EAKISH", "---AKISH", "----KISH", "-----ISH", "------SH", "-------H", "--------"];

function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}

!function() {
	function detectDevTool(allow) {
  	if(isNaN(+allow)) allow = 100;
    var start = +new Date();
    //debugger;
    var end = +new Date();
    if(isNaN(start) || isNaN(end) || end - start > allow) {
    	location.replace("https://www.youtube.com/watch?v=YddwkMJG1Jo");
        debugger;location.replace("https://www.youtube.com/watch?v=YddwkMJG1Jo");
    }
  }
  if(window.attachEvent) {
  	if (document.readyState === "complete" || document.readyState === "interactive") {
    	detectDevTool();
      window.attachEvent('onresize', detectDevTool);
      window.attachEvent('onmousemove', detectDevTool);
      window.attachEvent('onfocus', detectDevTool);
      window.attachEvent('onblur', detectDevTool);
    } else {
    	setTimeout(argument.callee, 0);
    }
  } else {
  	window.addEventListener('load', detectDevTool);
    window.addEventListener('resize', detectDevTool);
    window.addEventListener('mousemove', detectDevTool);
    window.addEventListener('focus', detectDevTool);
    window.addEventListener('blur', detectDevTool);
  }
}();