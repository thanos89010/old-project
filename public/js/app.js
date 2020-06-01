// product slider////////

var t1 = document.getElementById("productTab1");
var t2 = document.getElementById("productTab2");
var t3 = document.getElementById("productTab3");
var t4 = document.getElementById("productTab4");
var t5 = document.getElementById("productTab5");

function showSmartphone(){
	t1.style.display = "flex";
	t2.style.display = "none";
	t3.style.display = "none";
	t4.style.display = "none";
	t5.style.display = "none";
}

function showOthers(){
	t1.style.display = "none";
	t2.style.display = "flex";
	t3.style.display = "none";
	t4.style.display = "none";
	t5.style.display = "none";
}

function showHigh(){
	t1.style.display = "none";
	t2.style.display = "none";
	t3.style.display = "flex";
	t4.style.display = "none";
	t5.style.display = "none";
}
function showNew(){
	t1.style.display = "none";
	t2.style.display = "none";
	t3.style.display = "none";
	t4.style.display = "flex";
	t5.style.display = "none";
}
function showDeChina(){
	t1.style.display = "none";
	t2.style.display = "none";
	t3.style.display = "none";
	t4.style.display = "none";
	t5.style.display = "flex";
}

showSmartphone();








