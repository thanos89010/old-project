// button////////
var change_buttons = document.querySelectorAll(".productStileBoxTitle h3 ");

function changeButtons(num) {
	for (var i = 0; i < change_buttons.length; i++) {
		change_buttons[i].className = "";
	}
    change_buttons[num].className = "active";

}





