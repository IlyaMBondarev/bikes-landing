
document.querySelector('.wrapper').classList.add('loaded');


let aboutBtn = document.querySelector('#aboutBtn');
let workBtn = document.querySelector('#workBtn');
let shopBtn = document.querySelector('#shopBtn');
let mailingBtn = document.querySelector('#mailingBtn');

let scrollFirst = document.querySelector('.about');
let scrollSecond = document.querySelector('.work');
let scrollThird = document.querySelector('.shop');
let scrollForth = document.querySelector('.mailing');

function scroll(element) {
    element.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
    });
}
aboutBtn.addEventListener('click', () => scroll(scrollFirst));
workBtn.addEventListener('click', () => scroll(scrollSecond));
shopBtn.addEventListener('click', () => scroll(scrollThird));
mailingBtn.addEventListener('click', () => scroll(scrollForth));

let switch1 = document.getElementById('switch1');
let switch2 = document.getElementById('switch2');
let switch3 = document.getElementById('switch3');

let checked = document.getElementById('switch1');

let slides = document.getElementsByClassName('slide__container');

let slider = document.getElementById('slider');

slider.style.height = slides[0].offsetHeight + "px";

switch1.addEventListener('click', function () {
    if (!switch1.classList.contains('checked')) {
        checked.classList.remove('checked');
        switch1.classList.add('checked');
        slider.classList.remove('second-slide', 'third-slide');
        slider.classList.add('first-slide');
        checked = document.getElementById('switch1');
    }
})

switch2.addEventListener('click', function () {
    if (!switch2.classList.contains('checked')) {
        checked.classList.remove('checked');
        switch2.classList.add('checked');
        slider.classList.remove('first-slide', 'third-slide');
        slider.classList.add('second-slide');
        checked = document.getElementById('switch2');
    }
})

switch3.addEventListener('click', function () {
    if (!switch3.classList.contains('checked')) {
        checked.classList.remove('checked');
        switch3.classList.add('checked');
        slider.classList.remove('first-slide', 'second-slide');
        slider.classList.add('third-slide');
        checked = document.getElementById('switch3');
    }
})

let shopSquareImages = document.querySelectorAll('.square');
let shopTallImages = document.querySelectorAll('.tall');
let shopShortImages = document.querySelectorAll('.short');

for (let i = 0; i < shopSquareImages.length; i++) {
    shopSquareImages[i].style.height = Math.ceil(+shopSquareImages[i].offsetWidth) + "px";
}

for (let i = 0; i < shopTallImages.length; i++) {
    shopTallImages[i].style.height = Math.ceil(+shopTallImages[i].offsetWidth*2) + "px";
}

for (let i = 0; i < shopShortImages.length; i++) {
    shopShortImages[i].style.height = Math.ceil(+shopShortImages[i].offsetWidth/2) + "px";
}

window.addEventListener('resize', function () {
    for (let i = 0; i < shopSquareImages.length; i++) {
        shopSquareImages[i].style.height = Math.ceil(+shopSquareImages[i].offsetWidth) + "px";
    }

    for (let i = 0; i < shopTallImages.length; i++) {
        shopTallImages[i].style.height = Math.ceil(+shopTallImages[i].offsetWidth*2) + "px";
    }

    for (let i = 0; i < shopShortImages.length; i++) {
        shopShortImages[i].style.height = Math.ceil(+shopShortImages[i].offsetWidth/2) + "px";
    }
})