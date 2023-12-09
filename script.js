//show section J seat map image when button section J is clicked. hide the map in the background
document.addEventListener("DOMContentLoaded", function() {
    var sectionJButton = document.getElementById("section-J");
    var sectionJMap = document.getElementById("sectionJMap");
    var fullMap = document.getElementById("fullMap");
    var selectionButtons = document.querySelector(".section-buttons");
    var rowButtons = document.querySelector(".row-buttons");
    var seatButtons = document.querySelector(".seat-buttons");
    var row5Button = document.getElementById("row-5");
    var row5Map = document.getElementById("row5Map");

    sectionJButton.addEventListener("click", function() {
        // Display the section J map and hide the full map
        sectionJMap.style.display = "block";
        fullMap.style.display = "none";
        selectionButtons.style.display = "none";
        rowButtons.style.display = "block";
    });

    row5Button.addEventListener("click", function() {
        seatButtons.style.display = "block";
        rowButtons.style.display = "none";
        row5Map.style.display = "block";
        sectionJMap.style.display = "none";
    });

});