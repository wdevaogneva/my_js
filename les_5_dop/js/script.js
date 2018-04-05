let mainBtn = document.getElementById("open-btn"),
		nameValue = document.getElementsByClassName("name-value")[0],
		budgetValue = document.getElementsByClassName("budget-value")[0],
		goodsValue = document.getElementsByClassName("goods-value")[0],
		itemsValue = document.getElementsByClassName("items-value")[0],
		employersValue = document.getElementsByClassName("employers-value")[0],
		discountValue = document.getElementsByClassName("discount-value")[0],
		isOpenValue = document.getElementsByClassName("isopen-value")[0],

		labelName = document.getElementsByClassName("name")[0],
		labelBudget = document.getElementsByClassName("budget")[0],
		labelGoods = document.getElementsByClassName("goods")[0],
		labelItems = document.getElementsByClassName("items")[0],
		labelEmployers = document.getElementsByClassName("employers")[0],
		labelDiscount = document.getElementsByClassName("discount")[0],
		labelIsOpen = document.getElementsByClassName("isopen")[0],

		goodsItem = document.getElementsByClassName("goods-item"),
		goodsItemBtn = document.getElementsByTagName("button")[2],
		countBudgetBtn = document.getElementsByTagName("button")[3],
		hireEmployersBtn = document.getElementsByTagName("button")[4],
		chooseItem = document.querySelector(".choose-item"),
		timeValue = document.querySelector(".time-value"),
		countBudgetValue = document.querySelector(".count-budget-value"),
		hireEmployersItem = document.querySelectorAll(".hire-employers-item"),
		
		dayNightBtn = document.getElementsByClassName("daytime-btn")[0],
		daytime = document.querySelector(".daytime"),
		mainInfo = document.querySelector(".main-info"),
		mainFunctions = document.querySelector(".main-functions"),
		openImg = document.querySelector(".open"),

		yesCheck = document.getElementById('yes'),
		noCheck = document.getElementById('no'),
		temp = '';




let	myBudget,
		price;

// событие клика по кнопке "открыть магазин"
mainBtn.addEventListener('click', () => {
	
	myBudget = prompt("Ваш бюджет?",'');
	while (isNaN(myBudget) || myBudget == "" || myBudget == null) {
		myBudget = prompt("Ваш бюджет?",'');
	};
	budgetValue.textContent = myBudget + " у.е.";
	nameValue.textContent = prompt("Название Вашего магазина?",'').toUpperCase();
	
	labelName.style.display = 'block';
	nameValue.style.display = 'block';
	labelBudget.style.display = 'block';
	budgetValue.style.display = 'block';
	labelDiscount.style.display = 'block';
	discountValue.style.display = 'block';
	labelIsOpen.style.display = 'block';
	isOpenValue.style.display = 'block';
	
});


function start (){
	myBudget = prompt("Ваш бюджет?",'');
	while (isNaN(myBudget) || myBudget == "" || myBudget == null) {
		myBudget = prompt("Ваш бюджет?",'');
	};
	budgetValue.textContent = myBudget;
	nameValue.textContent = prompt("Название Вашего магазина?",'').toUpperCase();
};


// событие клика по кнопке "утвердить"
goodsItemBtn.addEventListener('click', () => {
	for (let i = 0; i < goodsItem.length; i++) {
		let a = goodsItem[i].value;
		if ((typeof(a)) === 'string' && (typeof(a)) !== null && a.length < 50) {
			console.log("Все верно!");
			mainList.shopGoods[i] = " " + a;
			goodsValue.textContent = mainList.shopGoods;
			labelGoods.style.display = 'block';
			goodsValue.style.display = 'block';
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
		mainList.shopItems = items.split(", ");
		itemsValue.textContent = mySortNames(mainList.shopItems);
		labelItems.style.display = 'block';
		itemsValue.style.display = 'block';
	} 
});

//событие изменения данных в поле "время"
timeValue.addEventListener('change', () => {
	labelIsOpen.style.display = 'block';
	isOpenValue.style.display = 'block';
	let time = timeValue.value;
	if (time < 0) {
		console.log("Такого просто не может быть!");
		mainList.open = false;
		} else if((time > 8 && time < 20) && (daytime.classList.contains("daytime_night"))) {
			console.log("Днем отсыпаемся!");
			mainList.open = false;
			} else if(time > 8 && time < 20) {
				console.log("Время работать!");
				mainList.open = true;
				} else if ((time < 24 ) && (daytime.classList.contains("daytime_night"))){
					console.log("Пора выходить на работу!");
					mainList.open = true;
					} else if (time < 24 ){
						console.log("Уже слишком поздно!");
						mainList.open = false;
						} else {
							console.log("В сутках только 24 часа!");
							mainList.open = false;
	};
	if (mainList.open === true) {
		isOpenValue.style.color = 'green';
		isOpenValue.textContent = 'открыт';
	} else {
		isOpenValue.style.color = 'red';
		isOpenValue.textContent = 'закрыт';
	};
});

//событие по клику на кнопку "рассчитать"
countBudgetBtn.addEventListener('click',() => {
	countBudgetValue.value = myBudget/30  + " у.е.";
});

//событие по клику на кнопку "нанять"
hireEmployersBtn.addEventListener('click',() => {
	temp = '';
	for (let i = 0; i < hireEmployersItem.length; i++ ){
		let name = hireEmployersItem[i].value;
		mainList.employers[i] = name;
		temp += mainList.employers[i] + ", ";
	}
	employersValue.textContent = temp.substr(0, temp.length-2);
	labelEmployers.style.display = 'block';
	employersValue.style.display = 'block';
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
		newArr.push(" " + list[e.index]);
		return newArr;
	});
	return newArr;
};

