$(document).ready(function () {
  $("#contactForm").submit(function (event) {
    event.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (name && email && message) {
      alert("Thank you for your message, " + name + "!");
      $("#contactForm")[0].reset();
    } else {
      alert("Please fill out all fields before submitting.");
    }
  });

  // Toggle description for "What We Do" items
  $(".what-we-do-icon").on("click", function () {
    var description = $(this).data("description");
    $("#what-we-do-description").text(description);
  });

  // Hover effect for portfolio items
  $(".portfolio-item").hover(
    function () {
      $(this).find(".portfolio-hover").fadeIn(200);
    },
    function () {
      $(this).find(".portfolio-hover").fadeOut(200);
    }
  );

  // Dynamically generate portfolio items
  var portfolioContainer = $("#portfolio-items");
  var portfolioImages = [
    "work1.jpg",
    "work2.jpg",
    "work3.jpg",
    "work4.jpg",
    "work5.jpg",
    "work6.jpg",
    "work7.jpg",
    "work8.jpg",
  ];

  portfolioImages.forEach(function (image, index) {
    var col = $("<div>", {
      class: "col-md-3 portfolio-item position-relative",
    });
    var img = $("<img>", {
      src: "assets/portfolio/" + image,
      alt: "Project " + (index + 1),
      class: "img-fluid",
    });
    var hoverDiv = $("<div>", { class: "portfolio-hover text-center" }).text(
      "Project " + (index + 1)
    );

    col.append(img).append(hoverDiv);
    portfolioContainer.append(col);
  });
});
