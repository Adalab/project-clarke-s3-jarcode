'use strict';


var testResult = document.querySelectorAll('.test_input');
var resultado = document.querySelector('.btn_result');
var resultadoFinal = document.querySelector('.resultado');
var a = 0;

resultado.addEventListener('click', checkTest);
function checkTest(){
	for (var j=0; j<testResult.length; j++){
		if (testResult[j].value == 0 && testResult[j].checked){
			a++;
		}
		else if (testResult[j].value == 1 && testResult[j].checked) {
			a = a+2;
		}
		else if (testResult[j].value == 2 && testResult[j].checked) {
			a = a+3;
		}
	}
	mostrarMensaje();
}

function mostrarMensaje(){
if (a > 0 && a < 11){
	resultadoFinal.innerHTML = 'eres machista';
}
else if (a >= 11 && a <=20) {
	resultadoFinal.innerHTML = 'no eres machista';
}
else if (a > 20){
	resultadoFinal.innerHTML = 'me da igual si eres machista';
}
else {

}
}
