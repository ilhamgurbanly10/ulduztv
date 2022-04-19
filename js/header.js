
// modal-container

hideModalCOntainer();

function hideModalCOntainer() {

	const modal = document.querySelector('#userModalContainer');
	const btn = document.querySelector('.user-modal-con-close-btn');

	function hide() { modal.classList.remove('fl-show'); }

	btn.addEventListener('click', hide);

}

// the-end-of-modal-container