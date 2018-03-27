let num = 1,
		degree,
		calc = 1;

num = +prompt("Введите число,над которым будем проводить операции:","");
while (num > 0) {
	if (num >= 10) {
		calc = calc*(num%10);
		num = (num-num%10)/10;
	} else {
		calc = calc*num;
		num = 0;
	};
};

degree = Math.pow(calc,3);

alert("Произведение цифр Вашего числа равно: " + calc + 
			"\nПроизведение, возведенное в 3ю степень равно: " + degree);

