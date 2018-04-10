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
  

	let deadline = '2018-04-07';
 	let ttt = Date.parse(new Date()) - Date.parse(deadline);
  
  
  //сколько времени до дедлайна?
			function getTimeRemaining(endtime) {
				let t = Date.parse(endtime) - Date.parse(new Date()),
						//округляем полученную разницу, переводим из мс в с 
						//и берем остаток от деления на 60 (ибо нас интересуют только секунды)
						seconds = Math.floor((t/1000) % 60),
						minutes = Math.floor((t/1000/60) % 60),
						hours = Math.floor(t/(1000*60*60)),
						// total - общее количество милисекунд
						res = {
							'total': t,
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
						seconds = timer.querySelector('.seconds');

						//обновление таймера ежесекундно
						function updateClock () {
							let t = getTimeRemaining(endTime);
							//вставляем в объекты html значения свойств объекта, полученного из ф-ции getTimeRemaining
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
	   	speed = 0.5;  // скорость прокрутки

	for (let i = 0; i < linkNav.length; i++) {
	    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
	        e.preventDefault(); //отменяем стандартное поведение
	        let topScroll = window.pageYOffset,  // получаем позицию текущей прокрутки сверху
	            hash = this.href.replace(/[^#]*(.*)/, '$1'),  // к id элемента, к которому нужно перейти
	        		topLink = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
	            start = null;

	        requestAnimationFrame(step);  //функция анимации

	        function step(time) {
	            if (start === null) {
	            	start = time;
	            }

	            let progress = time - start,
	                r = (topLink < 0 ? Math.max(topScroll - progress/speed, topScroll + topLink) : Math.min(topScroll + progress/speed, topScroll + topLink));

	            window.scrollTo(0,r);

	            if (r != topScroll + topLink) {
	                requestAnimationFrame(step);
	            } else {
	                location.hash = hash;  // URL с хэшем
	            }
	        }
	    });
	}

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
	message.loading = "Загрузка...";
	message.sucsess = "Спасибо! Скоро мы с вами свяжемся";
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
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4) {
				if (request.status == 200 && request.status < 300) {
					statusMessage.innerHTML = message.sucsess;
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
	


});

