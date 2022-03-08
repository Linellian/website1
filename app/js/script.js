const ham = document.querySelector('#btnHam');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay')

ham.addEventListener('click', function(){
    console.log('open hamburger');

    if(header.classList.contains('open')){ //Close menu
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    }
    else { // Open menu
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
});