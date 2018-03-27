let	myShopName = prompt("Название Вашего магазина?"),
		myBudget = +prompt("Ваш бюджет?"),
		mainList = {
			shopName : "",
			budget: 0,
			shopGoods: [],
			employers: {
				name1: "Иванов",
				name2: "Петров",
				name3: "Сидоров"
			},
			open: true
		};

//console.log(mainList);

mainList.shopName = myShopName;
mainList.budget = myBudget;

//console.log(mainList);

for (let i = 0; i < 3; i++) {
	mainList.shopGoods[i] = prompt("Какой тип товаров будем продавать?");
}

console.log(mainList);

alert("Уважаемый владелец магазина " + mainList.shopName + 
	"!\nВы собираетесь продавать: " + mainList.shopGoods[0] + ", " 
	+ mainList.shopGoods[1] + ", " + mainList.shopGoods[2] + 
	".\nВаш бюджет на 1 день составит: " + mainList.budget/30 + " у.е.");

