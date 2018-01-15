'use strict';


// Alert feedback contacto
var shower = document.getElementById('fd');
var feedback = document.querySelector('.thanks');
function showAlert (){
	 feedback.classList.add('show');

}
shower.addEventListener('click', showAlert);
