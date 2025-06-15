function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.icon');
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open'); 
        icon.src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open')
        icon.src = "img/close_white_36dp.svg";
    }
}

// codigo para fechar o menu ao clicar em um link

const menuLinks = document.querySelectorAll('.mobile-menu a');
menuLinks.forEach(link => { 
    link.addEventListener('click', () => {
        const menuMobile = document.querySelector('.mobile-menu');
        const icon = document.querySelector('.icon'); 
        menuMobile.classList.remove('open');
        icon.src = "img/menu_white_36dp.svg";
    });
});