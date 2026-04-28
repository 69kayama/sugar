(function () {
  'use strict';

  // ---- Hamburger menu ----

  var hamburger = document.querySelector('.hamburger');
  var mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      mobileNav.setAttribute('aria-hidden', String(!isOpen));
    });

    mobileNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
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
    handleScroll(); // 初期状態の確認
  }

})();
