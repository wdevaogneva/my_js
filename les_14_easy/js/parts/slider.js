function slider() {
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
}

module.exports = slider;