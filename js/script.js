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

// codigo pro botao de acessibilidade
const buttonDesktop = document.getElementById('acessibility-button')
const buttonMobile = document.getElementById('acessibility-mobile')

function toggleFontSize() {
    document.documentElement.classList.toggle('font-large'); 
}

if(buttonDesktop) {
    buttonDesktop.addEventListener('click', toggleFontSize);
}

if(buttonMobile) {
  buttonMobile.addEventListener('click', toggleFontSize);
}

// botao de tema 
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
// mobile
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const themeIconMobile = document.getElementById('theme-icon-mobile');

// atualiza o ícone conforme o tema atual
function updateThemeIcon(theme) {
    if (themeIcon) {
        themeIcon.src = (theme === 'light') ? 'img/sol.svg' : 'img/lua.svg';
    }
    if (themeIconMobile) {
        themeIconMobile.src = (theme === 'light') ? 'img/sol.svg' : 'img/lua.svg';
    }
    const mainImage = document.getElementById('main-image');
    if (mainImage) {
        mainImage.src = (theme === 'light') ? 'img/mainImg.png' : 'img/Dark theme.png';
    }
    const mainNeto = document.getElementById('Neto .jpg');
    if (mainNeto) {
        mainNeto.src = (theme === 'light') ? 'img/Neto .jpg' : 'img/NetoDark.jpg';
    }
}

// alternar tema
function toggleTheme() {
  const isLight = document.body.classList.toggle('light-mode');
  const isDark = document.body.classList.toggle('dark-mode', !isLight);

  const newTheme = isLight ? 'light' : 'dark';
  updateThemeIcon(newTheme);
  localStorage.setItem('theme', newTheme);
}

// clique
if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

// mobile
if (themeToggleMobile) {
  themeToggleMobile.addEventListener('click', toggleTheme);
}

// quando carregar a página, aplica tema salvo 
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
} else if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.add('light-mode');
}

updateThemeIcon(savedTheme || 'light');

//enviar
const alertaFormulario = document.querySelector('.enviarformulario');

alertaFormulario.addEventListener('click', function(alerta) {
  alerta.preventDefault(); // evita recarregar a pagina.
  alert('Página em construção!');
});