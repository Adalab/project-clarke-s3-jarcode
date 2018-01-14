'use strict';


// //funciones validar email
// function validateEmail(email) {
// 	var regex = /\b[A-Z0-9._%+-]+@(?:[A-Z0-9-]+\.)+[A-Z]{2,20}\b/gi;
// 	if( regex.test(email) ) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// function checkEmail() {
// 	var email = document.getElementById('email').value;
// 	if( validateEmail(email) === false ) {
// 		document.querySelector('.error_email').innerHTML = "Introduce un email válido";
// 	} else{
// 		document.querySelector('.error_email').innerHTML = " ";
// 	}
// }
// //funciones validar Telefono
// function validatePhone(telephone) {
// 	var regexPhone = /^([0-9]+){9}$/
// 	if( regexPhone.test(telephone) ) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// function checkTelephone() {
// 	var telephone = document.getElementById('telephone').value;
// 	if( validatePhone(telephone) === false ) {
// 		document.querySelector('.error_telephone').innerHTML = "Introduce un número telefónico válido";
// 	} else{
// 		document.querySelector('.error_telephone').innerHTML = " ";
// 	}
// }


// Alert feedback contacto
var shower = document.getElementById('fd');
var feedback = document.querySelector('.thanks');
function showAlert (){
	 feedback.classList.add('show');

}
shower.addEventListener('click', showAlert);
