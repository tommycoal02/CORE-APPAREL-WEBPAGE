
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', closee)

function show(){
    mainMenu.style.display = 'flex'; 
    mainMenu.style.top = '0';
}
function closee(){
    mainMenu.style.top = '-100%';
}


// thridPageMovingImage //
let image = document.getElementById('thirdPageImage');
let images =['/img/11.jpg','/img/2.jpg','/img/3.jpg','/img/4.jpg'];
setInterval(function(){
    let random = Math.floor(Math.random() * 4);
    image.src = images[random];

}, 2500);