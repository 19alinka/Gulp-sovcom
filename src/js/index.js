document.addEventListener('DOMContentLoaded', function() {
  const burgerButton = document.getElementById('header__button');
    
  burgerButton.addEventListener('click', () => {
    const burgerMenu = document.querySelector('.header__burger-menu');
    const main = document.querySelector('.main');
    if(!burgerMenu.classList.contains('header__burger-active')) {
      burgerMenu.classList.add('header__burger-active');
      main.classList.add('main__show-overlay');
    } else {
      burgerMenu.classList.remove('header__burger-active');
      main.classList.remove('main__show-overlay');
    }
  });
});