document.addEventListener("DOMContentLoaded", function() {
    var currentStep = "section"; // Track the current step
    // It's the DOM! The Magnificent DOM!
    var sectionJButton = document.getElementById("section-J");
    var sectionJMap = document.getElementById("sectionJMap");
    var fullMap = document.getElementById("fullMap");
    var selectionTitle = document.getElementById("selection-title");
    var selectionButtons = document.querySelector(".section-buttons");
    var rowButtons = document.querySelector(".row-buttons");
    var seatButtons = document.querySelector(".seat-buttons");
    var backButton = document.getElementById("back-button"); // Back button
    var row5Button = document.getElementById("row-5");
    var row5Map = document.getElementById("row5Map");

    sectionJButton.addEventListener("click", function() {
        currentStep = "row"; // Update the current step
        updateUI();
    });

    row5Button.addEventListener("click", function() {
        currentStep = "seat"; // Update the current step
        updateUI();
    });

    backButton.addEventListener("click", function() {
        // Logic to handle back button based on the current step
        if (currentStep === "seat") {
            currentStep = "row";
        } else if (currentStep === "row") {
            currentStep = "section";
        }
        updateUI();
    });

    function updateUI() {
        // Hide all maps and buttons initially
        sectionJMap.style.display = "none";
        row5Map.style.display = "none";
        fullMap.style.display = "none";
        selectionButtons.style.display = "none";
        rowButtons.style.display = "none";
        seatButtons.style.display = "none";

        // Show elements based on the current step
        if (currentStep === "section") {
            fullMap.style.display = "block";
            selectionButtons.style.display = "block";
            selectionTitle.textContent = "Choose your seating section";
        } else if (currentStep === "row") {
            sectionJMap.style.display = "block";
            rowButtons.style.display = "block";
            selectionTitle.textContent = "Choose a row in Section J";
        } else if (currentStep === "seat") {
            row5Map.style.display = "block";
            seatButtons.style.display = "block";
            selectionTitle.textContent = "Choose a seat in Section J Row 5";
        }
    }

    // Initialize the UI
    updateUI();
});