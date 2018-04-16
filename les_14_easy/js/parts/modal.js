function modal() {
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


}

module.exports = modal;