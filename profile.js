let faveColor = document.getElementById('color');
let favePlace = document.getElementById('place');
let faveRitual = document.getElementById('ritual');

const colorAlert = () => alert('Yellow')
const placeAlert = () => alert('My home')
const ritalAlert = () => alert('Sleep')

faveColor.addEventListener('click',colorAlert);
favePlace.addEventListener('click',placeAlert);
faveRitual.addEventListener('click',ritalAlert);

