

window.addEventListener('DOMContentLoaded', function(){
	// событие при клике по кнопке "создать"
	let	createBtn = document.getElementById('popup-btn'),
			overlay = document.querySelector('.overlay'),
			popup = document.querySelector('.overlay'),
			custom = document.querySelector('.custom'),
			customDiv = custom.getElementsByTagName('div'),
			main = document.querySelector('.main');

	createBtn.addEventListener('click', () => {
		overlay.style.display = 'none';
		popup.style.display = 'none';
		custom.style.display = 'flex';
		main.style.display = 'none';
		for (let i = 0; i < customDiv.length; i++) {
			let string = customDiv[i].className;
					substring = "custom-"
			if (string.indexOf(substring) !== -1) {
				customDiv[i].style.display = 'block';
			}
		}
	});

});

