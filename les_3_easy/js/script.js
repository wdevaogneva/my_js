let	myShopName,
		myBudget,
		time,
		price;

function start() {
	myBudget = prompt("Ваш бюджет?");
	while (isNaN(myBudget) || myBudget == "" || myBudget == null) {
		myBudget = prompt("Ваш бюджет?");
	};
	myShopName = prompt("Название Вашего магазина?").toUpperCase();
	time = 21;

};

start();

let mainList = {
			shopName : myShopName,
			budget: myBudget,
			shopGoods: [],
			employers: {},
			open: false,
			discount: false
		};


price = 1000;

function getDiscount(price, discount) {
	if (discount === true) {
		price = price*0.8;
		alert("ваша цена со скидкой = " + price + " у.е.");
	} else {
		alert("ваша цена без скидки = " + price + " у.е.");
	}
}

getDiscount(price, mainList.discount);


function getEmployers(arr){
	for (let i = 1; i < 5; i++ ){
		let name = prompt("Введите имя " + i + "го сотрудника: ");
		arr[i-1] = name;
	}
	console.log(arr);
}

getEmployers(mainList.employers);

function chooseGoods() {
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

};

chooseGoods();


function workTime(time) {
	if (time < 0) {
		console.log("Такого просто не может быть!");
		} else if(time > 8 && time < 20) {
			console.log("Время работать!")
			} else if (time < 24 ){
				console.log("Уже слишком поздно!");
				} else {
					console.log("В сутках только 24 часа!");
	};

};

workTime(18);



console.log(mainList);

alert("Уважаемый владелец магазина " + mainList.shopName + 
	"!\nВаш бюджет на 1 день составит: " + mainList.budget/30 + " у.е.");

