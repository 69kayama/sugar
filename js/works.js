(function () {
  'use strict';

  // ---- 作品データ（差し替え用）----
  // category: 'commission' | 'original' | 'fanart'
  // caption: 画像下の注釈テキスト（空文字でタイトルを表示）
  var works = [
    { title: '長文テスト長文テスト長文テスト長文テスト長文テスト長文テスト長文テスト長文テスト長文テスト長文テスト長文テスト長文テスト長文テスト長文テスト', src: 'assets/works/hero.png', category: 'fanart',      caption: '' },
    { title: '長文テスト02長文テスト02長文テスト02長文テスト02長文テスト02長文テスト02長文テスト02長文テスト02長文テスト02長文テスト02長文テスト02', src: 'assets/works/hero.png', category: 'original',    caption: '' },
    { title: '作品タイトル 03', src: 'assets/works/hero.png', category: 'commission',  caption: '' },
    { title: '作品タイトル 04', src: 'assets/works/hero.png', category: 'fanart',      caption: '' },
    { title: '作品タイトル 05', src: 'assets/works/hero.png', category: 'original',    caption: '' },
    { title: '作品タイトル 06', src: 'assets/works/hero.png', category: 'fanart',      caption: '' },
    { title: '作品タイトル 07', src: 'assets/works/hero.png', category: 'commission',  caption: '' },
    { title: '作品タイトル 08', src: 'assets/works/hero.png', category: 'fanart',      caption: '' },
    { title: '作品タイトル 09', src: 'assets/works/hero.png', category: 'original',    caption: '' },
    { title: '作品タイトル 10', src: 'assets/works/hero.png', category: 'commission',  caption: '' },
    { title: '作品タイトル 11', src: 'assets/works/hero.png', category: 'fanart',      caption: '' },
    { title: '作品タイトル 12', src: 'assets/works/hero.png', category: 'original',    caption: '' },
  ];

  var filterLabels = {
    all:        '全て',
    commission: 'お仕事',
    original:   'オリジナル',
    fanart:     'ファンアート',
  };

  var currentCategory = 'all';
  var currentFiltered = [];
  var lightboxIndex   = 0;

  var filterEl  = document.getElementById('works-filter');
  var galleryEl = document.getElementById('works-gallery');
  var lightbox  = document.getElementById('lightbox');

  if (!filterEl || !galleryEl || !lightbox) return;

  var lbImg     = lightbox.querySelector('.lightbox-img');
  var lbCaption = lightbox.querySelector('.lightbox-caption');
  var lbClose   = lightbox.querySelector('.lightbox-close');
  var lbPrev    = lightbox.querySelector('.lightbox-prev');
  var lbNext    = lightbox.querySelector('.lightbox-next');

  // ---- フィルターボタン生成 ----

  Object.keys(filterLabels).forEach(function (key) {
    var btn = document.createElement('button');
    btn.className   = 'filter-btn' + (key === currentCategory ? ' is-active' : '');
    btn.textContent = filterLabels[key];
    btn.dataset.category = key;
    btn.addEventListener('click', function () {
      if (currentCategory === key) return;
      currentCategory = key;
      filterEl.querySelectorAll('.filter-btn').forEach(function (b) {
        b.classList.toggle('is-active', b.dataset.category === key);
      });
      renderGallery(key);
    });
    filterEl.appendChild(btn);
  });

  filterEl.className  = 'works-filter';
  galleryEl.className = 'works-grid';

  // ---- ギャラリー描画 ----

  function renderGallery(category) {
    currentFiltered = category === 'all'
      ? works.slice()
      : works.filter(function (w) { return w.category === category; });

    galleryEl.innerHTML = '';

    currentFiltered.forEach(function (work, idx) {
      var item = document.createElement('div');
      item.className = 'work-item';

      var img = document.createElement('img');
      img.src       = work.src;
      img.alt       = work.title;
      img.className = 'work-thumb';
      img.loading   = 'lazy';

      var overlay = document.createElement('div');
      overlay.className = 'work-overlay';

      var title = document.createElement('p');
      title.className   = 'work-title';
      title.textContent = work.title;

      overlay.appendChild(title);
      item.appendChild(img);
      item.appendChild(overlay);

      item.addEventListener('click', function () { openLightbox(idx); });

      galleryEl.appendChild(item);
    });
  }

  // ---- ライトボックス ----

  function openLightbox(idx) {
    lightboxIndex = idx;
    updateLightbox();
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    var work = currentFiltered[lightboxIndex];
    lbImg.src = work.src;
    lbImg.alt = work.title;
    lbCaption.textContent = work.caption || work.title;

    lbPrev.setAttribute('aria-hidden', lightboxIndex <= 0 ? 'true' : 'false');
    lbNext.setAttribute('aria-hidden', lightboxIndex >= currentFiltered.length - 1 ? 'true' : 'false');
  }

  function goPrev() {
    if (lightboxIndex > 0) { lightboxIndex--; updateLightbox(); }
  }

  function goNext() {
    if (lightboxIndex < currentFiltered.length - 1) { lightboxIndex++; updateLightbox(); }
  }

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', goPrev);
  lbNext.addEventListener('click', goNext);

  // 背景クリックで閉じる
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  // キーボード操作
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   goPrev();
    if (e.key === 'ArrowRight')  goNext();
  });

  renderGallery(currentCategory);

})();
