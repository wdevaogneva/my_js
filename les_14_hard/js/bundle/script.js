window.addEventListener('DOMContentLoaded', function(){
	
	let tab = require('../parts/tab.js');
	let scrollModule = require('../parts/scrollModule.js');
	let modal = require('../parts/modal.js');
	let ajaxModule = require('../parts/ajaxModule.js');
	let slider = require('../parts/slider.js');
	let calc = require('../parts/calc.js');
	let timer = require('../parts/timer.js');


	tab();
	scrollModule();
	modal();
	ajaxModule();
	slider();
	calc();
	timer();

});

