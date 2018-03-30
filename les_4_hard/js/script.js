let arr = [];


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
			console.log(randomArray);
			alert("сумма чисел" + (i+1) + "го массива в составе массива arr = " + sum);
			arr[i].push(randomArray);
		}
		console.log(arr);
};

includeArrays ();