const navToggler = document.getElementById('navToggler');
const menuContainer = document.querySelector('#menu-container');
const logo = document.getElementById('logo');
let currentLogo = 'images/isotipo-blanco.png'; // Add this line

navToggler.addEventListener('click', () => {
    navToggler.classList.toggle('opened');
    menuContainer.classList.toggle('open');
    setTimeout(() => {
        if (currentLogo === 'images/isotipo-blanco.png') {
            currentLogo = 'images/isotipo-negro.png';
        } else {
            currentLogo = 'images/isotipo-blanco.png';
        }
        logo.src = currentLogo;
    }, 100); // Change the delay time here (in milliseconds)
});