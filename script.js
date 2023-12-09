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


    function addSeatToCart(button) {
        var seatInfo = button.parentElement.querySelector('p').textContent;
        var seatDetails = seatInfo.split(', ');
        var section = seatDetails[0].split(': ')[1];
        var row = seatDetails[1].split(': ')[1];
        var seatNumber = seatDetails[2].split(': ')[1];
        var price = button.textContent;

        // Create a new row in the cart table for the selected seat
        var cartTable = document.getElementById("cart-table").querySelector("tbody");
        var newRow = cartTable.insertRow();
        newRow.innerHTML = `<td>${row}</td><td>${seatNumber}</td><td>${price}</td>`;

        // Disable the button after selection
        button.disabled = true;

        var deleteCell = newRow.insertCell();
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            // Remove the row from the cart
            cartTable.deleteRow(newRow.rowIndex - 1);

            // Enable the corresponding seat button again
            button.disabled = false;
        };
        deleteCell.appendChild(deleteButton);
    }

    // Find all price buttons and add event listeners
    var priceButtons = document.querySelectorAll(".price-button");
    priceButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            addSeatToCart(button);
        });
    });

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