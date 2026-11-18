(function () {
  "use strict";

  /* Mobile menu */
  var menuBtn = document.getElementById("menuBtn");
  var nav = document.querySelector(".main-nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("show");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") nav.classList.remove("show");
    });
  }

  /* Accordion cards */
  var heads = document.querySelectorAll(".card-head");
  heads.forEach(function (head) {
    var card = head.closest(".card");
    var body = card.querySelector(".card-body");
    if (!body.hidden) card.classList.add("open");
    head.addEventListener("click", function () {
      var expanded = head.getAttribute("aria-expanded") === "true";
      head.setAttribute("aria-expanded", expanded ? "false" : "true");
      body.hidden = expanded;
      card.classList.toggle("open", !expanded);
    });
  });

  /* Phase filter */
  var chips = document.querySelectorAll(".chip");
  var phases = document.querySelectorAll(".phase");
  var emptyMsg = document.getElementById("emptyMsg");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("is-active"); });
      chip.classList.add("is-active");
      var f = chip.getAttribute("data-filter");
      var visible = 0;
      phases.forEach(function (p) {
        var show = f === "all" || p.getAttribute("data-cat") === f;
        p.style.display = show ? "" : "none";
        if (show) visible++;
      });
      if (emptyMsg) emptyMsg.hidden = visible !== 0;
    });
  });

  /* Checklist progress */
  var boxes = document.querySelectorAll('.checklist input[type="checkbox"]');
  var fill = document.getElementById("progressFill");
  var text = document.getElementById("progressText");
  var total = boxes.length;

  function toFaDigits(s) {
    return String(s).replace(/\d/g, function (d) { return "۰۱۲۳۴۵۶۷۸۹"[d]; });
  }
  function updateProgress() {
    var checked = 0;
    boxes.forEach(function (b) { if (b.checked) checked++; });
    var pct = total ? Math.round((checked / total) * 100) : 0;
    if (fill) fill.style.width = pct + "%";
    if (text) {
      text.textContent = toFaDigits(checked) + " از " + toFaDigits(total) +
        " مورد — " + toFaDigits(pct) + "٪";
    }
  }
  boxes.forEach(function (b) { b.addEventListener("change", updateProgress); });

  var resetBtn = document.getElementById("resetChecks");
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      boxes.forEach(function (b) { b.checked = false; });
      updateProgress();
    });
  }
  updateProgress();
})();
