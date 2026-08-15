(() => {
  'use strict';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- nav: scrolled state + mobile burger ---------- */
  const nav = document.getElementById('siteNav');
  const burger = document.getElementById('navBurger');

  const setScrolled = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
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

  /* ---------- gauge scroll-progress needle ---------- */
  const needle = document.getElementById('gaugeNeedle');
  const fill = document.getElementById('gaugeFill');
  const gaugeWidget = document.querySelector('.gauge-progress');
  const FILL_LENGTH = 170; // matches stroke-dasharray in CSS

  const updateGauge = () => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const pct = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    if (needle) needle.style.transform = `rotate(${pct * 180}deg)`;
    if (fill) fill.style.strokeDashoffset = String(FILL_LENGTH * (1 - pct));
    // fade out near the very bottom so the fixed widget doesn't sit on the footer
    if (gaugeWidget) gaugeWidget.style.opacity = pct > 0.94 ? '0' : '';
  };

  if (needle && fill) {
    updateGauge();
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => { updateGauge(); ticking = false; });
        ticking = true;
      }
    }, { passive: true });
    window.addEventListener('resize', updateGauge);
  }

  /* ---------- nameplate spec readout: count up once, in view ---------- */
  const specs = document.querySelectorAll('.nameplate__grid dd[data-count-to]');
  if (specs.length && 'IntersectionObserver' in window) {
    const animateCount = (el) => {
      const target = parseInt(el.dataset.countTo, 10);
      const unitEl = el.querySelector('span');
      const unitText = unitEl ? unitEl.outerHTML : '';
      if (reduceMotion) {
        el.innerHTML = `${target} ${unitText}`;
        return;
      }
      el.classList.add('is-counting');
      const duration = 700;
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const val = Math.round(target * eased);
        el.innerHTML = `${val} ${unitText}`;
        if (t < 1) {
          requestAnimationFrame(tick);
        } else {
          el.innerHTML = `${target} ${unitText}`;
          setTimeout(() => el.classList.remove('is-counting'), 260);
        }
      };
      requestAnimationFrame(tick);
    };

    const nameplate = document.querySelector('.nameplate');
    if (nameplate) {
      // Wait for full load so images/fonts have settled layout before the
      // observer's first check — observing too early can report a false
      // intersection against an unstable layout.
      window.addEventListener('load', () => {
        const nameplateObserver = new IntersectionObserver((entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const items = entry.target.querySelectorAll('dd[data-count-to]');
              items.forEach((el, i) => setTimeout(() => animateCount(el), i * 70));
              obs.unobserve(entry.target);
            }
          });
        }, { threshold: 0.4 });
        nameplateObserver.observe(nameplate);
      });
    }
  }
})();
