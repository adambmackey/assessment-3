console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("form has been submited successfully ")
}
let rubDuck = document.querySelector('#rubberDuck')

function picCompliment(e){
	e.preventDefault();
	alert(`Dude! You're so awesome for finding this event`)
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
rubDuck.addEventListener('mouseover', picCompliment)