const imagesArray = [
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg'
];

let imagesTags = '';

const slider = document.querySelector('.item-wrapper');

for(let i = 0; i < imagesArray.length; i++){
    imagesTags += `
    <img class="item" src="assets/img/${imagesArray[i]}" alt="${imagesArray[i]}">
    `;
}

let counterImages = 0;

const up = document.querySelector('.up');
const down = document.querySelector('.down');

slider.innerHTML += imagesTags;

const items = document.getElementsByClassName('item');

items[counterImages].classList.add('active');

up.addEventListener('click', function(){
    console.log('up');
});

down.addEventListener('click', function(){
    console.log('down');
});