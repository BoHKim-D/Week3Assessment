let faveColor = document.getElementById('color');
let favePlace = document.getElementById('place');
let faveRitual = document.getElementById('ritual');

const colorAlert = () => alert('Yellow')
const placeAlert = () => alert('My home')
const ritalAlert = () => alert('Sleep')

faveColor.addEventListener('click',colorAlert);
favePlace.addEventListener('click',placeAlert);
faveRitual.addEventListener('click',ritalAlert);

const profileBtns = document.querySelector('button');

// profileBtns.forEach(btn) => {
//     btn.addEventListener('click', (event) => {
//         let favorite = '';
//         switch (event.target.id) {
//             case 'color':
//                 favorite = 'Yellow';
//                 break;
//             case 'place':
//                 favorite = 'My home';
//                 break;
//             case 'ritual':
//                 favorite = 'Sleeping';
//                 break;
//         }
//         alert(`My favorite ${event.target.id} is ${favorite}`);
//     })
// })