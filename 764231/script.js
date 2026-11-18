(function () {
  "use strict";

  // Elements
  var header = document.getElementById("siteHeader");
  var menuBtn = document.getElementById("menuBtn");
  var mobileNav = document.getElementById("mobileNav");
  var rows = Array.prototype.slice.call(document.querySelectorAll(".service-row"));
  var filterBtns = Array.prototype.slice.call(document.querySelectorAll(".filter-pill"));
  var noResult = document.getElementById("noResult");
  var toggleAllBtn = document.getElementById("toggleAllBtn");
  var toggleAllText = document.getElementById("toggleAllText");
  var floatingTopBtn = document.getElementById("floatingTopBtn");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".main-nav .nav-link"));

  // Sections for Scrollspy
  var sectionIds = ["services", "rhythm", "ticket", "proof", "contact"];
  var sections = sectionIds.map(function (id) {
    return document.getElementById(id);
  }).filter(Boolean);

  // 1. Mobile Menu Functions
  function toggleMobileMenu(open) {
    if (!mobileNav || !menuBtn) return;
    var isOpen = typeof open === "boolean" ? open : mobileNav.hasAttribute("hidden");
    if (isOpen) {
      mobileNav.removeAttribute("hidden");
      menuBtn.setAttribute("aria-expanded", "true");
      menuBtn.setAttribute("aria-label", "بستن منو");
    } else {
      mobileNav.setAttribute("hidden", "");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "باز کردن منو");
    }
  }

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleMobileMenu();
    });

    var mobileLinks = mobileNav.querySelectorAll("a");
    mobileLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        toggleMobileMenu(false);
      });
    });

    document.addEventListener("click", function (e) {
      if (header && !header.contains(e.target) && !mobileNav.hasAttribute("hidden")) {
        toggleMobileMenu(false);
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !mobileNav.hasAttribute("hidden")) {
        toggleMobileMenu(false);
        menuBtn.focus();
      }
    });
  }

  // 2. Accordion Rows & Toggle All
  function updateToggleAllState() {
    if (!toggleAllBtn || !toggleAllText) return;
    var visibleRows = rows.filter(function (r) {
      return !r.classList.contains("is-hidden");
    });
    if (visibleRows.length === 0) return;

    var allOpen = visibleRows.every(function (r) {
      return r.classList.contains("open");
    });

    if (allOpen) {
      toggleAllBtn.setAttribute("aria-expanded", "true");
      toggleAllText.textContent = "بستن همه";
    } else {
      toggleAllBtn.setAttribute("aria-expanded", "false");
      toggleAllText.textContent = "باز کردن همه";
    }
  }

  rows.forEach(function (row) {
    var head = row.querySelector(".service-row-head");
    if (!head) return;

    head.addEventListener("click", function () {
      var isOpen = row.classList.toggle("open");
      head.setAttribute("aria-expanded", isOpen ? "true" : "false");
      updateToggleAllState();
    });
  });

  if (toggleAllBtn) {
    toggleAllBtn.addEventListener("click", function () {
      var visibleRows = rows.filter(function (r) {
        return !r.classList.contains("is-hidden");
      });
      var allOpen = visibleRows.every(function (r) {
        return r.classList.contains("open");
      });

      var targetState = !allOpen;
      visibleRows.forEach(function (row) {
        row.classList.toggle("open", targetState);
        var head = row.querySelector(".service-row-head");
        if (head) {
          head.setAttribute("aria-expanded", targetState ? "true" : "false");
        }
      });

      updateToggleAllState();
    });
  }

  // 3. Category Filter
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) {
        b.classList.remove("is-active");
        b.setAttribute("aria-pressed", "false");
      });

      btn.classList.add("is-active");
      btn.setAttribute("aria-pressed", "true");

      var f = btn.getAttribute("data-filter");
      var visibleCount = 0;

      rows.forEach(function (row) {
        var matches = f === "all" || row.getAttribute("data-cat") === f;
        row.classList.toggle("is-hidden", !matches);

        if (matches) {
          visibleCount++;
          // Open the first visible row so its programme is immediately readable
          var shouldOpen = visibleCount === 1;
          row.classList.toggle("open", shouldOpen);
          var head = row.querySelector(".service-row-head");
          if (head) {
            head.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
          }
        }
      });

      if (noResult) {
        noResult.hidden = visibleCount !== 0;
      }

      updateToggleAllState();
    });
  });

  // 4. Scrollspy for Navigation Links
  function updateScrollspy() {
    if (!sections || sections.length === 0) return;
    var scrollPos = window.scrollY + 160;
    var currentSectionId = "";

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
      currentSectionId = "contact";
    } else {
      for (var i = sections.length - 1; i >= 0; i--) {
        var section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          currentSectionId = section.getAttribute("id");
          break;
        }
      }
    }

    navLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      if (href && href === "#" + currentSectionId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // 5. Scroll Listener (Header Shadow & Back-to-Top Button)
  function onScroll() {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 16);
    }

    if (floatingTopBtn) {
      if (window.scrollY > 350) {
        floatingTopBtn.classList.add("is-visible");
      } else {
        floatingTopBtn.classList.remove("is-visible");
      }
    }

    updateScrollspy();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (floatingTopBtn) {
    floatingTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Initialize toggle-all text on page load
  updateToggleAllState();

})();
