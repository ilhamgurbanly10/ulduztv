
// flash-simple-slider

function flashSimpleSlider(elmnt, settings = {
	speed: "fast",
	autoplay: false,
	autoplaySpeed: "normal",
	dots: true,
	buttons: false,
	draggable: true,
	arrows: true,
	length: false
}) {

	// default-values
	if (settings.speed == undefined) settings.speed = "fast";
	if (settings.autoplay == undefined) settings.autoplay = false;
	if (settings.autoplaySpeed == undefined) settings.autoplaySpeed = "normal";
	if (settings.dots == undefined) settings.dots = true;
	if (settings.buttons == undefined) settings.buttons = false;
	if (settings.draggable == undefined) settings.draggable = true;
	if (settings.arrows == undefined) settings.arrows = true;
	if (settings.length == undefined) settings.length = false;

	// elements-and-values
	elmnt = flashSelector(elmnt);

	const prevArrow = elmnt.querySelector('.fl-simple-slider-prev');
	const nextArrow = elmnt.querySelector('.fl-simple-slider-next');
	const slides = elmnt.querySelectorAll('.fl-simple-slider-slide');
	const slidesLength = slides.length;
	var index = 1;
	var lastIndex = slidesLength - 1;
	var prevIndex = lastIndex;
	var autoplayFunction, dotsList, dotsItem = [], dots = [];
	var track = elmnt.querySelector('.fl-simple-slider-track');
	var totalLength = elmnt.querySelector('.fl-simple-slider-total-length');
	var lengthIndex = elmnt.querySelector('.fl-simple-slider-length-index');
	
	if (settings.buttons) var buttons = elmnt.querySelectorAll('.fl-simple-slider-btn');
		

	// changes
	track.style.transform = "translateX(0)";
	if (!settings.draggable) { 
		track.classList.add('fl-not-draggable'); 
		slides[0].classList.add('fl-show');
	}		

	// functions
	const setLength = () => {

		if (settings.length && slidesLength > 1) { 
			totalLength.innerHTML = slidesLength;
			lengthIndex.innerHTML = 1; 
		}

	}

	const setLengthIndex = (y) => { if (settings.length)  lengthIndex.innerHTML = y + 1; }

	function determineSpeed() {

		switch (settings.speed) {
		  case "very-fast":
		    settings.speed = ".5s";
		    break;
		  case "fast":
		    settings.speed = "1s";
		    break;
		  case "normal":
		    settings.speed = "1.5s";
		    break;
		  case "slow":
		    settings.speed = "2s";
		    break;
		  case "very-slow":
		    settings.speed = "2.5s";
		    break;
		}

		if (settings.draggable) track.style.transitionDuration = settings.speed;

		else for (var i = 0; i < slidesLength; i++) { 
				slides[i].style.transitionDuration = settings.speed; 
			}

		switch (settings.autoplaySpeed) {
		  case "very-fast":
		    settings.autoplaySpeed = 1000;
		    break;
		  case "fast":
		    settings.autoplaySpeed = 2000;
		    break;
		  case "normal":
		    settings.autoplaySpeed = 5000;
		    break;
		  case "slow":
		    settings.autoplaySpeed = 9000;
		    break;
		  case "very-slow":
		    settings.autoplaySpeed = 10000;
		    break;
		}

	}

	function play() {

		autoplayFunction = setInterval(function() {

			if (settings.dots) activeDot(index);
			if (settings.buttons) activeBtn(index);
			setLengthIndex(index);

			if (settings.draggable) {

				const size = index * 100 + "%";
				track.style.transform = "translateX(-"+size+")";

			} else {

				for (var i = 0; i < slidesLength; i++) {
					
					if (i == index) slides[i].classList.add('fl-show');
					else slides[i].classList.remove('fl-show');
					
				}

			}	

			if (index == 0) prevIndex = lastIndex;
			else prevIndex = index - 1;
			if (index == lastIndex) index = 0;
			else index += 1;

		}, settings.autoplaySpeed)
	}

	function stop() { clearInterval(autoplayFunction); }

	function prev() {

		if (settings.dots) activeDot(prevIndex);
		if (settings.buttons) activeBtn(prevIndex);
		setLengthIndex(prevIndex);

		if (settings.draggable) {

			const size = prevIndex * 100 + "%";
			track.style.transform = "translateX(-"+size+")";

		} else {

			for (var i = 0; i < slidesLength; i++) {
				
				if (i == prevIndex) slides[i].classList.add('fl-show');
				else slides[i].classList.remove('fl-show');
				
			}

		}

		if (prevIndex == lastIndex)  index = 0; 
		else index = prevIndex + 1;
		if (prevIndex == 0) prevIndex = lastIndex;
		else prevIndex -= 1;	

		// disable_enable_buttons();

		if(settings.autoplay) {
			stop();
			play();
		}

	}

	function next() {

		if (settings.dots) activeDot(index);
		if (settings.buttons) activeBtn(index);
		setLengthIndex(index);

		if (settings.draggable) {

			const size = index * 100 + "%";
			track.style.transform = "translateX(-"+size+")";

		} else {

			for (var i = 0; i < slidesLength; i++) {
				
				if (i == index) slides[i].classList.add('fl-show');
				else slides[i].classList.remove('fl-show');

			}

		}

		if (index == 0) prevIndex = lastIndex;
		else prevIndex = index - 1;
		if (index == lastIndex) index = 0;
		else index += 1;

		if(settings.autoplay) {
			stop();
			play();
		}
	
	}

	function createDots() {

		if (slidesLength <= 1) return;

		dotsList = flashCreateElement("ul","", {
			class: "fl-simple-slider-dots-list"
		}, elmnt, "last-child");

		for (var i = 0; i < slidesLength; i++) {

			dotsItem[i] = flashCreateElement("li","", {
				class: "fl-simple-slider-dots-item",
			}, dotsList, "last-child");

			dots[i] = flashCreateElement("button","", {
				type: "button",
				class: "fl-simple-slider-dot",
				index: ""+i+""
			}, dotsItem[i], "last-child");

			dots[i].addEventListener('click', slideWithDot);

		}

		dots[0].classList.add('fl-active');


	}

	function createButtons() {

		if (slidesLength <= 1) return;

		for (var i = 0; i < slidesLength; i++) {

				buttons[i].addEventListener('click', slideWithButton);
				buttons[i].setAttribute('index',''+i+'');

		}

		buttons[0].classList.add('fl-active');

	}

	function slideWithDot() {

		const myIndex = Number(this.getAttribute('index'));

		if (settings.draggable) {

			const size = myIndex * 100 + "%";
			track.style.transform = "translateX(-"+size+")";

		} else {

			for (var i = 0; i < slidesLength; i++) {
				
				if (i == myIndex) slides[i].classList.add('fl-show');
				else slides[i].classList.remove('fl-show');

			}

		}

		activeDot(myIndex);
		if (settings.buttons) activeBtn(myIndex);
		setLengthIndex(myIndex);

		if (myIndex == 0) prevIndex = lastIndex;
		else prevIndex = myIndex - 1;
		if (myIndex == lastIndex) index = 0;
		else index = myIndex + 1;

		if(settings.autoplay) {
			stop();
			play();
		}	

	}

	function slideWithButton() {

		const myIndex = Number(this.getAttribute('index'));

		if (settings.draggable) {

			const size = myIndex * 100 + "%";
			track.style.transform = "translateX(-"+size+")";

		} else {

			for (var i = 0; i < slidesLength; i++) {
				
				if (i == myIndex) slides[i].classList.add('fl-show');
				else slides[i].classList.remove('fl-show');

			}

		}

		activeBtn(myIndex);
		if (settings.dots) activeDot(myIndex);
		setLengthIndex(myIndex);

		if (myIndex == 0) prevIndex = lastIndex;
		else prevIndex = myIndex - 1;
		if (myIndex == lastIndex) index = 0;
		else index = myIndex + 1;

		if(settings.autoplay) {
			stop();
			play();
		}	

	}

	function activeDot(z) { flashRemoveClass(dots, "fl-active", dots[z]); }

	function activeBtn(z) { flashRemoveClass(buttons, "fl-active", buttons[z]); }

	function dragElement(elmnt) {

		if (slidesLength <= 1) return;

		var defaultPos = 0, defaultTranslateX, lastClientX;

		elmnt.onmousedown = dragMouseDown;
		elmnt.ontouchstart = dragMouseDown;

		function dragMouseDown(e) {

			if(settings.autoplay) stop();

			defaultTranslateX = elmnt.style.transform;
			defaultTranslateX = defaultTranslateX.slice(11, defaultTranslateX.length - 1);

			e = e || window.event;

			defaultPos = e.clientX || e.touches[0].clientX;
			
			document.onmouseup = closeDragElement;
			document.ontouchend = closeDragElement;

			document.onmousemove = elementDrag;
			document.ontouchmove = elementDrag;

		}

		function elementDrag(e) {

			e = e || window.event;
			pos = e.clientX || e.touches[0].clientX;
			pos -= defaultPos;
			elmnt.style.transform = "translateX(calc("+defaultTranslateX+" + "+pos+"px)"; 
			lastClientX = e.clientX || e.touches[0].clientX;

		}

		function closeDragElement(e) {

			if(settings.autoplay) play();	

			e = e || window.event;

			if (lastClientX != null) {

				if (lastClientX < defaultPos - 80) { 
					if (index == 0) elmnt.style.transform = "translateX("+defaultTranslateX+")";
					else next();
				}

				else if (lastClientX > defaultPos + 80) { 
					if (prevIndex == lastIndex) elmnt.style.transform = "translateX(0)";
					else prev();
				}

				else elmnt.style.transform = "translateX("+defaultTranslateX+")";

			}	

			document.onmouseup = null;
			document.ontouchend = null;
			document.onmousemove = null;
			document.ontouchmove = null;
			lastClientX = null;

		}

	}

	// adding-functions
	if (settings.arrows && slidesLength > 1) {
		prevArrow.addEventListener('click', prev);
		nextArrow.addEventListener('click', next);
	}	

	// calling-functions
	determineSpeed();

	if (settings.draggable) dragElement(track);

	if (settings.autoplay && slidesLength > 1) play();

	if (settings.dots) createDots();

	if (settings.buttons) createButtons();

	setLength();
		
}