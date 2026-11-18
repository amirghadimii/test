(function () {
  "use strict";

  /* Helper: Convert English digits to Persian digits */
  function toFaDigits(val) {
    return String(val).replace(/\d/g, function (d) {
      return "۰۱۲۳۴۵۶۷۸۹"[d];
    });
  }

  /* Safe LocalStorage wrapper */
  var STORAGE_KEY = "appwebino_seo_764181_checks";
  function saveState(checkedIds) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedIds));
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
     2. Print Button
     ------------------------------------------------------------- */
  var printBtn = document.getElementById("printBtn");
  if (printBtn) {
    printBtn.addEventListener("click", function () {
      window.print();
    });
  }

  /* -------------------------------------------------------------
     3. Accordion Cards
     ------------------------------------------------------------- */
  var cards = document.querySelectorAll(".card.phase");
  cards.forEach(function (card) {
    var head = card.querySelector(".card-head");
    var body = card.querySelector(".card-body");
    if (!head || !body) return;

    // Initial state check
    if (!body.hidden) {
      card.classList.add("open");
      head.setAttribute("aria-expanded", "true");
    } else {
      card.classList.remove("open");
      head.setAttribute("aria-expanded", "false");
    }

    head.addEventListener("click", function () {
      var isExpanded = head.getAttribute("aria-expanded") === "true";
      head.setAttribute("aria-expanded", isExpanded ? "false" : "true");
      body.hidden = isExpanded;
      card.classList.toggle("open", !isExpanded);
    });
  });

  // Global Expand / Collapse All
  var expandAllBtn = document.getElementById("expandAllBtn");
  var collapseAllBtn = document.getElementById("collapseAllBtn");

  if (expandAllBtn) {
    expandAllBtn.addEventListener("click", function () {
      cards.forEach(function (card) {
        var head = card.querySelector(".card-head");
        var body = card.querySelector(".card-body");
        if (head && body) {
          head.setAttribute("aria-expanded", "true");
          body.hidden = false;
          card.classList.add("open");
        }
      });
    });
  }

  if (collapseAllBtn) {
    collapseAllBtn.addEventListener("click", function () {
      cards.forEach(function (card) {
        var head = card.querySelector(".card-head");
        var body = card.querySelector(".card-body");
        if (head && body) {
          head.setAttribute("aria-expanded", "false");
          body.hidden = true;
          card.classList.remove("open");
        }
      });
    });
  }

  /* -------------------------------------------------------------
     4. Checklist Progress & LocalStorage
     ------------------------------------------------------------- */
  var checkboxes = Array.from(document.querySelectorAll('.checklist input[type="checkbox"]'));
  var fill = document.getElementById("progressFill");
  var progressText = document.getElementById("progressText");
  var progressPctBadge = document.getElementById("progressPctBadge");
  var progressToast = document.getElementById("progressToast");
  var total = checkboxes.length;

  // Restore saved state
  var saved = loadState();
  if (Array.isArray(saved) && saved.length > 0) {
    checkboxes.forEach(function (box, idx) {
      var id = box.name || String(idx);
      if (saved.indexOf(id) !== -1) {
        box.checked = true;
      }
    });
  }

  function updateProgress() {
    var checkedCount = 0;
    var checkedIds = [];

    // Update individual cards completion badge
    cards.forEach(function (card) {
      var cat = card.getAttribute("data-cat");
      var cardBoxes = card.querySelectorAll('.checklist input[type="checkbox"]');
      var cardTotal = cardBoxes.length;
      var cardChecked = 0;

      cardBoxes.forEach(function (box, idx) {
        if (box.checked) {
          cardChecked++;
          checkedCount++;
          checkedIds.push(box.name || (cat + "-" + idx));
        }
      });

      var badge = card.querySelector(".section-check-badge");
      if (badge) {
        badge.textContent = toFaDigits(cardChecked) + " از " + toFaDigits(cardTotal);
        badge.classList.toggle("all-checked", cardChecked === cardTotal && cardTotal > 0);
      }
    });

    var pct = total ? Math.round((checkedCount / total) * 100) : 0;
    if (fill) fill.style.width = pct + "%";
    if (progressPctBadge) progressPctBadge.textContent = toFaDigits(pct) + "٪";
    if (progressText) {
      progressText.textContent = toFaDigits(checkedCount) + " از " + toFaDigits(total) +
        " مورد بررسی شد — " + toFaDigits(pct) + "٪";
    }

    if (progressToast) {
      progressToast.hidden = !(checkedCount === total && total > 0);
    }

    saveState(checkedIds);
  }

  checkboxes.forEach(function (box) {
    box.addEventListener("change", updateProgress);
  });

  // Select all checkboxes
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

  // Per-card "Select all this section" button
  var cardToggleBtns = document.querySelectorAll(".toggle-phase-checks");
  cardToggleBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var card = btn.closest(".card");
      if (!card) return;
      var cardBoxes = Array.from(card.querySelectorAll('.checklist input[type="checkbox"]'));
      var allChecked = cardBoxes.every(function (b) { return b.checked; });
      cardBoxes.forEach(function (b) { b.checked = !allChecked; });
      btn.textContent = allChecked ? "علامت‌زدن همه این بخش" : "لغو تیک‌های این بخش";
      updateProgress();
    });
  });

  /* -------------------------------------------------------------
     5. Category Filters
     ------------------------------------------------------------- */
  var chips = document.querySelectorAll(".chip");
  var emptyMsg = document.getElementById("emptyMsg");
  var searchInput = document.getElementById("actionSearch");

  function applyFilter(filter) {
    chips.forEach(function (c) {
      c.classList.toggle("is-active", c.getAttribute("data-filter") === filter);
    });

    var visibleCards = 0;
    cards.forEach(function (card) {
      var cat = card.getAttribute("data-cat");
      var match = filter === "all" || cat === filter;
      card.style.display = match ? "" : "none";

      if (match) {
        visibleCards++;
        // If single category selected, automatically open it for convenience
        if (filter !== "all") {
          var head = card.querySelector(".card-head");
          var body = card.querySelector(".card-body");
          if (head && body) {
            head.setAttribute("aria-expanded", "true");
            body.hidden = false;
            card.classList.add("open");
          }
        }
      }
    });

    if (emptyMsg) emptyMsg.hidden = visibleCards !== 0;
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var filter = chip.getAttribute("data-filter");
      if (searchInput && searchInput.value.trim() !== "") {
        searchInput.value = "";
        clearSearchBtn.hidden = true;
        searchCount.textContent = "";
        // Reset item visibility inside cards
        document.querySelectorAll(".checklist li").forEach(function (li) {
          li.classList.remove("is-hidden");
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
      var query = searchInput.value.trim().toLowerCase();
      if (clearSearchBtn) clearSearchBtn.hidden = query === "";

      if (query === "") {
        if (searchCount) searchCount.textContent = "";
        // Reset checklist items visibility
        document.querySelectorAll(".checklist li").forEach(function (li) {
          li.classList.remove("is-hidden");
        });
        // Reapply active category filter
        var activeChip = document.querySelector(".chip.is-active");
        var activeFilter = activeChip ? activeChip.getAttribute("data-filter") : "all";
        applyFilter(activeFilter);
        return;
      }

      // Deactivate specific category chip to reflect global search
      chips.forEach(function (c) {
        c.classList.toggle("is-active", c.getAttribute("data-filter") === "all");
      });

      var matchedTotal = 0;
      var visibleCards = 0;

      cards.forEach(function (card) {
        var cardHead = card.querySelector(".card-head");
        var cardBody = card.querySelector(".card-body");
        var items = card.querySelectorAll(".checklist li");
        var cardMatched = 0;

        items.forEach(function (li) {
          var text = li.textContent.toLowerCase();
          var isMatch = text.indexOf(query) !== -1;
          li.classList.toggle("is-hidden", !isMatch);
          if (isMatch) {
            cardMatched++;
            matchedTotal++;
          }
        });

        if (cardMatched > 0) {
          card.style.display = "";
          visibleCards++;
          // Open card to show matching items
          if (cardHead && cardBody) {
            cardHead.setAttribute("aria-expanded", "true");
            cardBody.hidden = false;
            card.classList.add("open");
          }
        } else {
          card.style.display = "none";
        }
      });

      if (searchCount) {
        searchCount.textContent = matchedTotal > 0
          ? toFaDigits(matchedTotal) + " مورد در برنامه یافت شد"
          : "موردی با این عبارت یافت نشد";
      }

      if (emptyMsg) emptyMsg.hidden = visibleCards !== 0;
    });

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener("click", function () {
        searchInput.value = "";
        clearSearchBtn.hidden = true;
        if (searchCount) searchCount.textContent = "";
        document.querySelectorAll(".checklist li").forEach(function (li) {
          li.classList.remove("is-hidden");
        });
        applyFilter("all");
        searchInput.focus();
      });
    }
  }

  /* -------------------------------------------------------------
     7. Scrollspy & Header styling
     ------------------------------------------------------------- */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".main-nav .nav-link");
  var backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Back to top button
    if (backToTop) {
      backToTop.classList.toggle("show", scrollY > 350);
    }

    // Scrollspy
    var currentSectionId = "";
    sections.forEach(function (sec) {
      var top = sec.offsetTop - 120;
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