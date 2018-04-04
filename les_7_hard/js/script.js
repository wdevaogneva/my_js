//анимация с requestAnimationFrame
window.addEventListener('load', function(){

	let btn = document.querySelector(".start");

	function startFly(){
	 	let butterfly = document.querySelector(".butterfly"),
				posLeft = -150,
				posTop = -100;

			// draw - функция отрисовки, duration	- продолжительность анимации 
		function fly(draw, duration) {
		  var start = performance.now();

		  requestAnimationFrame(function fly(time) {
		    // определяем, сколько прошло времени с начала анимации
		    var timePassed = time - start;

		    // если появится небольшое превышение времени, то зафиксировать конец
		    if (timePassed > duration) {
		    	timePassed = duration;
		    };

		    // рисуем состояние анимации в момент timePassed
		    draw(timePassed);

		    // если время анимации не закончилось - планируем ещё кадр
		    if (timePassed < duration) {
		      requestAnimationFrame(fly);
		    }

		  });
		}

		fly(function(timePassed) {			
			if (timePassed <= 2500){
				butterfly.style.backgroundImage = 'url(./img/butterfly_gif.gif)';
				posLeft += 2;
				posTop += 2;
				butterfly.style.top = posTop + 'px';
				butterfly.style.left = posLeft + 'px';
			} else if ((timePassed > 2500) && (timePassed <= 3700)){
				butterfly.style.backgroundImage = 'url(./img/butterfly_gif.gif)';
				posLeft += 2;
				posTop -= 2;
				butterfly.style.top = posTop + 'px';
				butterfly.style.left = posLeft + 'px';
			} else if ((timePassed > 3700) && (timePassed <= 5900)){
				butterfly.style.backgroundImage = 'url(./img/butterfly_gif.gif)';
				posLeft += 2;
				posTop += 2;
				butterfly.style.top = posTop + 'px';
				butterfly.style.left = posLeft + 'px';
			} else {
				butterfly.style.backgroundImage = 'url(./img/butterfly.png)';
			}
		}, 6000);

	};

	btn.addEventListener('click', startFly);

});	


//рабочая анимация без requestAnimationFrame

/*window.addEventListener('load', function(){
	let btn = document.querySelector(".start");

	function myAnimation () {
		let butterfly = document.querySelector(".butterfly"),
				posLeft = -150,
				posTop = -100,
				repeat = setInterval(fly, 10);

		function fly(){
			if ((posLeft == 550) && (posTop == 300)) {
				clearInterval(repeat);
				butterfly.style.backgroundImage = 'url(./img/butterfly.png)';
			} else if (posLeft <= 150){
						butterfly.style.backgroundImage = 'url(./img/butterfly_gif.gif)';
						posLeft++;
						posTop++;
						butterfly.style.top = posTop + 'px';
						butterfly.style.left = posLeft + 'px';
					} else if ((posLeft > 150) && (posLeft <= 300)){
						posLeft++;
						posTop--;
						butterfly.style.top = posTop + 'px';
						butterfly.style.left = posLeft + 'px';
					} else if ((posLeft > 300) && (posLeft <= 550)){
						posLeft++;
						posTop++;
						butterfly.style.top = posTop + 'px';
						butterfly.style.left = posLeft + 'px';
					}	
		}
	}

	btn.addEventListener('click', myAnimation);

});*/