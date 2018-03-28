// задание про дни недели:

let week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресение"];

alert("сегодня " + week[2]);

//любопытно, почему не сработало?
/*var newP = document.createElement('p');
newP.style.fontWeight = "bold";
newP.innerHTML = "123";*/

for (let i = 0; i < 7; i++ ) {
	if (i == 2) {
		document.write("<font style='font-style:italic'>" + week[i] + "</font><br>");
	} else if (i > 4) {
		document.write("<font style='font-weight:bold'>" + week[i] + "</font><br>");
	} else {
		document.write(week[i] + "<br>");
	}	
}

// задание про массив чисел:
let arr = [];
for (let i = 0; i < 7; i++ ) {
	let data = prompt(i+1 + ") Введите многозначное число: ");
	arr[i] = data;
};

for (let i = 0; i < 7; i++ ) {
	let firstNum = arr[i][0];

	if (firstNum ==='3') {
		console.log("Это число начинается с цифры 3: " + arr[i]);
	} else if (firstNum === '7') {
		console.log("Это число начинается с цифры 7: " + arr[i]);
	  }
	};









