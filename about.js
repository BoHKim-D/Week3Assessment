console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted!');
}
function overPic(event) {
	event.preventDefault();
	
	setTimeout( () => {
		alert('Oh... you found me, Good job!');
},500);
}

let form = document.querySelector('form#contact');
let pict = document.getElementById('rubberDuck');

form.addEventListener('submit', handleSubmit);
pict.addEventListener('mouseover', overPic);