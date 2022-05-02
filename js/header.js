
// sign-in-modal-container

signInModal = () => {

	const btn = document.querySelector('.fl-sign-in-btn');

	const startToPlay = () => {

		flashPlayImages("#signInModalImages", "normal");
		btn.removeEventListener('click', startToPlay);
	}

	btn.addEventListener('click', startToPlay);

} 

signInModal();

// the-end-of-sign-in-modal-container



// sign-up-modal-container

signUpModal = () => {

	const btn = document.querySelector('.fl-sign-up-btn');

	const startToPlay = () => {

		flashPlayImages("#signUpModalImages", "normal");
		btn.removeEventListener('click', startToPlay);
	}

	btn.addEventListener('click', startToPlay);

} 

signUpModal();

// the-end-of-sign-up-modal-container



// user-modal

userModal = () => {

	const toSignInBtn = document.querySelector('.user-modal-to-sign-in-btn');
	const signUpCloser = document.querySelector('#signUpModalContainer .fl-modal-con-closer');
	const signInBtn =  document.querySelector('.fl-sign-in-btn');

	const toSignIn = () => { signUpCloser.click(); signInBtn.click(); }

	toSignInBtn.addEventListener('click', toSignIn);

}

userModal();

// the-end-of-user-modal



// navbar-search

navbarSearch = () => {

	// elements-and-values
	const form = document.querySelector('.fl-navbar-search');
	const input = form.querySelector('.fl-navbar-search-input');
	const select = form.querySelector('.fl-custom-select');
	const firstOption = select.querySelector('.select-items').firstChild;
	var isHovered = false;

	// functions
	const mouseIsOver = () => { isHovered = true; }

	const mouseIsOut = () => { isHovered = false; }

	const showSelect = () => { select.classList.add('fl-show'); }

	const hideSelect = () => { if (!isHovered) select.classList.remove('fl-show'); }

	const hasValue = () => { input.classList.add('has-value'); }

	const doesNotHaveValue = () => { if (!isHovered) input.classList.remove('has-value'); }

	// events
	input.onfocusin = function() { showSelect(); hasValue(); }

	input.onfocusout = function() { 

		this.value == "" ? hideSelect() : showSelect(); 

		this.value == "" ? doesNotHaveValue() : hasValue();  

	}

	select.addEventListener('mouseover', mouseIsOver);
	select.addEventListener('mouseout', mouseIsOut);

	// adding-class
	firstOption.classList.add('same-as-selected');

	// selecte vurduqda inputdan cixir! mouseover ile mence ancaq amma bir problemi qalacaq

}

navbarSearch();

// the-end-of-navbar-search