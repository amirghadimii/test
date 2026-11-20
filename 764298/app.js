/* 764298 International SEO diagnosis plan — checklist state, progress ring, per-section progress, search filter */
(function () {
  'use strict';
  var KEY = 'mosaleh7-intl-seo-progress-v1';
  var FA = '۰۱۲۳۴۵۶۷۸۹';
  function fa(n) { return String(n).replace(/[0-9]/g, function (d) { return FA[+d]; }); }

  var checks = Array.prototype.slice.call(document.querySelectorAll('.chk'));
  var total = checks.length;

  var state = {};
  try { state = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { state = {}; }
  checks.forEach(function (c, i) { c.checked = !!state[i]; });

  var ringFg = document.querySelector('.ring-fg');
  var CIRC = 226.2;
  var ringPct = document.getElementById('ringPct');
  var ringDone = document.getElementById('ringDone');
  var kpiPct = document.getElementById('kpiPct');
  var kpiDone = document.getElementById('kpiDone');

  function update() {
    var doneTotal = 0;
    var perSec = {};
    checks.forEach(function (c) {
      var s = c.getAttribute('data-sec');
      perSec[s] = perSec[s] || { done: 0, all: 0 };
      perSec[s].all++;
      if (c.checked) { perSec[s].done++; doneTotal++; }
      c.closest('.row').classList.toggle('done', c.checked);
    });
    var pct = total ? Math.round(doneTotal / total * 100) : 0;
    ringFg.style.strokeDashoffset = String(CIRC * (1 - pct / 100));
    ringPct.textContent = pct + '%';
    ringDone.textContent = fa(doneTotal);
    kpiPct.textContent = pct + '%';
    kpiDone.textContent = fa(doneTotal);

    Object.keys(perSec).forEach(function (s) {
      var d = perSec[s], p = d.all ? Math.round(d.done / d.all * 100) : 0;
      var sec = document.querySelector('.sec[data-sec="' + s + '"]');
      if (sec) {
        sec.querySelector('.bar-fill').style.width = p + '%';
        sec.querySelector('.bar-pct').textContent = p + '%';
        sec.querySelector('.done-count').textContent = fa(d.done);
      }
      var nav = document.querySelector('.nav-item[data-sec="' + s + '"] .nav-done');
      if (nav) nav.textContent = d.done;
    });

    var out = {};
    checks.forEach(function (c, i) { if (c.checked) out[i] = 1; });
    try { localStorage.setItem(KEY, JSON.stringify(out)); } catch (e) {}
  }

  checks.forEach(function (c) { c.addEventListener('change', update); });
  update();

  /* ---- search filter ---- */
  var input = document.getElementById('searchInput');
  var empty = document.getElementById('emptyState');
  input.addEventListener('input', function () {
    var q = input.value.trim();
    var anyVisible = false;
    document.querySelectorAll('.sec').forEach(function (sec) {
      var visible = 0;
      sec.querySelectorAll('.row').forEach(function (row) {
        var hit = !q || row.getAttribute('data-text').indexOf(q) !== -1;
        row.style.display = hit ? '' : 'none';
        if (hit) visible++;
      });
      sec.style.display = visible ? '' : 'none';
      if (visible) anyVisible = true;
    });
    empty.hidden = anyVisible;
  });

  /* ---- nav active state on scroll ---- */
  var navItems = document.querySelectorAll('.nav-item');
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        navItems.forEach(function (n) {
          n.classList.toggle('active', n.getAttribute('data-sec') === en.target.getAttribute('data-sec'));
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  document.querySelectorAll('.sec').forEach(function (s) { obs.observe(s); });

  /* ---- print ---- */
  function doPrint() { window.print(); }
  document.getElementById('printBtn').addEventListener('click', doPrint);
  document.getElementById('printBtnSide').addEventListener('click', doPrint);
})();
