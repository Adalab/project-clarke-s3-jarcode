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
	resultadoFinal.innerHTML = 'Su frase para defenderse cuando lo tachan de machista es "¿machista yo? Si vivo con tres mujeres". Usted no es que sea machista a secas, es un machista irrecuperable. No pasa nada, el feminismo no cuenta con que usted entre en razón. Eso sí, tenga cuidado cuando vaya al zoo, pueden no dejarle salir luego.';
	a = 0;
}
else if (a >= 11 && a <=20) {
	resultadoFinal.innerHTML = 'Tenemos una buena y una mala noticia para usted. La mala es que es usted machista. La buena es que no está en el anterior grupo. El feminismo necesita que siga teniendo en cuenta cada vez más lo que una mujer puede o no querer. Necesita mejorar, pero ¿quién no lo necesita?';
	a = 0;
}
else if (a > 20){
	resultadoFinal.innerHTML = 'El mundo necesita más personas como usted!!';
	a = 0;
}
else {

}
}
