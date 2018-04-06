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
	};

	hideTabContent(1);

	//показываем табы
	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			//на всякий пожарный скрываем все табы=))
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	};

	//используем делегирование событий - назначаем на каждую вкладку событие клика
	info.addEventListener('click', function(event) {

		let target = event.target;
		if(target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				};

			};
		};
	});

	// настройка таймера

	let deadline = '2018-04-07'

	//сколько времени до дедлайна?
	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
				//округляем полученную разницу, переводим из мс в с 
				//и берем остаток от деления на 60 (ибо нас интересуют только секунды)
				seconds = Math.floor((t/1000) % 60),
				minutes = Math.floor((t/1000/60) % 60),
				hours = Math.floor(t/(1000*60*60));

				// total - общее количество милисекунд
				return {
					'total': t,
					'hours': hours,
					'minutes': minutes,
					'seconds': seconds
				};
	};

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
				};

				updateClock ();
				let timeInterval = setInterval(updateClock, 1000);
	};
	//timer - это id нашего таймера с HTML страницы
	setClock ('timer', deadline)

});