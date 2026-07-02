/* ============================================================
   Portfolio — vanilla JS
   - Scroll reveal (IntersectionObserver)
   - Sticky-nav scrolled state + active section highlight
   - Mobile menu toggle
   - Year in footer
   ============================================================ */
(function () {
    "use strict";

    // ---- Year ----
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ---- Reveal-on-scroll ----
    var revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealEls.length) {
        var revealIO = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry, i) {
                    if (entry.isIntersecting) {
                        // Small stagger relative to entry order
                        entry.target.style.transitionDelay =
                            Math.min(i * 60, 240) + "ms";
                        entry.target.classList.add("in-view");
                        revealIO.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
        revealEls.forEach(function (el) {
            revealIO.observe(el);
        });
    } else {
        // Fallback: just show them
        revealEls.forEach(function (el) {
            el.classList.add("in-view");
        });
    }

    // ---- Nav scrolled state ----
    var nav = document.querySelector(".nav");
    var onScroll = function () {
        if (!nav) return;
        if (window.scrollY > 12) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // ---- Active section highlighting ----
    var links = document.querySelectorAll(".nav__link");
    var sectionIds = Array.from(links).map(function (l) {
        return l.getAttribute("href");
    });
    var sections = sectionIds
        .map(function (id) {
            return document.querySelector(id);
        })
        .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
        var activeIO = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var id = "#" + entry.target.id;
                        links.forEach(function (link) {
                            if (link.getAttribute("href") === id) {
                                link.classList.add("active");
                            } else {
                                link.classList.remove("active");
                            }
                        });
                    }
                });
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
        );
        sections.forEach(function (s) {
            activeIO.observe(s);
        });
    }

    // ---- Mobile menu ----
    var toggle = document.querySelector(".nav__toggle");
    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            nav.classList.toggle("open");
        });
        // Close on link click
        document.querySelectorAll(".nav__link").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("open");
            });
        });
        // Close on outside click
        document.addEventListener("click", function (e) {
            if (!nav.contains(e.target)) nav.classList.remove("open");
        });
    }
})();
