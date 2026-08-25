// FADE ANIMATION
window.onload =() => {
    document.querySelector('.hero').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.hero').style.transition = "0.3s";
        document.querySelector('.hero').style.opacity = 1;
    }, 200);
};