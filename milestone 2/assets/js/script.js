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

const prev = document.querySelector('.up');
const next = document.querySelector('.down');
prev.classList.add('hide');

slider.innerHTML += imagesTags;

const items = document.getElementsByClassName('item');

items[counterImages].classList.add('active');

next.addEventListener('click', function(){
    items[counterImages].classList.remove('active');
    counterImages++;
    items[counterImages].classList.add('active');

    prev.classList.remove('hide');
    if(counterImages === imagesArray.length -1){
        next.classList.add('hide');
    }
});

prev.addEventListener('click', function(){
    items[counterImages].classList.remove('active');
    counterImages--;
    items[counterImages].classList.add('active');
    
    next.classList.remove('hide');
    if(counterImages === 0){
        prev.classList.add('hide');
    }
});