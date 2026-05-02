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

  // ---- 更新履歴（PCカード・モバイル共通ソース）----
  // ここを編集するとPC・スマホ両方に反映される
  // 古い順に並べる（新しいものを末尾に追加）

  var siteUpdates = [
    { date: '2026.05', text: 'サイトをオープンしました' },
  ];

  document.querySelectorAll('.js-updates-list').forEach(function (list) {
    siteUpdates.slice().reverse().slice(0, 3).forEach(function (u) {
      var li = document.createElement('li');
      li.className = 'card-update-item';
      li.innerHTML = '<span class="card-update-date">' + u.date + '</span><span>' + u.text + '</span>';
      list.appendChild(li);
    });
  });

  // ---- Home WORKS プレビュー: worksData から最新3件を描画 + ライトボックス ----

  var previewContainer = document.querySelector('.home-preview-thumbs');
  var homeLightbox     = document.getElementById('home-lightbox');

  if (previewContainer && homeLightbox && typeof worksData !== 'undefined') {
    var previewWorks = worksData.slice().reverse().slice(0, 3);

    // サムネイル描画
    previewWorks.forEach(function (work) {
      var img    = document.createElement('img');
      img.src    = work.src;
      img.alt    = work.title;
      img.className = 'home-preview-thumb';
      img.loading   = 'lazy';
      previewContainer.appendChild(img);
    });

    // ライトボックス
    var homeLbImg     = homeLightbox.querySelector('.lightbox-img');
    var homeLbCaption = homeLightbox.querySelector('.lightbox-caption');
    var homeLbClose   = homeLightbox.querySelector('.lightbox-close');
    var homeLbPrev    = homeLightbox.querySelector('.lightbox-prev');
    var homeLbNext    = homeLightbox.querySelector('.lightbox-next');
    var homeLbIndex   = 0;

    function updateHomeLb() {
      var work = previewWorks[homeLbIndex];
      homeLbImg.src = work.src;
      homeLbImg.alt = work.title;
      homeLbCaption.textContent = work.caption || work.title;
      homeLbPrev.setAttribute('aria-hidden', homeLbIndex <= 0 ? 'true' : 'false');
      homeLbNext.setAttribute('aria-hidden', homeLbIndex >= previewWorks.length - 1 ? 'true' : 'false');
    }

    function openHomeLb(idx) {
      homeLbIndex = idx;
      updateHomeLb();
      homeLightbox.classList.add('is-open');
      homeLightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      homeLbClose.focus();
    }

    function closeHomeLb() {
      homeLightbox.classList.remove('is-open');
      homeLightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    previewContainer.querySelectorAll('.home-preview-thumb').forEach(function (img, idx) {
      img.addEventListener('click', function () { openHomeLb(idx); });
    });

    homeLbClose.addEventListener('click', closeHomeLb);

    homeLbPrev.addEventListener('click', function () {
      if (homeLbIndex > 0) { homeLbIndex--; updateHomeLb(); }
    });

    homeLbNext.addEventListener('click', function () {
      if (homeLbIndex < previewWorks.length - 1) { homeLbIndex++; updateHomeLb(); }
    });

    homeLightbox.addEventListener('click', function (e) {
      if (e.target === homeLightbox) closeHomeLb();
    });

    document.addEventListener('keydown', function (e) {
      if (!homeLightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape')     closeHomeLb();
      if (e.key === 'ArrowLeft'  && homeLbIndex > 0)                        { homeLbIndex--; updateHomeLb(); }
      if (e.key === 'ArrowRight' && homeLbIndex < previewWorks.length - 1)  { homeLbIndex++; updateHomeLb(); }
    });
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
