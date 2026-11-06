// ExpectMoore Media — shared script
(function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("visible"); });
  }

  // Portfolio filters
  var filterBtns = document.querySelectorAll(".filters button");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var cat = btn.getAttribute("data-filter");
      filterBtns.forEach(function (b) {
        b.classList.toggle("active", b === btn);
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });
      document.querySelectorAll(".gallery figure").forEach(function (fig) {
        var show = cat === "all" || (fig.getAttribute("data-cat") || "").indexOf(cat) !== -1;
        fig.classList.toggle("hidden", !show);
      });
    });
  });

  // Pre-select a service on the contact form from ?service=
  var params = new URLSearchParams(window.location.search);
  var svc = params.get("service");
  if (svc) {
    var box = document.querySelector('.checks input[value="' + svc.replace(/"/g, "") + '"]');
    if (box) box.checked = true;
  }
})();
