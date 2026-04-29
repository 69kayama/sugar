(function () {
  'use strict';

  // ---- Hamburger drawer ----

  var hamburger = document.querySelector('.hamburger');
  var mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    var backdrop = document.createElement('div');
    backdrop.className = 'mobile-nav-backdrop';
    document.body.appendChild(backdrop);

    var closeBtn = document.createElement('button');
    closeBtn.className = 'mobile-nav-close';
    closeBtn.setAttribute('aria-label', '閉じる');
    closeBtn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>';
    mobileNav.prepend(closeBtn);
    closeBtn.addEventListener('click', closeNav);

    function openNav() {
      mobileNav.classList.add('is-open');
      backdrop.classList.add('is-open');
      hamburger.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
      mobileNav.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeNav() {
      mobileNav.classList.remove('is-open');
      backdrop.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', function () {
      mobileNav.classList.contains('is-open') ? closeNav() : openNav();
    });

    backdrop.addEventListener('click', closeNav);

    mobileNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
  }

  // ---- Hero slider ----

  var slides = document.querySelectorAll('.hero-slide');
  var dots   = document.querySelectorAll('.hero-dot');

  if (slides.length > 1) {
    var current  = 0;
    var interval = 4000;
    var timer;

    function goTo(index) {
      slides[current].classList.remove('is-active');
      dots[current].classList.remove('is-active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('is-active');
      dots[current].classList.add('is-active');
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goTo(i);
        clearInterval(timer);
        timer = setInterval(function () { goTo(current + 1); }, interval);
      });
    });

    timer = setInterval(function () { goTo(current + 1); }, interval);
  }

  // ---- Left-bottom widget (HOME以外のページ) ----

  var widget = document.querySelector('.bottom-widget');

  if (widget) {
    function handleScroll() {
      if (window.scrollY > 100) {
        widget.classList.add('is-visible');
      } else {
        widget.classList.remove('is-visible');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

})();
