let	myShopName,
		myBudget,
		time,
		price;

function start() {
	myBudget = prompt("Ваш бюджет?",'');
	while (isNaN(myBudget) || myBudget == "" || myBudget == null) {
		myBudget = prompt("Ваш бюджет?",'');
	};
	myShopName = prompt("Название Вашего магазина?",'').toUpperCase();
	time = 21;

};

//start();

let mainList = {
			shopName : myShopName,
			budget: myBudget,
			shopGoods: [],
			employers: {},
			open: false,
			discount: false,
			shopItems: [],
			chooseGoods: function chooseGoods() {
				for (let i = 0; i < 5; i++) {
					let a = prompt("Какой тип товаров будем продавать?",'');
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
				}

			},
			workTime: function workTime(time) {
				if (time < 0) {
					console.log("Такого просто не может быть!");
					} else if(time > 8 && time < 20) {
						console.log("Время работать!");
						mainList.open = true;
						} else if (time < 24 ){
							console.log("Уже слишком поздно!");
							} else {
								console.log("В сутках только 24 часа!");
				}

			},
			dayBudget: function dayBudget() {
				alert("Уважаемый владелец магазина " + mainList.shopName + 
				"!\nВаш бюджет на 1 день составит: " + mainList.budget/30 + " у.е.");
			},
			makeDiscount: function makeDiscount() {
				if (mainList.discount === true) {
					price = price*0.8;
					alert("ваша цена со скидкой = " + price + " у.е.");
				} else {
					alert("ваша цена без скидки = " + price + " у.е.");
				}
			},
			hireEmployers: function hireEmployers(){
				for (let i = 1; i < 5; i++ ){
					let name = prompt("Введите имя " + i + "го сотрудника: ",'');
					mainList.employers[i-1] = name;
				}
				console.log(mainList.employers);
			},
			chooseShopItems: function chooseShopItems(){
				for (let i = 0; i < 1; i++) {
					let items = prompt("Перечислите через запятую Ваши товары",'');
					if ((typeof(items)) === 'string' && (typeof(items)) !== null && items !=="") {
						console.log("Все ок!");
						mainList.shopItems = items.split(",");
						mainList.shopItems.push(prompt("Подождите! Ещё ",""));
						mainList.shopItems.sort();

					} else if ((typeof(items)) !== 'string') {
						alert("Пожалуйста, перечислите через запятую Ваши товары");
						i--;
						} else if ((typeof(items)) == null || items =="") {
							alert("Введите Ваши товары! Для дальнейших операций поле не должно быть пустым!");
							i--;
							} else {
								alert("Что-то пошло не так! Попробуйте еще раз!))");
								i--;
								}	
				}
			}

		};


console.log(mainList);

mainList.chooseShopItems();

document.write("У нас вы можете купить: <br>");
mainList.shopItems.forEach(function (item, i, arr) {
	document.write( i+1 + ") " + item + "<br>");
})

console.log("Наш магазин включает в себя: <br>");
for (let key in mainList) {
	console.log(key + ": " + mainList[key]);
}



