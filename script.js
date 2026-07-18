// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

// Ferme le menu après un clic sur un lien
menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Année courante dans le pied de page
document.getElementById('year').textContent = new Date().getFullYear();
