let str = "урок-3-был-слишком-легким",
		arr = [20, 33, 1, "Человек", 2, 3];

//строка начинается с большой буквы

str = str[0].toUpperCase() + str.substr( 1, str.length-1 );
//alert(str);


//замените все “-” на пробелы

//вариант без replace
/*for(let i = 0; i < str.length; i++) {
	if ( str[i] === "-") {
		str = str.substr(0, i) + " " + str.substr(i+1, str.length-i);
	};
}
alert(str);*/

//вариант с replace

str = str.replace(/-/g," ");
console.log(str);

//Из получившейся строки вырезать слово “легким”, заменить 2 последние буквы на “о”

let substrPos = str.indexOf("легким");
let str2 = str.substr( substrPos, 5 );
str2 = str2.replace("и","о");
document.write("<font style='font-size:72px'>" + str2 + "</font>");


// Вывести в консоль квадратный корень из суммы кубов элементов массива
let sum = 0;

for(let i = 0; i < 6; i++) {
	let number = +arr[i];
	if (!isNaN(number)) {
		sum += number**3;
	}
}

let result = Math.sqrt(sum);
console.log(result);






