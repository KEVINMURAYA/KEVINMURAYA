const toggleBtn = document.querySelector('.nav-toggle-btn');
const navLinks = document.querySelectorAll('.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.forEach(link => link.classList.toggle('show-nav'));
});
