(() => {
  'use strict';

  /* ---------- nav: mobile burger + scrolled shadow ---------- */
  const nav = document.getElementById('siteNav');
  const burger = document.getElementById('navBurger');

  const setScrolled = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });

  if (burger) {
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    nav.querySelectorAll('.nav__links a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- fab: hide while the hero (own WhatsApp CTA) is in view ---------- */
  const fab = document.querySelector('.fab');
  const hero = document.querySelector('.hero');
  if (fab && hero && 'IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver(
      ([entry]) => fab.classList.toggle('is-hidden', entry.isIntersecting),
      { threshold: 0.15 }
    );
    heroObserver.observe(hero);
  }
})();
