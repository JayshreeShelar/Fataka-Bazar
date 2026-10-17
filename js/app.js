/* ============================================================
   FATAKA BAZAR - APP LOGIC (vanilla JS)
   ============================================================ */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var page = document.body.dataset.page || '';
  var qs = new URLSearchParams(location.search);

  function LSget(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function LSset(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } }

  var lang = LSget('fb_lang', 'mr');
  var t = function (k) { return (I18N[lang] && I18N[lang][k]) || I18N.mr[k] || k; };
  var L = function (o) { return (o && (o[lang] || o.mr)) || ''; };
  var money = function (n) { return '₹' + Number(n).toLocaleString('en-IN'); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var getProducts = function () { return DEFAULT_PRODUCTS; };
  var findP = function (id) { return getProducts().find(function (p) { return p.id === id; }); };
  var catOf = function (id) { return CATEGORIES.find(function (c) { return c.id === id; }) || CATEGORIES[0]; };
  var waLink = function (msg) { return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(msg); };
  var renderers = [];
  var cartHooks = [];

  /* ---------- icons ---------- */
  var IC = {
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 21l1.65-4.9A9 9 0 1 1 8 19.4z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1.5-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z" fill="currentColor" stroke="none"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.800 19.800 0 0 1-8.600-3.100 19.500 19.500 0 0 1-6-6A19.800 19.800 0 0 1 2.100 4.200 2 2 0 0 1 4.100 2h3a2 2 0 0 1 2 1.700c.1 1 .4 1.900.7 2.800a2 2 0 0 1-.5 2.100L8.100 9.900a16 16 0 0 0 6 6l1.300-1.300a2 2 0 0 1 2.100-.4c.9.300 1.800.6 2.800.7a2 2 0 0 1 1.700 2z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="m12 2 3.100 6.300 6.900 1-5 4.900 1.200 6.800L12 17.800 5.800 21l1.200-6.800-5-4.900 6.900-1z"/></svg>',
    tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.600 13.400 13.400 20.600a2 2 0 0 1-2.800 0L2 12V2h10l8.600 8.600a2 2 0 0 1 0 2.800z"/><circle cx="7" cy="7" r="1.500"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z"/><circle cx="5.500" cy="18.500" r="2.500"/><circle cx="18.500" cy="18.500" r="2.500"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M20.800 4.600a5.500 5.500 0 0 0-7.800 0L12 5.700l-1-1.100a5.500 5.500 0 0 0-7.800 7.800l1 1.100L12 21.200l7.800-7.700 1-1.100a5.500 5.500 0 0 0 0-7.800z"/></svg>',
    down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.500" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>'
  };
  var LOGO = '<img class="logo-img" src="images/logo.png" alt="फटाका बाजार">';

  /* ---------- shell: header, footer, drawer, modal ---------- */
  var NAV = [['index.html', 'nav_home', 'home'], ['about.html', 'nav_about', 'about'], ['products.html', 'nav_products', 'products'], ['contact.html', 'nav_contact', 'contact']];
  function searchBox(cls) {
    return '<div class="search ' + cls + '"><input type="search" data-i18n-ph="search_ph" autocomplete="off"><button type="button" aria-label="search">' + IC.search + '</button><div class="suggest"></div></div>';
  }
  function buildShell() {
    var navHtml = NAV.map(function (n) {
      var active = (page === n[2] || (page === 'category' && n[2] === 'products')) ? ' active' : '';
      return '<a class="' + active + '" href="' + n[0] + '" data-i18n="' + n[1] + '"></a>';
    }).join('');
    var h = $('#site-header');
    if (h) h.outerHTML = '<header class="site-header" id="hdr"><div class="container hdr-in">' +
      '<a class="brand" href="index.html" aria-label="Fataka Bazaar">' + LOGO + '</a>' +
      '<nav class="nav" id="nav">' + navHtml + searchBox('mobile-search') + '</nav>' +
      '<div class="hdr-actions">' + searchBox('') +
      '<button class="lang-btn" id="langBtn" type="button" aria-label="Translate">' + IC.globe + '<span>English</span></button>' +
      '<button class="icon-btn" id="cartBtn" type="button" aria-label="Cart">' + IC.bag + '<b class="badge" id="badge">0</b></button>' +
      '<a class="icon-btn wa" href="' + waLink('🙏 ' + CONFIG.shop.mr) + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + IC.wa + '</a>' +
      '<button class="icon-btn burger" id="burger" type="button" aria-label="Menu">' + IC.menu + '</button>' +
      '</div></div></header>';

    var f = $('#site-footer');
    var catLinks = CATEGORIES.map(function (c) { return '<li><a href="category.html?cat=' + c.id + '" class="ftcat" data-cat="' + c.id + '"></a></li>'; }).join('');
    if (f) f.outerHTML = '<footer class="site-footer">' +
      '<div class="ft-cta"><div class="container"><div><h3 data-i18n="ft_cta_t"></h3><p data-i18n="ft_cta_p"></p></div><a class="btn btn-wa" target="_blank" rel="noopener" href="' + waLink('🙏 ' + CONFIG.shop.mr) + '">' + IC.wa.replace('<svg', '<svg width="20" height="20"') + ' WhatsApp</a></div></div>' +
      '<div class="container ft-grid">' +
      '<div class="ft-about"><a class="brand" href="index.html">' + LOGO + '<div>फटाका बाजार<small>FATAKA BAZAAR</small></div></a><p data-i18n="ft_about"></p><p style="color:var(--gold);font-weight:700" data-i18n="since"></p></div>' +
      '<div><h4 data-i18n="ft_links"></h4><ul>' + NAV.map(function (n) { return '<li><a href="' + n[0] + '" data-i18n="' + n[1] + '"></a></li>'; }).join('') + '<li><a href="cart.html" data-i18n="nav_cart"></a></li></ul></div>' +
      '<div class="ft-cats"><h4 data-i18n="ft_cats"></h4><ul class="ft-catlist">' + catLinks + '</ul></div>' +
      '<div class="ft-contact"><h4 data-i18n="ft_contact"></h4>' +
      '<div class="ft-line">' + IC.pin + '<span><b data-i18n="br1"></b>: <span data-i18n="b1a"></span></span></div>' +
      '<div class="ft-line">' + IC.pin + '<span><b data-i18n="br2"></b>: <span data-i18n="b2a"></span></span></div>' +
      '<div class="ft-line">' + IC.phone + '<span>' + CONFIG.phones.map(function (n) { return '<a href="tel:+91' + n + '">' + n + '</a>'; }).join(' / ') + '</span></div>' +
      '<div class="ft-line">' + IC.clock + '<span id="ftHours"></span></div></div>' +
      '</div><div class="ft-bottom"><div class="container"><span class="tip" data-i18n="ft_tip"></span><span data-i18n="ft_safe"></span><br><span data-i18n="ft_copy"></span></div></div></footer>' +
      '<a class="wa-float" target="_blank" rel="noopener" href="' + waLink('🙏 ' + CONFIG.shop.mr) + '" aria-label="WhatsApp">' + IC.wa + '</a>';

    var shell = document.createElement('div');
    shell.innerHTML = '<div class="overlay" id="overlay"></div>' +
      '<aside class="drawer" id="drawer" aria-label="Cart"><div class="drawer-head"><h3 data-i18n="dr_title"></h3><button class="x-btn" data-close type="button" aria-label="close">✕</button></div>' +
      '<div class="drawer-body" id="drawerBody"></div>' +
      '<div class="drawer-foot" id="drawerFoot"><div class="sum-row"><span data-i18n="sum_sub"></span><b id="dSub"></b></div><div class="sum-row disc" id="dDiscRow"><span data-i18n="sum_disc"></span><b id="dDisc"></b></div><div class="sum-row total"><span data-i18n="sum_total"></span><b id="dTotal"></b></div>' +
      '<div class="btn-row"><a class="btn btn-outline" href="cart.html" data-i18n="dr_view"></a><a class="btn btn-gold" href="cart.html#details" data-i18n="dr_checkout"></a></div></div></aside>' +
      '<div class="modal" id="pModal"><div class="modal-box"><button class="x-btn" data-close type="button" aria-label="close">✕</button><div class="m-grid" id="modalBody"></div></div></div>' +
      '<div class="modal thanks" id="thanks"><div class="modal-box"><h3 data-i18n="ty_t"></h3><p id="thanksP"></p><button class="btn btn-gold" id="thanksBtn" type="button" data-i18n="ty_btn"></button><div><span class="diya"></span><span class="diya"></span><span class="diya"></span></div></div></div>' +
      '<div class="toast" id="toast"></div>';
    while (shell.firstChild) document.body.appendChild(shell.firstChild);
  }

  /* ---------- toast ---------- */
  var toastTimer;
  function toast(msg, bad) {
    var el = $('#toast'); el.textContent = msg; el.className = 'toast show' + (bad ? ' bad' : '');
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { el.className = 'toast'; }, 2200);
  }

  /* ---------- cart ---------- */
  var cart = LSget('fb_cart', {});
  var coupon = LSget('fb_coupon', '');
  function saveCart() {
    LSset('fb_cart', cart); LSset('fb_coupon', coupon);
    updateBadge(true); renderDrawer(); cartHooks.forEach(function (f) { f(); });
  }
  function addToCart(id, q) { cart[id] = Math.min((cart[id] || 0) + (q || 1), 999); saveCart(); }
  function setQty(id, q) { if (q <= 0) delete cart[id]; else cart[id] = Math.min(q, 999); saveCart(); }
  function cartItems() {
    var ps = getProducts(), out = [];
    Object.keys(cart).forEach(function (id) {
      var p = ps.find(function (x) { return x.id === id; });
      if (p && p.price) out.push({ p: p, q: cart[id], line: p.price * cart[id] });
    });
    return out;
  }
  function nextTier(sub) { return CONFIG.discountTiers.slice().sort(function (a, b) { return a.min - b.min; }).find(function (d) { return sub < d.min; }); }
  function totals() {
    var items = cartItems();
    var sub = items.reduce(function (a, i) { return a + i.line; }, 0);
    var pct = 0; CONFIG.discountTiers.forEach(function (d) { if (sub >= d.min) pct = Math.max(pct, d.pct); });
    var cp = (coupon && CONFIG.coupons[coupon]) || 0;
    var disc = Math.round(sub * (pct + cp) / 100);
    return { items: items, sub: sub, pct: pct, cpct: cp, disc: disc, total: sub - disc, count: items.reduce(function (a, i) { return a + i.q; }, 0) };
  }
  function updateBadge(bump) {
    var b = $('#badge'); if (!b) return;
    var n = Object.keys(cart).reduce(function (a, k) { return a + cart[k]; }, 0);
    b.textContent = n; b.style.display = n ? '' : 'none';
    if (bump) { b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); }
  }
  function cartRow(i) {
    return '<div class="ci" data-id="' + i.p.id + '"><div class="ci-img">' + productArt(i.p) + '</div><div class="ci-info"><b>' + esc(L(i.p)) + '</b><span>' + money(i.p.price) + '</span>' +
      '<div class="qty"><button type="button" data-q="-1" aria-label="-">−</button><em>' + i.q + '</em><button type="button" data-q="1" aria-label="+">+</button></div></div>' +
      '<div class="ci-end"><button class="rm" type="button" data-rm aria-label="' + t('remove') + '">✕</button><strong>' + money(i.line) + '</strong></div></div>';
  }
  function renderDrawer() {
    var box = $('#drawerBody'); if (!box) return;
    var tot = totals();
    if (!tot.items.length) {
      box.innerHTML = '<div class="empty"><p>' + t('cart_empty') + '</p><a class="btn btn-gold" href="products.html">' + t('shop_now') + '</a></div>';
      $('#drawerFoot').style.display = 'none'; return;
    }
    $('#drawerFoot').style.display = '';
    box.innerHTML = tot.items.map(cartRow).join('');
    $('#dSub').textContent = money(tot.sub);
    $('#dDiscRow').style.display = tot.disc ? '' : 'none';
    $('#dDisc').textContent = '-' + money(tot.disc);
    $('#dTotal').textContent = money(tot.total);
  }
  function openDrawer() { closeModal(); document.body.classList.add('drawer-open'); }
  function closeDrawer() { document.body.classList.remove('drawer-open'); }

  /* ---------- product modal ---------- */
  function enqMsgProduct(p) {
    return '🪔 ' + L(CONFIG.shop) + '\n' + (lang === 'mr' ? 'चौकशी: ' : 'Enquiry: ') + L(p) + (p.price ? ' (' + money(p.price) + ')' : '') + '\n🙏';
  }
  function openModal(id) {
    var p = findP(id); if (!p) return;
    var c = catOf(p.cat), q = 1;
    $('#modalBody').innerHTML = '<div class="m-img">' + productArt(p, true) + '</div><div class="m-info"><span class="chip">' + esc(L(c)) + '</span><h3>' + esc(L(p)) + '</h3>' +
      '<div class="m-price">' + (p.price ? money(p.price) : t('price_ask')) + '</div><p>' + esc(describe(p, lang)) + '</p>' +
      (p.price ? '<div class="m-row"><div class="qty"><button type="button" data-m="-1">−</button><em id="mq">1</em><button type="button" data-m="1">+</button></div><button class="btn btn-gold" id="mAdd" type="button">' + t('add_cart') + '</button></div>' : '') +
      '<a class="btn btn-wa" target="_blank" rel="noopener" href="' + waLink(enqMsgProduct(p)) + '">' + t('enquire_wa') + '</a></div>';
    $('#pModal').classList.add('show'); document.body.classList.add('modal-open');
    $('#modalBody').onclick = function (e) {
      var b = e.target.closest('[data-m]');
      if (b) { q = Math.max(1, Math.min(99, q + parseInt(b.dataset.m, 10))); $('#mq').textContent = q; return; }
      if (e.target.closest('#mAdd')) { addToCart(id, q); closeModal(); toast(t('added')); openDrawer(); }
    };
  }
  function closeModal() { $('#pModal').classList.remove('show'); $('#thanks').classList.remove('show'); document.body.classList.remove('modal-open'); }

  /* ---------- product card ---------- */
  function card(p) {
    var c = catOf(p.cat);
    return '<article class="p-card reveal" data-id="' + p.id + '" tabindex="0"><div class="p-img">' + productArt(p) + '<span class="p-tag">' + esc(L(c)) + '</span></div>' +
      '<div class="p-body"><h3>' + esc(L(p)) + '</h3><div class="p-price">' + (p.est ? '<i class="est">' + t('est') + '</i> ' : '') + (p.price ? money(p.price) : t('price_ask')) + '</div>' +
      (p.price ? '<div class="mini-qty"><button type="button" data-d="-1" aria-label="-">−</button><input value="1" readonly aria-label="qty"><button type="button" data-d="1" aria-label="+">+</button></div><button class="btn btn-gold btn-sm" type="button" data-add>' + t('add_cart') + '</button>'
        : '<button class="btn btn-wa btn-sm" type="button" data-enq>' + t('enquire') + '</button>') + '</div></article>';
  }

  /* ---------- global events ---------- */
  function bindGlobal() {
    document.addEventListener('click', function (e) {
      var el = e.target;
      if (el.closest('[data-close]') || el.id === 'overlay') { closeDrawer(); closeModal(); return; }
      if (el.closest('#cartBtn')) { openDrawer(); return; }
      var pc = el.closest('.p-card');
      if (pc) {
        var id = pc.dataset.id;
        var d = el.closest('[data-d]');
        if (d) { var inp = $('input', pc); inp.value = Math.max(1, Math.min(99, (parseInt(inp.value, 10) || 1) + parseInt(d.dataset.d, 10))); return; }
        if (el.closest('[data-add]')) { addToCart(id, parseInt($('input', pc).value, 10) || 1); toast(t('added')); openDrawer(); return; }
        if (el.closest('[data-enq]')) { window.open(waLink(enqMsgProduct(findP(id))), '_blank'); return; }
        openModal(id); return;
      }
      var row = el.closest('.ci');
      if (row) {
        var rid = row.dataset.id;
        var qb = el.closest('[data-q]');
        if (qb) setQty(rid, (cart[rid] || 0) + parseInt(qb.dataset.q, 10));
        else if (el.closest('[data-rm]')) setQty(rid, 0);
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeDrawer(); closeModal(); }
      if (e.key === 'Enter' && e.target.classList && e.target.classList.contains('p-card')) openModal(e.target.dataset.id);
    });
    var hdr = $('#hdr');
    var onScroll = function () { hdr.classList.toggle('scrolled', window.scrollY > 10); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    $('#burger').onclick = function () { $('#nav').classList.toggle('open'); };
    $$('#nav a').forEach(function (a) { a.addEventListener('click', function () { $('#nav').classList.remove('open'); }); });
    $('#langBtn').onclick = function () { lang = lang === 'mr' ? 'en' : 'mr'; LSset('fb_lang', lang); applyStatic(); renderers.forEach(function (f) { f(); }); observeReveal(); };
    $('#thanksBtn').onclick = function () { closeModal(); if (thanksType === 'order') { cart = {}; coupon = ''; saveCart(); } };
    $$('.search').forEach(initSearch);
  }

  function initSearch(box) {
    var inp = $('input', box), sug = $('.suggest', box);
    inp.addEventListener('input', function () {
      var q = inp.value.toLowerCase().trim();
      if (!q) { sug.classList.remove('show'); return; }
      var res = getProducts().filter(function (p) { return p.mr.toLowerCase().indexOf(q) > -1 || p.en.toLowerCase().indexOf(q) > -1; }).slice(0, 6);
      sug.innerHTML = res.map(function (p) { return '<button type="button" data-pid="' + p.id + '"><span>' + esc(L(p)) + '</span><b>' + (p.price ? money(p.price) : '') + '</b></button>'; }).join('');
      sug.classList.toggle('show', res.length > 0);
    });
    sug.addEventListener('click', function (e) { var b = e.target.closest('[data-pid]'); if (b) { sug.classList.remove('show'); inp.value = ''; openModal(b.dataset.pid); } });
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter' && inp.value.trim()) location.href = 'products.html?q=' + encodeURIComponent(inp.value.trim()); });
    $('button', box).addEventListener('click', function () { if (inp.value.trim()) location.href = 'products.html?q=' + encodeURIComponent(inp.value.trim()); });
    document.addEventListener('click', function (e) { if (!box.contains(e.target)) sug.classList.remove('show'); });
  }

  /* ---------- language ---------- */
  function applyStatic() {
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(function (e) { e.innerHTML = t(e.dataset.i18n); });
    $$('[data-i18n-ph]').forEach(function (e) { e.placeholder = t(e.dataset.i18nPh); });
    var lb = $('#langBtn span'); if (lb) lb.textContent = lang === 'mr' ? 'English' : 'मराठी';
    $$('.ftcat').forEach(function (a) { a.textContent = L(catOf(a.dataset.cat)); });
    var fh = $('#ftHours'); if (fh) fh.textContent = L(CONFIG.hours);
    document.title = (page === 'category' ? L(catOf(qs.get('cat') || 'crackers')) : t('title_' + page)) + ' | ' + L(CONFIG.shop);
    renderDrawer();
  }

  /* ---------- reveal ---------- */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }); }, { threshold: .08 }) : null;
  function observeReveal() { $$('.reveal:not(.in)').forEach(function (el) { io ? io.observe(el) : el.classList.add('in'); }); }

  /* ---------- fireworks canvas ---------- */
  function fireworks(canvas, cols) {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var ctx = canvas.getContext('2d'), W, H, parts = [], rockets = [], run = true, last = 0;
    cols = cols || ['#ffc61a', '#ff3b5c', '#8b5cf6', '#38bdf8', '#fb923c', '#ffffff'];
    function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; }
    resize(); window.addEventListener('resize', resize);
    function launch() { rockets.push({ x: W * (.1 + Math.random() * .8), y: H, vx: (Math.random() - .5) * 1.2, vy: -(H / 85 + Math.random() * 3), ty: H * (.12 + Math.random() * .35) }); }
    function burst(x, y) {
      var c = cols[Math.random() * cols.length | 0], n = 45 + (Math.random() * 30 | 0);
      for (var i = 0; i < n; i++) { var a = Math.PI * 2 * i / n, s = 1 + Math.random() * 3.2; parts.push({ x: x, y: y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, c: c }); }
    }
    function frame(ts) {
      if (!run) return;
      requestAnimationFrame(frame);
      ctx.globalCompositeOperation = 'destination-out'; ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'lighter';
      if (ts - last > 1100) { launch(); last = ts; }
      rockets = rockets.filter(function (r) {
        r.x += r.vx; r.y += r.vy; r.vy *= .985;
        ctx.fillStyle = '#ffe9a8'; ctx.beginPath(); ctx.arc(r.x, r.y, 2, 0, 6.3); ctx.fill();
        if (r.y <= r.ty || r.vy > -1.5) { burst(r.x, r.y); return false; } return true;
      });
      parts = parts.filter(function (p) {
        p.x += p.vx; p.y += p.vy; p.vy += .035; p.vx *= .985; p.life -= .014;
        if (p.life <= 0) return false;
        ctx.globalAlpha = p.life; ctx.fillStyle = p.c; ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, 6.3); ctx.fill(); ctx.globalAlpha = 1; return true;
      });
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { var vis = es[0].isIntersecting; if (vis && !run) { run = true; requestAnimationFrame(frame); } if (!vis) run = false; }).observe(canvas);
    }
    requestAnimationFrame(frame);
  }

  /* ---------- WhatsApp message templates ---------- */
  var MSG = {
    mr: { greet: '🪔 *शुभ दिवाळी!* 🪔', order: '*फटाका बाजार होलसेल डेपो* – नवीन ऑर्डर', enq: '*फटाका बाजार होलसेल डेपो* – चौकशी', name: 'नाव', mobile: 'मोबाईल', opt: 'पर्याय', del: 'डिलिव्हरी', pick: 'पिकअप', addr: 'पत्ता', details: 'ऑर्डर तपशील', sub: 'एकूण किंमत', disc: 'सवलत', fin: 'अंतिम रक्कम', note: 'सूचना', subj: 'विषय', msg: 'संदेश', confirm: 'कृपया उपलब्धता, डिलिव्हरी/पिकअप व पेमेंटची माहिती कळवावी.', thxO: '🙏 ऑर्डर दिल्याबद्दल धन्यवाद! आपणास व आपल्या परिवारास दिवाळीच्या हार्दिक शुभेच्छा! 🎆', thxE: '🙏 चौकशी केल्याबद्दल धन्यवाद! आपणास व आपल्या परिवारास दिवाळीच्या हार्दिक शुभेच्छा! 🎆' },
    en: { greet: '🪔 *Happy Diwali!* 🪔', order: '*Fataka Bazaar Wholesale Depot* – New Order', enq: '*Fataka Bazaar Wholesale Depot* – Enquiry', name: 'Name', mobile: 'Mobile', opt: 'Preference', del: 'Delivery', pick: 'Pickup', addr: 'Address', details: 'Order details', sub: 'Subtotal', disc: 'Discount', fin: 'Final amount', note: 'Note', subj: 'Subject', msg: 'Message', confirm: 'Please confirm availability, delivery/pickup and payment details.', thxO: '🙏 Thank you for your order! Wishing you and your family a very Happy Diwali! 🎆', thxE: '🙏 Thank you for your enquiry! Wishing you and your family a very Happy Diwali! 🎆' }
  };
  function buildOrderMsg(f, tot) {
    var m = MSG[lang], del = f.mode === 'delivery';
    var lines = tot.items.map(function (i, n) { return (n + 1) + '. ' + L(i.p) + ' × ' + i.q + ' = ' + money(i.line); });
    var out = [m.greet, m.order, '', '👤 ' + m.name + ': ' + f.name, '📞 ' + m.mobile + ': ' + f.mobile, '🚚 ' + m.opt + ': ' + (del ? m.del : m.pick)];
    if (del) out.push('📍 ' + m.addr + ': ' + f.addr);
    out.push('', '🛒 *' + m.details + '*'); out = out.concat(lines);
    out.push('', '💰 ' + m.sub + ': ' + money(tot.sub));
    if (tot.disc) out.push('🎁 ' + m.disc + ' (' + (tot.pct + tot.cpct) + '%): -' + money(tot.disc));
    out.push('✅ *' + m.fin + ': ' + money(tot.total) + '*');
    if (f.note) out.push('', '📝 ' + m.note + ': ' + f.note);
    out.push('', m.confirm, '', m.thxO);
    return out.join('\n');
  }
  function buildEnqMsg(f) {
    var m = MSG[lang];
    return [m.greet, m.enq, '', '👤 ' + m.name + ': ' + f.name, '📞 ' + m.mobile + ': ' + f.mobile, '📌 ' + m.subj + ': ' + f.type, '💬 ' + m.msg + ': ' + f.msg, '', m.thxE].join('\n');
  }
  var thanksType = '';
  function showThanks(type) {
    thanksType = type; $('#thanksP').textContent = t(type === 'order' ? 'ty_order_p' : 'ty_enq_p');
    $('#thanks').classList.add('show'); document.body.classList.add('modal-open');
  }

  /* ---------- forms helper ---------- */
  function fieldErr(inp, msgKey) {
    var f = inp.closest('.field'); if (!f) return;
    f.classList.toggle('err', !!msgKey); $('.em', f).textContent = msgKey ? t(msgKey) : '';
  }
  function validName(inp) { var ok = inp.value.trim().length >= 2; fieldErr(inp, ok ? '' : 'err_name'); return ok; }
  function validMobile(inp) { var ok = /^[6-9]\d{9}$/.test(inp.value.replace(/\D/g, '').slice(-10)) && inp.value.replace(/\D/g, '').length >= 10; fieldErr(inp, ok ? '' : 'err_mobile'); return ok; }

  /* ---------- page: shared renderers ---------- */
  function renderSteps() {
    $$('.steps-grid').forEach(function (el) {
      el.innerHTML = [1, 2, 3, 4, 5].map(function (n) { return '<div class="step reveal"><div class="num">' + n + '</div><h4>' + t('s' + n + 't') + '</h4><p>' + t('s' + n + 'p') + '</p></div>'; }).join('');
    });
  }
  function renderTiers() {
    var el = $('#tiers'); if (!el) return;
    el.innerHTML = CONFIG.discountTiers.map(function (d) { return '<div class="tier reveal"><b>' + d.pct + '%</b><span>' + money(d.min) + '+</span></div>'; }).join('');
  }
  function renderFeatures() {
    var el = $('#featRow'); if (!el) return;
    var items = [[IC.star, 'ft1'], [IC.tag, 'ft2'], [IC.truck, 'ft3'], [IC.shield, 'ft4']];
    el.innerHTML = items.map(function (i) { return '<div class="feat reveal"><div class="ic">' + i[0] + '</div><div><h4>' + t(i[1] + '_t') + '</h4><p>' + t(i[1] + '_p') + '</p></div></div>'; }).join('');
  }
  function catArt(c) { return '<img src="' + c.img + '" alt="" loading="lazy">'; }
  function renderCats() {
    var el = $('#catGrid'); if (!el) return;
    var ps = getProducts();
    el.innerHTML = CATEGORIES.map(function (c) {
      var n = ps.filter(function (p) { return p.cat === c.id; }).length;
      return '<a class="cat-card reveal" style="--c1:' + c.c1 + ';--c2:' + c.c2 + '" href="category.html?cat=' + c.id + '"><div class="cat-art">' + catArt(c) + '</div><h3>' + L(c) + '</h3><p>' + c.d[lang] + '</p><span class="cnt">' + n + ' ' + t('items') + '</span><span class="go">' + t('view_all') + ' →</span></a>';
    }).join('');
  }

  /* ---------- page: home ---------- */
  function initHome() {
    var kinds = ['crackers', 'fancy', 'damu'];
    $$('.slide-art').forEach(function (el, i) { el.innerHTML = catArt(catOf(kinds[i])); });
    var slides = $$('.slide'), dots = $('#dots'), cur = 0, timer;
    dots.innerHTML = slides.map(function (_, i) { return '<button type="button" aria-label="slide ' + (i + 1) + '"></button>'; }).join('');
    var ds = $$('button', dots);
    function go(n) { cur = (n + slides.length) % slides.length; slides.forEach(function (s, i) { s.classList.toggle('active', i === cur); }); ds.forEach(function (d, i) { d.classList.toggle('active', i === cur); }); clearInterval(timer); timer = setInterval(function () { go(cur + 1); }, 5500); }
    ds.forEach(function (d, i) { d.onclick = function () { go(i); }; });
    $('.arrow.prev').onclick = function () { go(cur - 1); };
    $('.arrow.next').onclick = function () { go(cur + 1); };
    var sx = 0, hero = $('#hero');
    hero.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    hero.addEventListener('touchend', function (e) { var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) go(cur + (dx < 0 ? 1 : -1)); });
    go(0);
    renderers.push(renderCats, renderFeatures, renderSteps, renderTiers, function () {
      var el = $('#featGrid'); el.innerHTML = FEATURED_IDS.map(findP).filter(Boolean).map(card).join('');
    });
  }

  /* ---------- page: products & category ---------- */
  function initCatalog() {
    var isCat = page === 'category';
    var catId = isCat ? (CATEGORIES.some(function (c) { return c.id === qs.get('cat'); }) ? qs.get('cat') : 'crackers') : '';
    var query = (qs.get('q') || '').toLowerCase().trim();
    var pq = $('#pq'); if (pq) pq.value = qs.get('q') || '';
    var sortEl = $('#sort');
    function filt() {
      var list = getProducts();
      if (isCat) list = list.filter(function (p) { return p.cat === catId; });
      if (query) list = list.filter(function (p) { return p.mr.toLowerCase().indexOf(query) > -1 || p.en.toLowerCase().indexOf(query) > -1; });
      var s = sortEl.value;
      if (s === 'low') list = list.slice().sort(function (a, b) { return (a.price || 1e9) - (b.price || 1e9); });
      if (s === 'high') list = list.slice().sort(function (a, b) { return (b.price || 0) - (a.price || 0); });
      if (s === 'az') list = list.slice().sort(function (a, b) { return L(a).localeCompare(L(b)); });
      return list;
    }
    function render() {
      var grid = $('#catalog'), list = filt();
      if (!isCat) {
        var chips = '<span class="chip active">' + t('all') + '</span>' + CATEGORIES.map(function (c) { return '<a class="chip" href="category.html?cat=' + c.id + '">' + L(c) + '</a>'; }).join('');
        $('#chips').innerHTML = chips;
      } else {
        var c = catOf(catId);
        $('#catTitle').innerHTML = L(c); $('#catDesc').textContent = c.d[lang];
        $('#chips').innerHTML = '<a class="chip" href="products.html">← ' + t('back_all') + '</a>';
        $('#otherCats').innerHTML = CATEGORIES.filter(function (x) { return x.id !== catId; }).map(function (x) {
          return '<a class="cat-card reveal" style="--c1:' + x.c1 + ';--c2:' + x.c2 + '" href="category.html?cat=' + x.id + '"><div class="cat-art">' + catArt(x) + '</div><h3>' + L(x) + '</h3><span class="go">' + t('view_all') + ' →</span></a>';
        }).join('');
      }
      if (!list.length) { grid.innerHTML = '<div class="empty">' + t('no_result') + '</div>'; return; }
      var tb = $('.toolbar'); if (tb) tb.style.display = (!isCat && !query) ? 'none' : '';
      if (!isCat && !query) {
        grid.innerHTML = '<div class="cat-grid">' + CATEGORIES.map(function (c) {
          var n = getProducts().filter(function (p) { return p.cat === c.id; }).length;
          return '<a class="cat-card reveal" style="--c1:' + c.c1 + ';--c2:' + c.c2 + '" href="category.html?cat=' + c.id + '"><div class="cat-art">' + catArt(c) + '</div><h3>' + L(c) + '</h3><p>' + c.d[lang] + '</p><span class="cnt">' + n + ' ' + t('items') + '</span><span class="go">' + t('view_all') + ' →</span></a>';
        }).join('') + '</div>';
      } else grid.innerHTML = '<div class="p-grid pc">' + list.map(card).join('') + '</div>';
      observeReveal();
    }
    sortEl.onchange = render;
    pq.addEventListener('input', function () { query = pq.value.toLowerCase().trim(); render(); });
    renderers.push(function () {
      var opts = [['default', 'sort_def'], ['low', 'sort_low'], ['high', 'sort_high'], ['az', 'sort_az']], cv = sortEl.value;
      sortEl.innerHTML = opts.map(function (o) { return '<option value="' + o[0] + '">' + t(o[1]) + '</option>'; }).join(''); sortEl.value = cv || 'default';
      render(); renderSteps();
    });
  }

  /* ---------- page: cart ---------- */
  function initCart() {
    var form = { name: $('#cName'), mobile: $('#cMobile'), addr: $('#cAddr'), note: $('#cNote') };
    var saved = LSget('fb_cust', {});
    form.name.value = saved.name || ''; form.mobile.value = saved.mobile || ''; form.addr.value = saved.addr || '';
    function mode() { return ($('input[name=mode]:checked') || {}).value || 'delivery'; }
    function toggleAddr() { $('#addrWrap').hidden = mode() !== 'delivery'; }
    $$('input[name=mode]').forEach(function (r) { r.onchange = toggleAddr; }); toggleAddr();
    function render() {
      var tot = totals(), has = tot.items.length > 0;
      $('#cartEmpty').hidden = has; $('#cartLayout').hidden = !has;
      $('#cartList').innerHTML = tot.items.map(cartRow).join('');
      $('#sumCount').textContent = tot.count; $('#sumSub').textContent = money(tot.sub);
      $('#rowDisc').hidden = !tot.disc; $('#sumDiscLbl').textContent = t('sum_disc') + ' (' + (tot.pct + tot.cpct) + '%)'; $('#sumDisc').textContent = '-' + money(tot.disc);
      $('#sumTotal').textContent = money(tot.total);
      var nt = nextTier(tot.sub), hint = $('#hint');
      if (!has) hint.hidden = true;
      else { hint.hidden = false; hint.textContent = nt ? t('tier_hint').replace('{amt}', money(nt.min - tot.sub)).replace('{pct}', nt.pct) : t('tier_got'); }
      if (coupon) { $('#cMsg').textContent = t('coupon_ok').replace('{p}', CONFIG.coupons[coupon] || 0); $('#cMsg').style.color = '#6ee7a1'; $('#coupon').value = coupon; }
      var sg = $('#suggGrid');
      if (sg) sg.innerHTML = getProducts().filter(function (p) { return p.price && !cart[p.id] && FEATURED_IDS.indexOf(p.id) > -1; }).slice(0, 4).map(card).join('');
      observeReveal();
    }
    cartHooks.push(render); renderers.push(render);
    $('#applyCoupon').onclick = function () {
      var code = $('#coupon').value.trim().toUpperCase();
      if (CONFIG.coupons[code]) { coupon = code; saveCart(); } else { coupon = ''; saveCart(); $('#cMsg').textContent = t('coupon_bad'); $('#cMsg').style.color = '#ff8da1'; }
    };
    $('#clearCart').onclick = function () { cart = {}; coupon = ''; saveCart(); };
    form.name.addEventListener('blur', function () { validName(form.name); });
    form.mobile.addEventListener('blur', function () { validMobile(form.mobile); });
    $('#orderBtn').onclick = function () {
      var ok = validName(form.name), ok2 = validMobile(form.mobile), ok3 = true;
      if (mode() === 'delivery') { ok3 = form.addr.value.trim().length >= 5; fieldErr(form.addr, ok3 ? '' : 'err_addr'); }
      if (!(ok && ok2 && ok3)) { toast(t(!ok ? 'err_name' : !ok2 ? 'err_mobile' : 'err_addr'), true); return; }
      var tot = totals(); if (!tot.items.length) return;
      var f = { name: form.name.value.trim(), mobile: form.mobile.value.trim(), addr: form.addr.value.trim(), note: form.note.value.trim(), mode: mode() };
      LSset('fb_cust', { name: f.name, mobile: f.mobile, addr: f.addr });
      window.open(waLink(buildOrderMsg(f, tot)), '_blank');
      showThanks('order');
    };
    if (location.hash === '#details') setTimeout(function () { var d = $('#details'); if (d) d.scrollIntoView(); }, 400);
  }

  /* ---------- page: contact ---------- */
  function initContact() {
    var n = $('#eName'), m = $('#eMobile'), msg = $('#eMsg'), ty = $('#eType');
    renderers.push(function () {
      var cv = ty.value || '0';
      ty.innerHTML = [['type_enq'], ['type_bulk'], ['type_other']].map(function (o, i) { return '<option value="' + i + '">' + t(o[0]) + '</option>'; }).join(''); ty.value = cv;
    });
    n.addEventListener('blur', function () { validName(n); });
    m.addEventListener('blur', function () { validMobile(m); });
    $('#enqForm').addEventListener('submit', function (e) {
      e.preventDefault();
      var a = validName(n), b = validMobile(m), c = msg.value.trim().length >= 2; fieldErr(msg, c ? '' : 'err_msg');
      if (!(a && b && c)) { toast(t(!a ? 'err_name' : !b ? 'err_mobile' : 'err_msg'), true); return; }
      window.open(waLink(buildEnqMsg({ name: n.value.trim(), mobile: m.value.trim(), type: ty.options[ty.selectedIndex].text, msg: msg.value.trim() })), '_blank');
      showThanks('enq'); e.target.reset();
    });
    renderers.push(function () { var h = $('#hoursTxt'); if (h) h.textContent = L(CONFIG.hours); });
    var BR = ['Sai+Hospital+Sane+Chowk+Pune', 'Cotton+King+Krishnanagar+Pune'], mf = $('#mapFrame');
    function showMap(i) { if (!mf) return; mf.src = 'https://maps.google.com/maps?q=' + BR[i] + '&z=16&output=embed'; $$('.mtab').forEach(function (b, k) { b.classList.toggle('active', k === i); }); }
    $$('.mtab').forEach(function (b, k) { b.onclick = function () { showMap(k); }; }); showMap(0);
    var ph = $('#phones'); if (ph) ph.innerHTML = CONFIG.phones.map(function (p) { return '<a href="tel:+91' + p + '">+91 ' + p + '</a>'; }).join(' / ');
  }

  /* ---------- page: about counters ---------- */
  function initAbout() {
    var cs = $$('[data-count]');
    var cio = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return; cio.unobserve(en.target);
        var el = en.target, end = parseFloat(el.dataset.count), suf = el.dataset.suffix || '', start = performance.now();
        (function tick(now) { var p = Math.min(1, (now - start) / 1400); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suf; if (p < 1) requestAnimationFrame(tick); })(start);
      });
    }, { threshold: .4 });
    cs.forEach(function (c) { cio.observe(c); });
    var art = $('#aboutArt'); if (art) art.innerHTML = '<img src="images/banners/about.svg" alt="फटाका बाजार">';
    renderers.push(renderFeatures);
  }

  /* ---------- boot ---------- */
  buildShell();
  bindGlobal();
  $$('.fw-canvas').forEach(function (c) { fireworks(c); });
  if (page === 'home') initHome();
  if (page === 'products' || page === 'category') initCatalog();
  if (page === 'cart') initCart();
  if (page === 'contact') initContact();
  if (page === 'about') initAbout();
  applyStatic(); updateBadge(false);
  renderers.forEach(function (f) { f(); });
  observeReveal();
})();
