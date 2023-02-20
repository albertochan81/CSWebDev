"use strict";

function changeColor() {
	let color = document.body.style.color;

	if (color == 'black') {
		document.body.style.color = 'grey';
	} 
    else if (color == 'grey'){
		document.body.style.color = 'brown';
	}
    else {
        document.body.style.color = 'black';
    }
}