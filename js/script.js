document.addEventListener("DOMContentLoaded", function () {
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
