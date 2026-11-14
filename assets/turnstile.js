/* =====================================================================
 * Caelus Studio 商店 · Cloudflare Turnstile 人机验证（公共模块）
 * ---------------------------------------------------------------------
 * 【上线前必做】把下面 SITEKEY 换成 Cloudflare 后台为 shop.caelus.top
 *   创建的正式 Site Key。当前值是 Cloudflare 官方「测试用」Key
 *   （永远通过、widget 会显示测试标识），只用于联调，没有真实防护力。
 *   获取路径：Cloudflare Dashboard → Turnstile → Add widget →
 *   Hostname 填 shop.caelus.top → 复制 Site Key（Secret Key 只放服务端）。
 *
 * 【安全说明】本模块只在浏览器侧确认「已通过验证」，并把一次性 token
 *   随订单一起提交给 ORDER_API。真正防刷必须在服务端用 Secret Key 调用
 *   https://challenges.cloudflare.com/turnstile/v0/siteverify 校验 token；
 *   纯静态站点自身无法完成这一步，请勿把 Secret Key 写进前端。
 *
 * 【容灾】FAIL_OPEN = true 时，验证脚本加载失败仍允许提交（等于放弃防护），
 *   仅供 challenges.cloudflare.com 无法访问的地区临时应急，默认 false。
 * ===================================================================== */
(function () {
  'use strict';

  var SITEKEY = '1x00000000000000000000AA'; // ← 换成正式 Site Key
  var FAIL_OPEN = false;
  var TIMEOUT = 10000;
  var SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

  var MSG = {
    loading: '正在加载人机验证…',
    need: '请先完成人机验证。',
    expired: '人机验证已过期，请重新验证。',
    failed: '人机验证加载失败，请刷新页面后重试。'
  };

  var state = 'loading';   // loading | ready | failed
  var widgets = [];        // { el, id }

  function curLang() {
    try {
      var l = localStorage.getItem('caelus_lang');
      if (l === 'zh-TW' || l === 'en' || l === 'zh-CN') return l;
    } catch (_) {}
    return 'auto';
  }
  function curTheme() {
    var t = document.documentElement.getAttribute('data-theme');
    return t === 'light' ? 'light' : (t === 'dark' ? 'dark' : 'auto');
  }
  function status(el, text) {
    if (!el) return;
    el.innerHTML = '';
    if (!text) return;
    var p = document.createElement('p');
    p.className = 'cf-status';
    p.textContent = text;
    el.appendChild(p);
  }
  function paint() {
    for (var i = 0; i < widgets.length; i++) {
      var w = widgets[i];
      if (state === 'ready') { if (!w.id) status(w.el, ''); }
      else status(w.el, state === 'loading' ? MSG.loading : MSG.failed);
    }
  }
  function renderAll() {
    if (state !== 'ready' || !window.turnstile) { paint(); return; }
    widgets.forEach(function (w) {
      try { if (w.id) window.turnstile.remove(w.id); } catch (_) {}
      w.id = null;
      status(w.el, '');
      try {
        w.id = window.turnstile.render(w.el, {
          sitekey: SITEKEY,
          theme: curTheme(),
          language: curLang(),
          size: 'flexible',
          'expired-callback': function () {
            try { window.turnstile.reset(w.id); } catch (_) {}
          },
          'error-callback': function () { status(w.el, MSG.failed); }
        });
      } catch (_) {
        w.id = null;
        status(w.el, MSG.failed);
      }
    });
  }
  function setState(s) {
    state = s;
    if (s === 'ready') renderAll(); else paint();
  }

  /* 提交前统一校验：返回 { ok, token, message } */
  function guard() {
    if (state === 'loading') return { ok: false, token: '', message: MSG.loading };
    if (state === 'failed' && !FAIL_OPEN) return { ok: false, token: '', message: MSG.failed };
    var t = '';
    if (window.turnstile && widgets.length && widgets[0].id) {
      try { t = window.turnstile.getResponse(widgets[0].id) || ''; } catch (_) { t = ''; }
    }
    if (state === 'ready' && !t) return { ok: false, token: '', message: MSG.need };
    return { ok: true, token: t, message: '' };
  }
  function reset() {
    if (!window.turnstile) return;
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i].id) { try { window.turnstile.reset(widgets[i].id); } catch (_) {} }
    }
  }
  function mount(el) {
    var target = typeof el === 'string' ? document.getElementById(el) : el;
    if (!target) return null;
    var found = null;
    for (var i = 0; i < widgets.length; i++) { if (widgets[i].el === target) found = widgets[i]; }
    if (!found) { found = { el: target, id: null }; widgets.push(found); }
    if (state === 'ready') renderAll(); else paint();
    return found;
  }

  /* 追加样式：容器与状态文案（不改动原有样式表） */
  var css = document.createElement('style');
  css.textContent =
    '.cf-box{width:100%;max-width:300px;margin:12px auto 4px}' +
    '.cf-box .cf-status{margin:0;text-align:center;font-size:.8rem;line-height:1.5;color:var(--text-muted,#8a8f98)}' +
    '.cf-err{margin:6px auto 0;text-align:center;font-size:.8rem;line-height:1.5;color:#ff6b6b}' +
    '.cf-err[hidden]{display:none}' +
    '.pay-form .cf-box{margin-top:2px}' +
    '.form-grid .cf-box{grid-column:1/-1}';
  document.head.appendChild(css);

  window.CaelusTurnstile = { msg: MSG, mount: mount, guard: guard, reset: reset, refresh: renderAll };

  /* 主题 / 语言切换后重新渲染，保持 widget 配色与文案一致 */
  try {
    new MutationObserver(function () {
      if (state === 'ready') { clearTimeout(window.CaelusTurnstile._t); window.CaelusTurnstile._t = setTimeout(renderAll, 150); }
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  } catch (_) {}
  document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'langToggle') {
      clearTimeout(window.CaelusTurnstile._l);
      window.CaelusTurnstile._l = setTimeout(renderAll, 200);
    }
  }, true);

  /* 异步加载 Turnstile 脚本，带超时兜底 */
  if (window.turnstile) { setState('ready'); return; }
  var s = document.createElement('script');
  s.src = SRC;
  s.async = true;
  s.defer = true;
  s.onload = function () { setState(window.turnstile ? 'ready' : 'failed'); };
  s.onerror = function () { setState('failed'); };
  document.head.appendChild(s);
  setTimeout(function () { if (state === 'loading') setState('failed'); }, TIMEOUT);
})();
