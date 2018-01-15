'use strict';


var testResult = document.querySelectorAll('.test_input');
var resultado = document.querySelector('.btn_result');
resultado.addEventListener('click', checkTest);
function checkTest(){
	var a = 0;
	for (var j=0; j<testResult.length; j++){

	if (testResult[j].value == 0 && testResult[j].checked){
		a = a++;
	}
	else if (testResult[j].value == 1 && testResult[j].checked) {
		a = a+2;
	}
	else if (testResult[j].value == 2 && testResult[j].checked) {
		a = a+3;
	}


}
}
if (a < 11){
	prompt('Machista');
}
else if (a >= 11 && a <=20) {
	prompt('Machista a mejorar');
}
else {
	prompt('no Machista');
}
