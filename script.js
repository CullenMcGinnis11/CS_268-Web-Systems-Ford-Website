// Wait until the order form has loaded
document.addEventListener("DOMContentLoaded", function () {

    var form = document.getElementById("orderForm");

    // return if page doesn't have ordering form
    if (!form) {
        return;
    }

    // Select the model that the visitor clicked on the vehicle page
    var model = new URLSearchParams(window.location.search).get("model");

    if (model) {
        document.getElementById("vehicle").value = model;
    }

    // Show a message when the visitor reviews the form.
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var vehicle = document.getElementById("vehicle").value;
        var message = document.getElementById("orderMessage");

        message.textContent = "Your sample request for the " + vehicle +
            " is ready. This is a classroom demo, so no information was sent.";
    });

    // Remove the message when the visitor clears the form.
    form.addEventListener("reset", function () {
        document.getElementById("orderMessage").textContent = "";
    });
});
