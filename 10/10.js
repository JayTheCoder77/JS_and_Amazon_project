const checkClass = document.querySelector('.js-button');
console.log(checkClass.classList.contains('js-button'));

// all buttons function

function toggle(button){
if(button.classList.contains('is-toggled')){
    button.classList.remove('is-toggled');
}
else{
    button.classList.add('is-toggled');
}
}
switchButton.addEventListener('click',toggle);

// one button at a time function

function toggle(button) {
    // Remove from other buttons
    document.querySelector('.game.is-toggled')?.classList.remove('is-toggled');
    document.querySelector('.music.is-toggled')?.classList.remove('is-toggled');
    document.querySelector('.tech.is-toggled')?.classList.remove('is-toggled');
    
    // Add to clicked button
    button.classList.add('is-toggled');
}
