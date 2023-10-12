// Toggle icon navbar
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// Scroll sections
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // Active navbar links
      navlinks.forEach(links => {
        links.classList.remove('active');
      });
      document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');

      // Active sections for animations on scroll
      sec.classList.add('show-animate');
    } else {
      sec.classList.remove('show-animate');
    }
  });

  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
});

// Remove toggle icon and navbar when clicking navbar links (scroll)
navlinks.forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});
