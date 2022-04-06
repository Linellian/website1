const ham = document.querySelector('#btnHam');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')
const tru = document.querySelector('.var_t');

ham.addEventListener('click', function(){

    if(header.classList.contains('open')){ //Close menu
        console.log('close hamburger');
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else { // Open menu
        console.log('open hamburger');
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});

tru.addEventListener('click', function(){
    console.log('correct');
    tru.classList.add('correct');
});


