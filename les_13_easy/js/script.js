window.addEventListener('DOMContentLoaded', function(){
	let tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];


//скрываем все табы, кроме первого. классы hide и show заданы в css
	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	//показываем табы
	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			//на всякий пожарный скрываем все табы=))
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	//используем делегирование событий - назначаем на каждую вкладку событие клика
	info.addEventListener('click', function(event) {

		let target = event.target;
		if(target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}

			}
		}
	});

	// настройка таймера
  

	let deadline = '2018-04-25';
 	let ttt = Date.parse(new Date()) - Date.parse(deadline);
  
  
  //сколько времени до дедлайна?
			function getTimeRemaining(endtime) {
				let t = Date.parse(endtime) - Date.parse(new Date()),
						//округляем полученную разницу, переводим из мс в с 
						//и берем остаток от деления на 60 (ибо нас интересуют только секунды)
						seconds = Math.floor((t/1000) % 60),
						minutes = Math.floor((t/1000/60) % 60),
						hours = Math.floor((t/(1000*60*60)) % 24-3), // -3, ибо мы в зоне UTC+3:00
						days = Math.floor(t/(1000*60*60*24)),
						// total - общее количество милисекунд
						res = {
							'total': t,
							'days': days,
							'hours': hours,
							'minutes': minutes,
							'seconds': seconds
							};

						if (res.hours < 10) {
							res.hours = '0' + res.hours;
						}
						if (res.minutes < 10) {
							res.minutes = '0' + res.minutes;
						}
						if (res.seconds < 10) {
							res.seconds = '0' + res.seconds;
						}
						return res;
										
			}

			



			//запуск наших часов:
			function setClock (id, endTime) {
				let timer = document.getElementById(id),
						hours = timer.querySelector('.hours'),
						minutes = timer.querySelector('.minutes'),
						spanDays = document.createElement('span'),
						seconds = timer.querySelector('.seconds');

			spanDays.classList.add('days');
			hours.parentNode.insertBefore(spanDays, hours);

						//обновление таймера ежесекундно
						function updateClock () {
							let t = getTimeRemaining(endTime);
							//вставляем в объекты html значения свойств объекта, полученного из ф-ции getTimeRemaining
							spanDays.innerHTML = t.days + 'д. ';
							hours.innerHTML = t.hours;
							minutes.innerHTML = t.minutes;
							seconds.innerHTML = t.seconds;


							//условие остановки таймера
							if (t.total <= 0) {
								clearTimeout(timeInterval);
							}
						}

						updateClock ();
						let timeInterval = setInterval(updateClock, 1000);
			}
  
  
  //если время вышло...
	if (ttt>0) {
			myTimeOut();
		} else {
			setClock ('timer', deadline);
		}
				

	function myTimeOut(){
		let timer = document.getElementById('timer'),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds'),
				text = document.getElementsByClassName('timer-action')[0];

		hours.textContent = '00';
		minutes.textContent = '00';
		seconds.textContent = '00';
		text.textContent = 'К сожалению, акция уже закончилась.';

	}

	//плавная прокрутка к ссылке-якорю

	//получаем наши ссылки: (можно еще так получить: document.querySelectorAll('[href^="#"]'))
	let linkNav = document.getElementsByClassName('menu-link'),
			//fixed_offset = 60, //величина открутки назад
	   	speed = 0.5,  // скорость прокрутки
	   	navPanel = document.querySelector('nav');

	navPanel.addEventListener('click', function (e) {
		if (e.target && e.target.matches('a.menu-link')){
			e.preventDefault(); //отменяем стандартное поведение
			let topScroll = window.pageYOffset,  // получаем позицию текущей прокрутки сверху
			    hash = e.target.href.replace(/[^#]*(.*)/, '$1'),  // к id элемента, к которому нужно перейти
					topLink = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
			    start = null;

			requestAnimationFrame(step);  //функция анимации

			function step(time) {
			    if (start === null) {
			    	start = time;
			    }

			    let progress = time - start,
			        result = (topLink < 0 ? Math.max(topScroll - progress/speed, topScroll + topLink) : Math.min(topScroll + progress/speed, topScroll + topLink));

			    window.scrollTo(0,result);

			    if (result != topScroll + topLink) {
			        requestAnimationFrame(step);
			    } else {
			        location.hash = hash;  // URL с хэшем
			    }
			}
		}
	});

	//модальное окно

	let more = document.querySelector('.more'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close'),
			statusDiv = document.querySelector('.status');

	more.addEventListener('click', function () {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		//отсутствие скролла при открытом модальном окне.
		document.body.style.overflow = "hidden";

	});

	//закрытие модального окна с формой смотри ниже после обработки отправки запроса
  
  
	//вызов модального окна из табов с помощью делегирования событий
		let infoWrap = document.querySelector('.info');
			infoWrap.addEventListener('click', function (event) {
			if (event.target && event.target.matches('div.description-btn')){
				overlay.style.display = 'block';
				document.body.style.overflow = "hidden";
			}
		});



	// создание сообщение-оповещение
	let message = new Object ();
	message.loading = "width: 368px; height: 46px; background: transparent url(./img/ajax-loader.gif) center no-repeat; margin-top: 15px";
	message.sucsess = "width: 368px; height: 46px; background: transparent url(./img/thx-image.png) center no-repeat; -webkit-background-size: 100%; background-size: 100% ; margin-top: 15px";
	message.failure = "Что-то пошло не так...";

	// формы для отправки данных
	let form = document.getElementsByClassName('main-form')[0], //модальное окно
			input = form.getElementsByTagName('input'), //инпуты внутри модального окна
			contactForm = document.getElementsByClassName('contact-form')[0], // форма на странице
			contactFormInput = contactForm.getElementsByTagName('input'),//инпуты внутри формы на странице
			statusMessage = document.createElement('div'); //сообщение о статусе

	statusMessage.classList.add('status');
	statusMessage.style.marginTop = '15px';

	//функция отправки формы через Ajax
	function AJAX (input){
		//AJAX
		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');

				//работа с html-заголовками. можно передать кодировку.
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				// передаем данные из инпутов
		let formData = new FormData(form);
				// отправка данных на сервер
		request.send(formData);

				//отслеживаем статус нашего запроса
		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.style.cssText = message.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.style.cssText = message.sucsess;
					//любые дейтвие или добавление контента на свой вкус=)
				} else {
					statusMessage.innerHTML = message.failure;
				}

			}
		}

				//очистка всех инпутов после отправки формы
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	};

	// подключаем скрипт отправки к модальному окну.

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);
		AJAX(input);
	});
	
	// подключаем скрипт отправки к контактой форме.
	contactForm.addEventListener('submit', function(event) {
		event.preventDefault();
		contactForm.appendChild(statusMessage);
		AJAX(contactFormInput);
	});


	//закрытие модального окна с формой + удаление див-статуса
	
	close.addEventListener('click', function () {
		let statusDiv =  form.getElementsByClassName('status')[0];

		more.classList.remove('more-splash');
		overlay.style.display = 'none';
		document.body.style.overflow = "";
		if (statusDiv !== undefined){
			form.removeChild(statusMessage);
		} else {
			console.log("произошла отмена заявки");
		}
	});

	//удаление див-статуса при изменении инпутов в форме на странице через делигирование

	contactForm.addEventListener('change', function(event) {
		if (event.target && event.target.matches('input')){
			let statusDiv =  contactForm.getElementsByClassName('status')[0];
				if (statusDiv !== undefined){
					contactForm.removeChild(statusMessage);
				}
			}
	});
	

	//слайдер
	let slideIndex = 1, //наш текущий слайд
			slides = document.getElementsByClassName('slider-item'), //наши слайды
			prev = document.querySelector('.prev'), //кнопка назад
			next = document.querySelector('.next'), //кнопка вперед
			dotsWrap = document.querySelector('.slider-dots'), //блок с точками-дотсами
			dot = document.getElementsByClassName('dot'); //сами дотсы

	//функция показа слайда. Изначально показывается 1 слайд
	showSlides(slideIndex);

	function showSlides(nom) {
		//контролируем и управляем количеством слайдов на странице
		if (nom > slides.length) { //если мы жмем вперед на последнем кадре
			slideIndex = 1;
		}

		if (nom < 1) { //если мы жмем назад на 1 кадре
			slideIndex = slides.length;
		}

		for ( let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none'; //скрываем все слайды
		}

		for ( let i = 0; i < dot.length; i++) {
			dot[i].classList.remove('dot-active'); //убираем класс активного дотса
		}

		//обработка активного слайда ( показываем и добавляем активный класс дотсу)
		slides[slideIndex-1].style.display = 'block';
		dot[slideIndex-1].classList.add('dot-active');
	}

	//функция добавления/отнимания кол-ва слайдов
	function plusSliders(nom) {
		showSlides(slideIndex += nom);
	}

	//функция показа текущего слайда
	function currentSlide(nom) {
		showSlides(slideIndex = nom);
	}

	//нажатие на кноку "назад"
	prev.addEventListener('click', function(){
		plusSliders(-1);
	});

	//нажатие на кноку "вперед"
	next.addEventListener('click', function(){
		plusSliders(1);
	});

	// при клике по дотсам переходим на нужный слайд
	dotsWrap.addEventListener('click', function(event) {
		for (let i = 0; i < dot.length + 1; i++) {
			if (event.target.matches('div.dot') && event.target == dot[i-1]) {
				currentSlide(i);
			}
		}
	});

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
		if ((isItNumber(this.value) === false)||(this.value =='')|| (+this.value == 0)) {
			alert ('Пожалуйста, вводите только положительные целые числа!');
			persons.value = '';
		} else if ((this.value[0] == 0) && (+this.value != 0)) {
			this.value = +this.value;
		} else if ((isItNumber(this.value) === true)&&(persons.value != '')){
			personsSum = +this.value;
			console.log("все ок))))");
			total = daysSum * personsSum * 4000;
			if (persons.value == '') {
			totalValue.innerHTML = 0;
			} else {
				totalValue.innerHTML = total;
			}
		}
	});

	persons.addEventListener('change', function(){
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
			}
		}
	});

	restDays.addEventListener('change', function(){
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
			}
		}
	});


	place.addEventListener('change', function(){
		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
		} else {
			let temp = 	total;
			totalValue.innerHTML = temp * this.options[this.selectedIndex].value;
		}
	});







});

