'use strict';
var secondMenu = document.getElementsByClassName('menu_item');
var navMenu = document.getElementById( "navigation" );

//header, Animation button
document.getElementById( "xButton" )
.addEventListener( "click", function() {
	this.classList.toggle( "active" );
});

//open menu header
function openClose() {
	if (navMenu.style.display == 'block'){
		navMenu.style.display ='none';
	} else {
		navMenu.style.display = 'block';
	}
}

navMenu.addEventListener('click', openClose);

//open second menu header
function openMenu(evt) {
	evt.stopPropagation();
	//evt.currentTarget.childNodes[1].style.display = 'block';
	console.log('hola');
	resetMenu();
	evt.currentTarget.classList.add('menu_item_submenu');
}

for (var i = 0; i < secondMenu.length; i++){
	secondMenu[i].addEventListener('click', openMenu);
}

function resetMenu(){
	for (var i = 0; i < secondMenu.length; i++){
		secondMenu[i].classList.remove('menu_item_submenu');
	}
}
