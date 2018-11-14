ImageSwitch = new Array();

for (i = 0; i < 6; i++){
	ImageSwitch[i] = 'image_' + i + '.png';
}

randnum = Math.round(Math.random() * 5)
randimg = "background-image: url('images/image_" + randnum + ".png');";

function swapImage(){
	var menu = document.getElementById("backgroundImg");
	menu.setAttribute("style", randimg)
}

window.addEventListener('load', swapImage);