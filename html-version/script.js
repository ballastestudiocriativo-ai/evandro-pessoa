// Header scroll state
const header = document.getElementById('header');
const onScroll = () => {
  if (window.scrollY > 20) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu toggle
const toggle = document.getElementById('menuToggle');
const navMobile = document.getElementById('navMobile');
if (toggle && navMobile) {
  toggle.addEventListener('click', () => navMobile.classList.toggle('open'));
  navMobile.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navMobile.classList.remove('open'))
  );
}
