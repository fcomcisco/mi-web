document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarNav = document.querySelector('.navbar-nav');
  
    navbarToggler.addEventListener('click', function() {
      navbarNav.classList.toggle('active');
    });
  });
  