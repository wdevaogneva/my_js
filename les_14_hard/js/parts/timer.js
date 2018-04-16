function timer () {
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
}

module.exports = timer;
