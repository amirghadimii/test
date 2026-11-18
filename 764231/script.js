(function () {
  "use strict";

  // Sticky header shadow
  var header = document.getElementById("siteHeader");
  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 8);
  }, { passive: true });

  // Mobile menu
  var menuBtn = document.getElementById("menuBtn");
  var mobileNav = document.getElementById("mobileNav");
  menuBtn.addEventListener("click", function () {
    var open = mobileNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  mobileNav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      mobileNav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Accordion cards
  var cards = Array.prototype.slice.call(document.querySelectorAll(".card"));
  cards.forEach(function (card, i) {
    var head = card.querySelector(".card-head");
    if (i === 0) card.classList.add("open");
    head.addEventListener("click", function () {
      var open = card.classList.toggle("open");
      head.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  // Service filter
  var filterBtns = document.querySelectorAll(".filter-btn");
  var noResult = document.getElementById("noResult");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var f = btn.getAttribute("data-filter");
      var visible = 0;
      cards.forEach(function (card) {
        var show = f === "all" || card.getAttribute("data-cat") === f;
        card.classList.toggle("is-hidden", !show);
        if (show) {
          visible++;
          // Open the first visible card so its tasks are immediately readable
          var shouldOpen = visible === 1;
          card.classList.toggle("open", shouldOpen);
          card.querySelector(".card-head").setAttribute("aria-expanded", shouldOpen ? "true" : "false");
        }
      });
      noResult.hidden = visible !== 0;
    });
  });
})();
