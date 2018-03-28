let	myShopName = prompt("Название Вашего магазина?"),
		myBudget = +prompt("Ваш бюджет?"),
		time = 19;

let mainList = {
			shopName : myShopName,
			budget: myBudget,
			shopGoods: [],
			employers: {
				name1: "Иванов",
				name2: "Петров",
				name3: "Сидоров"
			},
			open: true
		};

// цикл for
for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !=="" && a.length < 50) {
		console.log("Все верно!");
		mainList.shopGoods[i] = a;
	} else if ((typeof(a)) !== 'string') {
		alert("Пожалуйста, заполните данные о типе товаров");
		i--;
		} else if ((typeof(a)) == null || a =="") {
			alert("Введите тип товаров! Для дальнейших операций поле не должно быть пустым!");
			i--;
			} else if (a.length > 50) {
				alert("Тип доваров не должен превышать 50 символов! Сократите вводимые данные.");
				i--;
			} else {
				alert("Что-то пошло не так! Попробуйте еще раз!))");
				i--;
				}	
};

// цикл while
/*let i = 0;
while ( i < 5) {
	let a = prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !=="" && a.length < 50) {
		console.log("Все верно!");
		mainList.shopGoods[i] = a;
		i++;
	} else if ((typeof(a)) !== 'string') {
		alert("Пожалуйста, заполните данные о типе товаров");
		} else if ((typeof(a)) == null || a =="") {
			alert("Введите тип товаров! Для дальнейших операций поле не должно быть пустым!");
			} else if (a.length > 50) {
				alert("Тип доваров не должен превышать 50 символов! Сократите вводимые данные.");
			} else {
				alert("Что-то пошло не так! Попробуйте еще раз!))");
				}	
};*/


//цикл do-while
/*let i = 0;
do {
	let a = prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
	if ((typeof(a)) === 'string' && (typeof(a)) !== null && a !=="" && a.length < 50) {
		console.log("Все верно!");
		mainList.shopGoods[i] = a;
		i++;
	} else if ((typeof(a)) !== 'string') {
		alert("Пожалуйста, заполните данные о типе товаров");
		} else if ((typeof(a)) == null || a =="") {
			alert("Введите тип товаров! Для дальнейших операций поле не должно быть пустым!");
			} else if (a.length > 50) {
				alert("Тип доваров не должен превышать 50 символов! Сократите вводимые данные.");
			} else {
				alert("Что-то пошло не так! Попробуйте еще раз!))");
				}	
}
while ( i < 5);*/

if (time < 0) {
	console.log("Такого просто не может быть!");
	} else if(time > 8 && time < 20) {
		console.log("Время работать!")
		} else if (time < 24 ){
			console.log("Уже слишком поздно!");
			} else {
				console.log("В сутках только 24 часа!");
};

console.log(mainList);

alert("Уважаемый владелец магазина " + mainList.shopName + 
	"!\nВаш бюджет на 1 день составит: " + mainList.budget/30 + " у.е.");

