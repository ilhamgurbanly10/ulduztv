

// navbar-animation

navbarAnimation();

function navbarAnimation() {

	const navbar = document.querySelector('.fl-navbar');


	function check() {

		if (document.documentElement.scrollTop > 1) navbar.classList.add('is-scrolled');
		else navbar.classList.remove('is-scrolled');

	}

	window.addEventListener('scroll', check);
	window.addEventListener('load', check);	

}

// the-end-of-navbar-animation



// modal-container

hideModalCOntainer();

function hideModalCOntainer() {

	const modal = document.querySelector('#userModalContainer');
	const btn = document.querySelector('.user-modal-con-close-btn');

	function hide() { modal.classList.remove('fl-show'); }

	btn.addEventListener('click', hide);

}

// the-end-of-modal-container


// modal-container

hideSmScreenMenu();

function hideSmScreenMenu() {

	const menu = document.querySelector('.fl-sm-screen-menu');
	const toggler = document.querySelector('.fl-navbar-toggler');
	const searchToggler = document.querySelector('.fl-navbar-search-toggler');
	const icon = searchToggler.querySelector('.fa');
	const searchBtn = menu.querySelector('.sm-screen-menu-top-container-search-btn');
	const signUpBtn = menu.querySelector('.sm-screen-menu-top-container-sign-up-btn');
	const searchForm = document.querySelector('.fl-navbar-search-parent-js');
	var isHovered = false;

	function hide() { menu.classList.remove('fl-show'); toggler.classList.remove('fl-active'); }

	function showSearchForm() { 

		searchForm.classList.add('fl-show'); 
		this.classList.add('fl-active');
		searchToggler.classList.add('fl-active'); 
		icon.classList.remove('fa-search');
		icon.classList.add('fa-times');

		setTimeout( function() {
			document.documentElement.addEventListener('click', hideSearchForm);
		}, 100)
		
		
	}

	function hideSearchForm() {

		if (!isHovered) {

			searchForm.classList.remove('fl-show'); 
			searchToggler.classList.remove('fl-active');
			searchBtn.classList.remove('fl-active');
			icon.classList.add('fa-search');
			icon.classList.remove('fa-times');
			document.documentElement.removeEventListener('click', hideSearchForm);

		}	

	}

	function mouseIsOver() { isHovered = true; }
	function mouseIsOut() { isHovered = false; }

	searchBtn.addEventListener('click', hide);
	searchBtn.addEventListener('click', showSearchForm);
	signUpBtn.addEventListener('click', hide);
	searchForm.addEventListener('mouseover', mouseIsOver);
	searchForm.addEventListener('mouseout', mouseIsOut);

}

// the-end-of-modal-container