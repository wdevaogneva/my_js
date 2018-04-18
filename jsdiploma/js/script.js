window.addEventListener('DOMContentLoaded', function(){

	// событие при клике по кнопке "создать"
	let	createBtn = document.getElementById('popup-btn'),
			overlay = document.querySelector('.overlay'),
			popup = document.querySelector('.popup'),
			custom = document.querySelector('.custom'),
			customDiv = custom.getElementsByTagName('div'),
			main = document.querySelector('.main');

	createBtn.addEventListener('click', () => {
		//немного анимируем уползание "popap" вверх + изменение прозрачности подложки 
		//со скрытием main-блока и проявлением custom-блока
		const opacityAndAlphaStep = 0.004,
					topStep = 4;

		let opacityValue = 1,
				alphaValue = 0.8,
				posTop = 150,
				i = 1;
				repeat = setInterval(startAnimate, 10);

		function startAnimate () {
			if (i < 50) {
				alphaValue += opacityAndAlphaStep;
				overlay.style.backgroundColor = "rgba(31, 140, 226, " + alphaValue +")";
				posTop -= topStep;
				popup.style.top = posTop + 'px';
				i++;
			} else if (i == 50) {
				//при полностью непрозрачной подложке, скрываем main-блок и показываем custom-блок
				main.style.display = 'none';
				custom.style.display = 'flex';
				for (let i = 0; i < customDiv.length; i++) {
					let string = customDiv[i].className;
							substring = "custom-"
					if (string.indexOf(substring) !== -1) {
						customDiv[i].style.display = 'block';
					}
				};
				i++;
			}	else if ((i > 50) && (i < 175)) {
				opacityValue -= opacityAndAlphaStep;
				overlay.style.opacity = opacityValue;
				posTop -= topStep;
				popup.style.top = posTop + 'px';
				i++;
			}	else if (i == 175) {
				//на всякий пожарный возвращаем настройки "как было" и скрываем=)
				overlay.style.cssText = "display: none; background-color: rgba(31, 140, 226, 0.8); opacity: 1";
				popup.style.cssText = "display: none; top: 150px";
				clearInterval(repeat);
			} else {
				console.log('что-то пошло не так');
			}
		};
	});
	

});









	