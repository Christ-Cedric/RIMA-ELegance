const navbar = document.querySelector('.nav-bar'); // prend le premier élément
const menu = document.querySelector('.menu-toggle'); // prend le premier élément
const navLinks = document.querySelectorAll('.nav-bar a'); // tous les liens dans la navbar
const offre= document.querySelectorAll('#promotions button')
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

//notification sur les offre
offre.forEach(button => {
  button.addEventListener('click', function() {
    alert('Offre non disponible');
  });
});
const buttons = document.querySelectorAll('#produits button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.dataset.product; // ajoute data-product sur chaque bouton
    const productImg = button.dataset.img;     // ajoute data-img sur chaque bouton
    const waLink = `https://wa.me/54515907?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20produit%20${encodeURIComponent(productName)}%20${encodeURIComponent(productImg)}`;
    window.open(waLink, '_blank');
  });
});


