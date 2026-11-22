document.documentElement.classList.add("js");
(function () {
  "use strict";

  // Header shadow on scroll
  var header = document.getElementById("siteHeader");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // FAQ accordion
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var btn = item.querySelector(".faq-q");
    var panel = item.querySelector(".faq-a");
    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (other) {
        other.classList.remove("open");
        other.querySelector(".faq-a").style.maxHeight = null;
        other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        panel.style.maxHeight = panel.scrollHeight + "px";
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // Inquiry form (front-end only: validate + show success message)
  var form = document.getElementById("inquiryForm");
  if (form) {
    var err = document.getElementById("formError");
    var ok = document.getElementById("formSuccess");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("inqName").value.trim();
      var phone = document.getElementById("inqPhone").value.replace(/[\s\-]/g, "");
      var phoneOk = /^(0?9\d{9}|\+?98?9\d{9})$/.test(phone.replace(/[۰-۹]/g, function (d) { return "۰۱۲۳۴۵۶۷۸۹".indexOf(d); }));
      if (!name || !phoneOk) {
        err.hidden = false;
        ok.hidden = true;
        return;
      }
      err.hidden = true;
      ok.hidden = false;
      form.querySelectorAll("input, select, textarea").forEach(function (el) { el.disabled = true; });
      form.querySelector("button[type=submit]").disabled = true;
      ok.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px 240px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
    // Safety fallback: never leave content invisible if IO is throttled
    var fallback = setInterval(function () {
      var pending = false;
      revealEls.forEach(function (el) {
        if (!el.classList.contains("visible")) {
          if (el.getBoundingClientRect().top < window.innerHeight + 300) {
            el.classList.add("visible");
            io.unobserve(el);
          } else {
            pending = true;
          }
        }
      });
      if (!pending) clearInterval(fallback);
    }, 1200);
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }
})();
