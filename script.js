const navbar = document.querySelector('.nav-bar'); // prend le premier élément
const menu = document.querySelector('.menu-toggle'); // prend le premier élément
const navLinks = document.querySelectorAll('.nav-bar a'); // tous les liens dans la navbar

// Toggle du menu
menu.addEventListener('click', function() {
    navbar.classList.toggle('active'); 
});

// Fermer le menu quand on clique sur un lien
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active'); // on retire la classe active de la navbar
  });
});
