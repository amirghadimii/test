(function () {
  "use strict";

  /* Helper: Convert English digits to Persian digits */
  function toFaDigits(val) {
    return String(val).replace(/\d/g, function (d) {
      return "۰۱۲۳۴۵۶۷۸۹"[d];
    });
  }

  /* Helper: Normalize text for Persian/English bilingual search */
  function normalizeSearchText(txt) {
    if (!txt) return "";
    return String(txt)
      .toLowerCase()
      .replace(/[\u200c\u200b\u200e\u200f]/g, " ")
      .replace(/[\u064A\u0649]/g, "ی")
      .replace(/[\u0643]/g, "ک")
      .replace(/google\s*search\s*console/g, "google search console سرچ کنسول")
      .replace(/سرچ\s*کنسول/g, "سرچ کنسول search console")
      .replace(/gsc/g, "gsc سرچ کنسول search console")
      .replace(/\s+/g, " ")
      .trim();
  }

  /* Safe LocalStorage wrapper */
  var STORAGE_KEY = "emsys_seo_audit_764181_checks";
  function saveState(checkedNames) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedNames));
    } catch (e) {
      /* ignore storage quota or sandbox errors */
    }
  }

  function loadState() {
    try {
      var data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  /* -------------------------------------------------------------
     1. Mobile Menu Toggle
     ------------------------------------------------------------- */
  var menuBtn = document.getElementById("menuBtn");
  var nav = document.getElementById("mainNav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("show");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("show");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target) && !menuBtn.contains(e.target) && nav.classList.contains("show")) {
        nav.classList.remove("show");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* -------------------------------------------------------------
     2. Print Buttons
     ------------------------------------------------------------- */
  var printBtn = document.getElementById("printBtn");
  if (printBtn) {
    printBtn.addEventListener("click", function () {
      window.print();
    });
  }

  var bottomPrintBtn = document.getElementById("bottomPrintBtn");
  if (bottomPrintBtn) {
    bottomPrintBtn.addEventListener("click", function () {
      window.print();
    });
  }

  /* -------------------------------------------------------------
     3. Section Accordions
     ------------------------------------------------------------- */
  var panels = Array.from(document.querySelectorAll(".audit-section-panel"));
  panels.forEach(function (panel) {
    var head = panel.querySelector(".panel-header");
    var content = panel.querySelector(".panel-content");
    if (!head || !content) return;

    head.addEventListener("click", function (e) {
      // Don't toggle accordion if clicked on quick action button
      if (e.target.closest(".btn-panel-quick")) return;

      var isCurrentlyOpen = panel.classList.contains("open");
      panel.classList.toggle("open", !isCurrentlyOpen);
      head.setAttribute("aria-expanded", !isCurrentlyOpen ? "true" : "false");
    });

    // Keyboard accessibility for header button
    head.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        if (e.target.closest(".btn-panel-quick")) return;
        e.preventDefault();
        var isCurrentlyOpen = panel.classList.contains("open");
        panel.classList.toggle("open", !isCurrentlyOpen);
        head.setAttribute("aria-expanded", !isCurrentlyOpen ? "true" : "false");
      }
    });
  });

  // Global Expand / Collapse All
  var expandAllBtn = document.getElementById("expandAllBtn");
  var collapseAllBtn = document.getElementById("collapseAllBtn");

  if (expandAllBtn) {
    expandAllBtn.addEventListener("click", function () {
      panels.forEach(function (panel) {
        panel.classList.add("open");
        var head = panel.querySelector(".panel-header");
        if (head) head.setAttribute("aria-expanded", "true");
      });
    });
  }

  if (collapseAllBtn) {
    collapseAllBtn.addEventListener("click", function () {
      panels.forEach(function (panel) {
        panel.classList.remove("open");
        var head = panel.querySelector(".panel-header");
        if (head) head.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* -------------------------------------------------------------
     4. Checklist Progress, Progress Ring & LocalStorage
     ------------------------------------------------------------- */
  var checkboxes = Array.from(document.querySelectorAll('.action-items-list input[type="checkbox"]'));
  var ringIndicator = document.getElementById("ringIndicator");
  var ringPctVal = document.getElementById("ringPctVal");
  var progressCounterText = document.getElementById("progressCounterText");
  var progressSubText = document.getElementById("progressSubText");
  var linearFill = document.getElementById("linearFill");
  var completeToast = document.getElementById("completeToast");
  var totalActions = checkboxes.length;

  // Circumference of SVG circle with radius 36
  var RING_CIRCUMFERENCE = 2 * Math.PI * 36; // ~226.195

  // Restore saved state
  var savedChecked = loadState();
  if (Array.isArray(savedChecked) && savedChecked.length > 0) {
    checkboxes.forEach(function (box, idx) {
      var id = box.name || String(idx);
      if (savedChecked.indexOf(id) !== -1) {
        box.checked = true;
      }
    });
  }

  function updateProgress() {
    var checkedCount = 0;
    var checkedNames = [];

    // Per-panel counters
    panels.forEach(function (panel) {
      var cat = panel.getAttribute("data-cat");
      var panelBoxes = panel.querySelectorAll('.action-items-list input[type="checkbox"]');
      var panelTotal = panelBoxes.length;
      var panelChecked = 0;

      panelBoxes.forEach(function (box, idx) {
        if (box.checked) {
          panelChecked++;
          checkedCount++;
          checkedNames.push(box.name || (cat + "-" + idx));
        }
      });

      var badge = panel.querySelector(".section-counter-badge");
      if (badge) {
        badge.textContent = toFaDigits(panelChecked) + " از " + toFaDigits(panelTotal);
        badge.classList.toggle("all-checked", panelChecked === panelTotal && panelTotal > 0);
      }

      var quickBtn = panel.querySelector(".btn-panel-quick");
      if (quickBtn) {
        if (panelChecked === panelTotal && panelTotal > 0) {
          quickBtn.textContent = "لغو این بخش";
        } else {
          quickBtn.textContent = "انتخاب بخش";
        }
      }
    });

    var pct = totalActions ? Math.round((checkedCount / totalActions) * 100) : 0;
    var remaining = totalActions - checkedCount;

    // Update Progress Ring SVG
    if (ringIndicator) {
      var offset = RING_CIRCUMFERENCE - (pct / 100) * RING_CIRCUMFERENCE;
      ringIndicator.style.strokeDashoffset = offset;
    }

    if (ringPctVal) {
      ringPctVal.textContent = toFaDigits(pct) + "٪";
    }

    if (linearFill) {
      linearFill.style.width = pct + "%";
    }

    if (progressCounterText) {
      progressCounterText.textContent = toFaDigits(checkedCount) + " از " + toFaDigits(totalActions) +
        " اقدام علامت‌زده شد (" + toFaDigits(pct) + "٪)";
    }

    if (progressSubText) {
      if (remaining === 0) {
        progressSubText.textContent = "تمام اقدامات برنامه بررسی شدند. پوشش ۱۰۰٪ اهداف بریف کارفرما.";
      } else {
        progressSubText.textContent = toFaDigits(remaining) + " اقدام باقیمانده جهت بررسی و ارزیابی در فاز صفر و نقشه راه ۹۰ روزه.";
      }
    }

    if (completeToast) {
      completeToast.hidden = !(checkedCount === totalActions && totalActions > 0);
    }

    saveState(checkedNames);
  }

  checkboxes.forEach(function (box) {
    box.addEventListener("change", updateProgress);
  });

  // Select all actions
  var selectAllBtn = document.getElementById("selectAllBtn");
  if (selectAllBtn) {
    selectAllBtn.addEventListener("click", function () {
      checkboxes.forEach(function (b) { b.checked = true; });
      updateProgress();
    });
  }

  // Reset checkboxes
  var resetBtn = document.getElementById("resetChecks");
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      checkboxes.forEach(function (b) { b.checked = false; });
      updateProgress();
    });
  }

  // Per-panel "Select all this section" button
  var panelToggleBtns = document.querySelectorAll(".toggle-phase-checks");
  panelToggleBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var panel = btn.closest(".audit-section-panel");
      if (!panel) return;
      var panelBoxes = Array.from(panel.querySelectorAll('.action-items-list input[type="checkbox"]'));
      var allChecked = panelBoxes.every(function (b) { return b.checked; });
      panelBoxes.forEach(function (b) { b.checked = !allChecked; });
      btn.textContent = allChecked ? "انتخاب بخش" : "لغو این بخش";
      updateProgress();
    });
  });

  /* -------------------------------------------------------------
     5. Category Filter Pills
     ------------------------------------------------------------- */
  var pills = document.querySelectorAll(".pill");
  var emptyMsg = document.getElementById("emptyMsg");
  var searchInput = document.getElementById("actionSearch");

  function applyFilter(filter) {
    pills.forEach(function (p) {
      p.classList.toggle("is-active", p.getAttribute("data-filter") === filter);
    });

    var visiblePanels = 0;
    panels.forEach(function (panel) {
      var cat = panel.getAttribute("data-cat");
      var match = filter === "all" || cat === filter;
      panel.style.display = match ? "" : "none";

      if (match) {
        visiblePanels++;
        // If single category selected, automatically expand it
        if (filter !== "all") {
          panel.classList.add("open");
          var head = panel.querySelector(".panel-header");
          if (head) head.setAttribute("aria-expanded", "true");
        }
      }
    });

    if (emptyMsg) emptyMsg.hidden = visiblePanels !== 0;
  }

  pills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      var filter = pill.getAttribute("data-filter");
      if (searchInput && searchInput.value.trim() !== "") {
        searchInput.value = "";
        if (clearSearchBtn) clearSearchBtn.hidden = true;
        if (searchCount) searchCount.textContent = "";
        document.querySelectorAll(".action-item").forEach(function (item) {
          item.classList.remove("is-hidden");
        });
      }
      applyFilter(filter);
    });
  });

  /* -------------------------------------------------------------
     6. Live Action Search
     ------------------------------------------------------------- */
  var clearSearchBtn = document.getElementById("clearSearch");
  var searchCount = document.getElementById("searchCount");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      var rawQuery = searchInput.value.trim();
      var query = normalizeSearchText(rawQuery);
      if (clearSearchBtn) clearSearchBtn.hidden = rawQuery === "";

      if (rawQuery === "") {
        if (searchCount) searchCount.textContent = "";
        document.querySelectorAll(".action-item").forEach(function (item) {
          item.classList.remove("is-hidden");
        });
        var activePill = document.querySelector(".pill.is-active");
        var activeFilter = activePill ? activePill.getAttribute("data-filter") : "all";
        applyFilter(activeFilter);
        return;
      }

      // Reset filter pills to 'all'
      pills.forEach(function (p) {
        p.classList.toggle("is-active", p.getAttribute("data-filter") === "all");
      });

      var matchedTotal = 0;
      var visiblePanels = 0;

      panels.forEach(function (panel) {
        var items = panel.querySelectorAll(".action-item");
        var panelMatched = 0;

        items.forEach(function (item) {
          var itemText = normalizeSearchText(item.textContent);
          var isMatch = itemText.indexOf(query) !== -1;
          item.classList.toggle("is-hidden", !isMatch);
          if (isMatch) {
            panelMatched++;
            matchedTotal++;
          }
        });

        if (panelMatched > 0) {
          panel.style.display = "";
          visiblePanels++;
          panel.classList.add("open");
          var head = panel.querySelector(".panel-header");
          if (head) head.setAttribute("aria-expanded", "true");
        } else {
          panel.style.display = "none";
        }
      });

      if (searchCount) {
        searchCount.textContent = matchedTotal > 0
          ? toFaDigits(matchedTotal) + " مورد یافت شد"
          : "موردی یافت نشد";
      }

      if (emptyMsg) emptyMsg.hidden = visiblePanels !== 0;
    });

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener("click", function () {
        searchInput.value = "";
        clearSearchBtn.hidden = true;
        if (searchCount) searchCount.textContent = "";
        document.querySelectorAll(".action-item").forEach(function (item) {
          item.classList.remove("is-hidden");
        });
        applyFilter("all");
        searchInput.focus();
      });
    }
  }

  /* -------------------------------------------------------------
     7. Scrollspy & Back to Top
     ------------------------------------------------------------- */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".sys-nav .nav-item");
  var backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Back to top button
    if (backToTop) {
      backToTop.classList.toggle("show", scrollY > 300);
    }

    // Scrollspy
    var currentSectionId = "";
    sections.forEach(function (sec) {
      var top = sec.offsetTop - 100;
      var height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentSectionId = sec.getAttribute("id");
      }
    });

    navLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        var targetId = href.substring(1);
        link.classList.toggle("is-active", targetId === currentSectionId);
      }
    });
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Initial calculation
  updateProgress();

})();
