//не позволяет скриптам выполняться до загрузки страницы
$(document).ready(function(){

	//при клике на “Выбрать тур” , “Получить консультацию” или “Расписание туров”
	//подложка медленно проявляется, а модальное окно плавно выезжает сверху слева

	let $overlay = $('.overlay'), //подложка
			$modal = $('.modal'), // модальное окно
			$close = $('.close'), // крестик
			$container = $('.container'); //большой такой контейнер))

	//изменяем css-свойство, чтобы модальное окно изначально было вверху
	

  //делегирование событий на JQuery
	// а можно как-то также на чистом JS???? чтобы 3 разных объекта сразу???


 	//.main_btna -  Выбрать тур
 	//.main_btn - Получить консультацию
 	//[href = "#sheldure"] - Расписание туров. 2 кнопки в основном и мобильном меню
	$container.delegate('.main_btna, .main_btn, [href = "#sheldure"]', "click", function(){
		$modal.css({'top': '-700px', 'left':'-700px'}); 
  	$overlay.fadeIn(3000);
		$modal.animate(
		{ 
			dispay: "show",	
			top: "+=700px",
			left: "+=700px"

		}, 3000);
	});


//при клике на крестик всё происходит наоборот: 
//подложка исчезает, модальное окно уезжает вверх вправо

	$close.on('click', function(){
		$overlay.fadeOut(3000);
		$modal.animate(
		{ 
			dispay: "hide",	
			top: "-=700px",
			left: "+=700px"

		}, 3000);
	});

	//асинхронная отправка формы, средствами JQuery

	$('.form').on('submit', function(event) {

		event.preventDefault();

		$.ajax({
			type: "POST", //если Get - указывать не обязательно
		  url: "server.php",
		  data: $(this).serializeArray(), //преобразует данные инпутов формы в формат JSON
		  send: function(){
		    console.log('запрос начал отправку....)');
		  },
		  error: function(){
		    alert('Не удалось отправить запрос!\nПопробуйте позднее или сами позвоните нам) ');
		    console.log('что-то пошло не так...)');
		  },
		  success: function(){
		  	$overlay.css('z-index','101');
		    $('.thanks').fadeIn(1500);
		    $('.thanks').css('z-index','102');
		    console.log('успех)');
		  }
		});
		
	});

	//событие при клике на кнопку "вернуться на сайт"

	$('.back').on('click', function(){
		$overlay.fadeOut(2000);
		$modal.fadeOut(2000);
		$('.thanks').fadeOut(2000);
		//чистим инпуты
		$('.form').find('input').val('');
		$('.form').find('textarea').val('');
		// ????????????не смогла разобраться как убрать флажок....
		$('.checkbox').removeAttr("checked");

		$overlay.animate(
		{ 
			zIndex: 50
		}, 3000);
	});

});