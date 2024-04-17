document.addEventListener("DOMContentLoaded", function () {
  // navlink active
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function () {
      // Remove theme-active class from all links
      navLinks.forEach(function (link) {
        link.classList.remove("theme-active");
      });

      // Add theme-active class to the clicked link
      this.classList.add("theme-active");
    });
  });

  // filter portfolio
  var filterButtons = document.querySelectorAll(".filter-button");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var value = this.getAttribute("data-filter");

      // Remove active class from all filter buttons
      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      // Add active class to clicked filter button
      this.classList.add("active");

      var filters = document.querySelectorAll(".filter");

      if (value == "all") {
        filters.forEach(function (filter) {
          filter.style.display = "block";
        });
      } else {
        filters.forEach(function (filter) {
          if (!filter.classList.contains(value)) {
            filter.style.display = "none";
          } else {
            filter.style.display = "block";
          }
        });
      }
    });
  });
});
