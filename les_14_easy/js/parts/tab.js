function tab() {
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
}

module.exports = tab;