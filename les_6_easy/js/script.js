let mainBtn = document.getElementById("open-btn"),
		nameValue = document.getElementsByClassName("name-value")[0],
		budgetValue = document.getElementsByClassName("budget-value")[0],
		goodsValue = document.getElementsByClassName("goods-value")[0],
		itemsValue = document.getElementsByClassName("items-value")[0],
		employersValue = document.getElementsByClassName("employers-value")[0],
		discountValue = document.getElementsByClassName("discount-value")[0],
		isOpenValue = document.getElementsByClassName("isopen-value")[0],

		goodsItem = document.getElementsByClassName("goods-item"),
		goodsItemBtn = document.getElementsByTagName("button")[1],
		countBudgetBtn = document.getElementsByTagName("button")[2],
		hireEmployersBtn = document.getElementsByTagName("button")[3],
		chooseItem = document.querySelector(".choose-item"),
		timeValue = document.querySelector(".time-value"),
		countBudgetValue = document.querySelector(".count-budget-value"),
		hireEmployersItem = document.querySelectorAll(".hire-employers-item"),
		temp = '';

let	myBudget,
		price;

// событие клика по кнопке "открыть магазин"
mainBtn.addEventListener('click', () => {
	myBudget = prompt("Ваш бюджет?",'');
	while (isNaN(myBudget) || myBudget == "" || myBudget == null) {
		myBudget = prompt("Ваш бюджет?",'');
	};
	budgetValue.textContent = myBudget;
	nameValue.textContent = prompt("Название Вашего магазина?",'').toUpperCase();
});

// событие клика по кнопке "утвердить"
goodsItemBtn.addEventListener('click', () => {
	for (let i = 0; i < goodsItem.length; i++) {
		let a = goodsItem[i].value;
		if ((typeof(a)) === 'string' && (typeof(a)) !== null && a.length < 50) {
			console.log("Все верно!");
			mainList.shopGoods[i] = a;
			goodsValue.textContent = mainList.shopGoods;
		} else if ((typeof(a)) !== 'string') {
			alert("Пожалуйста, заполните данные о типе товаров");
			i--;
			} else if ((typeof(a)) == null) {
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
});

//событие изменения данных в поле "продукты"
chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;
	if (isNaN(items) && items !=='') {
		mainList.shopItems = items.split(",");
		itemsValue.textContent = mySortNames(mainList.shopItems);
	} else {
		alert("Товары не должны содержать только цифры!");
	}
});

//событие изменения данных в поле "время"
timeValue.addEventListener('change', () => {
	let time = timeValue.value;
	if (time < 0) {
		console.log("Такого просто не может быть!");
		mainList.open = false;
		} else if(time > 8 && time < 20) {
			console.log("Время работать!");
			mainList.open = true;
			} else if (time < 24 ){
				console.log("Уже слишком поздно!");
				mainList.open = false;
				} else {
					console.log("В сутках только 24 часа!");
					mainList.open = false;
	};
	if (mainList.open === true) {
		isOpenValue.style.backgroundColor = 'green';
	} else {
		isOpenValue.style.backgroundColor = 'red';
	};
});

//событие по клику на кнопку "рассчитать"
countBudgetBtn.addEventListener('click',() => {
	countBudgetValue.value = myBudget/30;
});

//событие по клику на кнопку "нанять"
hireEmployersBtn.addEventListener('click',() => {
	for (let i = 0; i < hireEmployersItem.length; i++ ){
		let name = hireEmployersItem[i].value;
		mainList.employers[i] = name;
		temp += mainList.employers[i] + ", ";
	}
	employersValue.textContent = temp.substr(0, temp.length-2);
;
});



let mainList = {
			budget: myBudget,
			shopGoods: [],
			employers: {},
			open: false,
			discount: false,
			shopItems: [],
			makeDiscount: function makeDiscount() {
				if (mainList.discount === true) {
					price = price*0.8;
					alert("ваша цена со скидкой = " + price + " у.е.");
				} else {
					alert("ваша цена без скидки = " + price + " у.е.");
				}
			}
		};


//сортировка значений, введенных на русском и/или английском языке 
//с использованием разного регистра.

// можно ли тут что-то сократить????
function mySortNames(list) {
	let newArr = [];
	let map = list.map( function(e,i) {
		return { index : i, value : e.toLowerCase() };
	});

	map.sort(function(a,b){
		return +(a.value>b.value) || +(a.value === b.value)-1;
	});

	let result = map.map(function(e) {
		newArr.push(list[e.index]);
		return newArr;
	});
	return newArr;
};