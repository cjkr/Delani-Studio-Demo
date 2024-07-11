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
});
