// Random Image start
ImageSwitch = new Array();

for (i = 0; i < 6; i++){
	ImageSwitch[i] = 'image_' + i + '.png';
}

randnum = Math.round(Math.random() * 5)
randimg = "background-image: url('images/image_" + randnum + ".png');";

function swapImage(){
	let menu = document.getElementById("backgroundImg");
	menu.setAttribute("style", randimg)
}

window.addEventListener('load', swapImage);
// Random Image end

let titles = [];
let links = [];
// News json data parser start
let xhr = new XMLHttpRequest();
xhr.open("GET", "http://52.79.136.5:8000/search/news?query=한반도 평화", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    let resp = JSON.parse(xhr.responseText);
		let items = resp.items;

		for (i = 0; i < items.length; i++){
			if (items[i].link.includes("news.naver.com/main/read.nhn")){
				items[i].title = items[i].title.replace(/&quot;/g, '\"');
				titles.push(items[i].title);
				links.push(items[i].link);
			}
			if (titles.length >= 3){
				break;
			}
		}
		for (i = 0; i < titles.length; i++){
			var card = document.getElementById("card_" + i);
			card.setAttribute("href", links[i])
			card.textContent = titles[i];
		}
  }
}

xhr.send();
// News json data parser end


// 메타정보(Open Graph 사진)가져오는 로직
// // News json data parser start
// let xhr2 = new XMLHttpRequest();
//
// for (i = 0; i <= 3; i++){
// 	let url = links[i];
//
//   console.log("aaaa"+document.getElementById("card_img_" + i));
// 	xhr2.open("GET", "http://127.0.0.1:8000/og?query=" + url, true);
// 	console.log("@@: " + url);
// 	let image = "";
//
// 	xhr2.onreadystatechange = function() {
// 		if (xhr2.readyState == 4) {
//
// 			let resp = JSON.parse(xhr2.responseText);
// 			image = resp.image;
//
// 			var card_img = document.getElementById("card_img_" + i);
// 			card_img.setAttribute("src", image);
// 			card_img.alt = titles[i];
// 		}
// 	}
// }
// xhr2.send();

// News json data parser end
