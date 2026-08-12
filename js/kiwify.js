/**
 * Nébula Casa Editorial — loja Kiwify
 * Checkout: cole os links em window.NEBULA_CHECKOUT_KIWIFY (no <head> de cada página).
 * Não use URLs da Hotmart nesta loja.
 * Sticky CTA + reveal on scroll
 */
(function () {
  "use strict";

  var map = window.NEBULA_CHECKOUT_KIWIFY || {};
  document.querySelectorAll("[data-product]").forEach(function (el) {
    var id = el.getAttribute("data-product");
    var url = map[id];
    if (!url || url.charAt(0) === "#") return;
    el.setAttribute("href", url);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  var sticky = document.querySelector("[data-sticky-cta]");
  var hero = document.querySelector(".hero");

  function syncStickyPad() {
    if (!sticky) return;
    var h = sticky.offsetHeight || 76;
    document.documentElement.style.setProperty("--sticky-h", h + "px");
  }

  if (sticky && hero) {
    document.body.classList.add("has-sticky-cta");
    syncStickyPad();
    window.addEventListener("resize", syncStickyPad);

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            sticky.classList.remove("is-visible");
          } else {
            sticky.classList.add("is-visible");
            syncStickyPad();
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(hero);
  }

  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    var revealObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    reveals.forEach(function (el) {
      revealObs.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-in");
    });
  }
})();
