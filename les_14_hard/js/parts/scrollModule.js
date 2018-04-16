function scrollModule() {
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
}

module.exports = scrollModule;