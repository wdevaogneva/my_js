let menuItem = document.getElementsByClassName("menu-item");

// восстанавливаем порядок в меню.
function replaceMenuItem(){
	let el_1 = menuItem[1],
			el_2 = menuItem[2],
			el_11 = el_1.cloneNode(true);
			el_22 = el_2.cloneNode(true);
	el_2.parentNode.insertBefore(el_11,el_2);
	el_1.parentNode.insertBefore(el_22,el_1);
	el_1.parentNode.removeChild(el_1);
	el_2.parentNode.removeChild(el_2);
}
replaceMenuItem();

//добавить в меню 5ый пункт
function addMenuItem() {
	let newLi = document.createElement('li');
	newLi.classList.add("menu-item");
	newLi.textContent = "Пятый пункт";
	menuItem[2].parentNode.appendChild(newLi);
} 

addMenuItem();

//Заменить картинку заднего фона на другую из папки img
document.body.style.backgroundImage = 'url(./img/apple_true.jpg)';
//один из вариантов:
/*let imgNew = document.getElementsByTagName("body");
imgNew[0].style.backgroundImage = 'url(./img/apple_true.jpg)';*/



//Поменять заголовок, добавить слово "подлинную"
let title = document.getElementById("title");
title.textContent = "Мы продаем только подлинную технику Apple"
//более замудренно:
/*let titleText = document.getElementById("title").textContent,
		text1 = titleText.substring(0,28),
		text2 = titleText.substring(28);
titleText = text1 + "подлинную " + text2;
document.getElementById("title").textContent = titleText; 
*/


//Удалить рекламу со страницы
let spam = document.getElementsByClassName("adv");
spam[0].parentNode.removeChild(spam[0]);


// Спросить у пользователя отношение к технике apple и записать ответ в поле "prompt"
let response  = prompt("Как Вы относитесь к технике apple?",""),
		responseFrame = document.getElementById("prompt");
responseFrame.textContent = response;