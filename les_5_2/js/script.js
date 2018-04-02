//Получить кнопку "Открыть магазин" через id
let mainBtn = document.getElementById("open-btn");
console.log("это главная кнопка: ");
console.log(mainBtn);


//Получить все поля в левом меню через классы
let name = document.getElementsByClassName("name")[0],
		nameValue = document.getElementsByClassName("name-value")[0],
		budget = document.getElementsByClassName("budget")[0],
		budgetValue = document.getElementsByClassName("budget-value")[0],
		goods = document.getElementsByClassName("goods")[0],
		goodsValue = document.getElementsByClassName("goods-value")[0],
		items = document.getElementsByClassName("items")[0],
		itemsValue = document.getElementsByClassName("items-value")[0],
		employers = document.getElementsByClassName("employers")[0],
		employersValue = document.getElementsByClassName("employers-value")[0],
		discount = document.getElementsByClassName("discount")[0],
		discountValue = document.getElementsByClassName("discount-value")[0],
		isOpen = document.getElementsByClassName("isopen")[0],
		isOpenValue = document.getElementsByClassName("isopen-value")[0];

console.log("это все поля в левом меню: ");
console.log(name);
console.log(nameValue);
console.log(budget);
console.log(budgetValue);
console.log(goods);
console.log(goodsValue);
console.log(items);
console.log(itemsValue);
console.log(employers);
console.log(employersValue);
console.log(discount);
console.log(discountValue);
console.log(isOpen);
console.log(isOpenValue);

//Получить поля категории товаров через класс
let goodsItems = document.getElementsByClassName("goods-item");
console.log("это все поля категории товаров: ");
console.log(goodsItems);


//Получить все 3 кнопки через Tag
let buttons = document.getElementsByTagName("button"),
		goodsItemBtn = buttons[1],
		countBudgetBtn = buttons[2],
		hireEmployersBtn = buttons[3];

console.log("это все 3 кнопки через Tag: ");

console.log(goodsItemBtn);
console.log(countBudgetBtn);
console.log(hireEmployersBtn);

//Получить поля ввода товаров, времени и расчета бюджета через querySelector
let chooseItem = document.querySelector(".choose-item"),
		timeValue = document.querySelector(".time-value"),
		countBudgetValue = document.querySelector(".count-budget-value");

console.log("это поле ввода товаров: ");
console.log(chooseItem);
console.log("это поле ввода времени: ");
console.log(timeValue);
console.log("это поле расчета бюджета: ");
console.log(countBudgetValue);

//Получить поля имен сотрудников через querySelectorAll
let hireEmployersItem = document.querySelectorAll(".hire-employers-item");
console.log("это поля имен сотрудников: ");
console.log(hireEmployersItem);