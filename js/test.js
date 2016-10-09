$(function () {
    window.onresize = resize;
    resize();
});

function resize() {
    var h = (window.innerHeight || (window.document.documentElement.clientHeight || window.document.body.clientHeight));
    var divHight = 20 + $("#div_left").height();//20=body padding:10px
    console.log("h: " + h);
    console.log("divHight: " + divHight);
    $("#content").css({ "min-height": h - divHight + "px" });
    $("#LeftPanel").css({ "height": h - divHight + "px" });
    console.log("height: " + (h - divHight));
}

var obj = document.getElementById('div_left');
obj.addEventListener('mousedown', initialiseResize, false);
var div_a = document.getElementById('div_A');

var startHeight, startY;

function initialiseResize(e) {
  startHeight = parseInt(document.defaultView.getComputedStyle(div_a).height, 10);
  startY = e.clientY;
	window.addEventListener('mousemove', startResizing, false);
  window.addEventListener('mouseup', stopResizing, false);
}

function startResizing(e) {
   //obj.style.height = (e.clientY - obj.offsetTop) + 'px';
   console.log("e.clientY: " + e.clientY);
   console.log("obj.offsetTop: " + obj.offsetTop);
   div_a.style.height = (startHeight + e.clientY - startY - 3) + "px";
}
function stopResizing(e) {
    window.removeEventListener('mousemove', startResizing, false);
    window.removeEventListener('mouseup', stopResizing, false);
}