// дисконтная система:

noCheck.addEventListener('change', () => {
				mainList.discount = false;
				labelDiscount.style.display = 'block';
				discountValue.style.display = 'block';
				discountValue.style.color = '#000';
				discountValue.textContent = "нет";
});

yesCheck.addEventListener('change', () => {
				labelDiscount.style.display = 'block';
				discountValue.style.display = 'block';
				mainList.discount = true;
				discountValue.style.color = 'green';
				discountValue.textContent = "20 %";
});
function	reset(){
	labelGoods.style.display = 'none';
	goodsValue.style.display = 'none';
	goodsValue.value = '';
	labelDiscount.style.display = 'none';
	discountValue.style.display = 'none';
	discountValue.value = '';
	discountValue.style.color = '#000';
	discountValue.textContent = "нет";
	labelEmployers.style.display = 'none';
	employersValue.style.display = 'none';
	employersValue.value = '';
	labelItems.style.display = 'none';
	itemsValue.style.display = 'none';
	itemsValue.value = '';
	labelIsOpen.style.display = 'none';
	isOpenValue.style.display = 'none';
	isOpenValue.value = '';
	isOpenValue.style.color = '#000';
	isOpenValue.textContent = 'закрыт';
	labelName.style.display = 'none';
	nameValue.style.display = 'none';
	nameValue.value = '';
	labelBudget.style.display = 'none';
	budgetValue.style.display = 'none';
	budgetValue.value = '';
	for (let i = 0; i < goodsItem.length; i++) {
		goodsItem[i].value = '';
	}
	chooseItem.value = '';
	timeValue.value = '';
	countBudgetValue.value = '';
	for (let i = 0; i < hireEmployersItem.length; i++ ){
		hireEmployersItem[i].value = '';
	}


}


// событие клика по кнопке "хочу работать ночью!"
dayNightBtn.addEventListener('click', () => {
	reset();
	let target = event.target;
	if (target.classList.contains('night')) {
		target.classList.remove('night');
		dayNightBtn.textContent = 'хочу работать ночью!';
		console.log("день!!!");
		document.body.style.backgroundImage = 'url(./img/day/bg.jpg)';
		daytime.classList.remove("daytime_night");
		mainInfo.classList.remove("main-info_night");
		mainFunctions.classList.remove("main-functions_night");
		openImg.classList.remove("open_night");
		goodsItemBtn.classList.remove("goods-item-btn_night");
		countBudgetBtn.classList.remove("count-budget-btn_night");
		hireEmployersBtn.classList.remove("hire-employers-btn_night");
		



	} else {
		reset();
		target.classList.add('night');
		console.log("ночь!!!");
		dayNightBtn.textContent = 'хочу работать днем!';
		document.body.style.backgroundImage = 'url(./img/night/bg.jpg)';
		daytime.classList.add("daytime_night");
		mainInfo.classList.add("main-info_night");
		mainFunctions.classList.add("main-functions_night");
		openImg.classList.add("open_night");
		goodsItemBtn.classList.add("goods-item-btn_night");
		countBudgetBtn.classList.add("count-budget-btn_night");
		hireEmployersBtn.classList.add("hire-employers-btn_night");



	};

});

