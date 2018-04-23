function calc() {
	//калькулятор
	let persons = document.getElementsByClassName('counter-block-input')[0], //количество людей
			restDays = document.getElementsByClassName('counter-block-input')[1], //количество дней
			place = document.getElementById('select'), //место отдыха
			totalValue = document.getElementById('total'), //итоговая сумма
			personsSum = 0, //считаем людей
			daysSum = 0, //считаем дни
			total = 0; //считаем итоговую стоимость

	totalValue.innerHTML = 0; //обнуляем сумму на сайте
	persons.value = ''; //обнуляем кол-во на сайте
	restDays.value= ''; //обнуляем сумму на сайте
	persons.setAttribute('type', 'text'); //немного костылей и шаманства, дабы не было странных странностей)))
	restDays.setAttribute('type', 'text');


	//состоит ли введенное только из цифр от 0 до 9?
	function isItNumber(number) {
		let t = 1;
		if (number == '') {
			t=t*0; 
		} else {
			for (let i = 0; i < number.length; i++) {
				if (/^[0-9]/.test(number[i])) { 
						t = t*1;
				} else { 
					t=t*0;
				}
			} 
		}
		if (t == 0) { 
				console.log("это не число!"); 
				return false;
			} else { 
				console.log("это число!"); 
				return true;
			};
	};


	persons.addEventListener('change', function(){
		totalValue.classList.remove('total-jump');
		if ((isItNumber(this.value) === false)||(this.value =='')|| (+this.value == 0)) {
			
			alert ('Пожалуйста, вводите только положительные целые числа!');
			persons.value = '';
			totalValue.innerHTML = 0;
		} else if ((isItNumber(this.value) === true)&&(persons.value != '')){
			if ((this.value[0] == 0) && (+this.value != 0)) {
			this.value = +this.value;
			};
			personsSum = +this.value;
			console.log("все ок))))");
			total = daysSum * personsSum * 4000;
			if (persons.value == '') {
			totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
				totalValue.classList.add('total-jump');
			}
		}
		
	});

	restDays.addEventListener('change', function(){
		totalValue.classList.remove('total-jump');
		if ((isItNumber(this.value) === false)||(this.value =='')|| (+this.value == 0)) {
			alert ('Пожалуйста, вводите только положительные целые числа!');
			restDays.value = ''; 
			totalValue.innerHTML = 0;
		} else if ((isItNumber(this.value) === true)&&(restDays.value != '')){
			if ((this.value[0] == 0) && (+this.value != 0)) {
			this.value = +this.value;
			};
			daysSum = +this.value;
			console.log("все ок))))");
			total = daysSum * personsSum * 4000;
			if (restDays.value == '') {
			totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
				totalValue.classList.add('total-jump');
			}
		}
	});



	place.addEventListener('change', function(){
		totalValue.classList.remove('total-jump');
		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
		} else {
			let temp = 	total;
			totalValue.innerHTML = temp * this.options[this.selectedIndex].value;
			totalValue.classList.add('total-jump');
		}
	});
}

module.exports = calc;