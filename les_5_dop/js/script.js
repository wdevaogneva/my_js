let arr = [],
		sumAll = 0;


function includeArrays () {
		let number = +prompt("Сколько массивов Вы хотите включить внутрь?",'');
		for (let i = 0; i < number; i++) {
			arr[i] = [];
			let randomArray = [];
			let sum = 0;
			for (let j = 0; j < 5; j++) {
				let randomNumber = Math.floor(Math.random() * 101);
				sum += randomNumber;
				randomArray.push(randomNumber);
			}
			sumAll +=sum;
			console.log(randomArray);
			arr[i].push(randomArray);
		}
		console.log(arr);
		alert("сумма чисел всего массива arr = " + sumAll);
};

includeArrays ();