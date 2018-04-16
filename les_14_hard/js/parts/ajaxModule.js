function ajaxModule() {
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




	//удаление див-статуса при изменении инпутов в форме на странице через делигирование

	contactForm.addEventListener('change', function(event) {
		if (event.target && event.target.matches('input')){
			let statusDiv =  contactForm.getElementsByClassName('status')[0];
				if (statusDiv !== undefined){
					contactForm.removeChild(statusMessage);
				}
			}
	});
}

module.exports = ajaxModule;