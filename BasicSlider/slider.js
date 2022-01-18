/* hold all slider image */
let slider = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow_left'),
    arrowRight = document.querySelector('#arrow_right');

let current = 0;

/* clear all images */
const reset = () => {
    for( i = 0; i < slider.length; i++ ){
        slider[i].style.display = 'none';
    }
} 



/* initialize slider */
const start = () => {
    reset();
    slider[0].style.display = 'block';
}



/* right arrow */
const right = () => {
    reset();
    slider[current + 1].style.display = 'block';
    current++;
}



/* when the right button clicked */
arrowRight.addEventListener('click', function() {
    if (current === slider.length - 1) {
        current = -1;
    }

    right();

}) ;



/* left arrow */
const left = () => {
    reset();
    slider[current - 1].style.display = 'block';
    current--;
}



/* when the left button is clicked */
arrowLeft.addEventListener('click', function() {
    if (current === 0) {
        current = slider.length;
    }

    left();

});

setInterval(1000, start());


console.log('slider images',  slider)
console.log('arrow right', arrowRight);
console.log('arrow left', arrowLeft);