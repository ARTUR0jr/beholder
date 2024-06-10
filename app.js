const menuButton = document.getElementById('menu-button');
const mobileNav = document.getElementById('mobile-nav');

menuButton.addEventListener('click', function() {
  mobileNav.classList.toggle('show'); // Toggle 'show' class for visibility
});

