document.addEventListener("DOMContentLoaded", function() {
    var totalPrice = 0;
    var currentStep = "section"; // Track the current step

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

    // Add seat to cart
    function addSeatToCart(button) {
        var seatInfo = button.parentElement.querySelector('p').textContent;
        var seatDetails = seatInfo.split(', ');
        var section = seatDetails[0].split(': ')[1];
        var row = seatDetails[1].split(': ')[1];
        var seatNumber = seatDetails[2].split(': ')[1];
        var priceText = button.textContent;
        var price = parseFloat(priceText.split('$')[1]);

        // Update total price
        totalPrice += price;
        updateTotalAndPurchaseButton();

        // Add row to cart table
        var cartTable = document.getElementById("cart-table").querySelector("tbody");
        var newRow = cartTable.insertRow();
        newRow.innerHTML = `<td>${row}</td><td>${seatNumber}</td><td>${priceText}</td>`;

        // Add delete button
        var deleteCell = newRow.insertCell();
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            cartTable.deleteRow(newRow.rowIndex - 1);
            button.disabled = false;
            totalPrice -= price;
            updateTotalAndPurchaseButton();
        };
        deleteCell.appendChild(deleteButton);

        // Disable seat selection button
        button.disabled = true;
    }

    // Update total and purchase button
    function updateTotalAndPurchaseButton() {
        var totalPriceElement = document.getElementById("total-price");
        totalPriceElement.textContent = totalPrice.toFixed(2);

        var purchaseButton = document.getElementById("purchase-button");
        var ticketCount = cartTable.querySelectorAll("tr").length;
        purchaseButton.textContent = `Buy ${ticketCount} ticket${ticketCount > 1 ? 's' : ''} for $${totalPrice.toFixed(2)}`;
        purchaseButton.style.display = ticketCount > 0 ? 'block' : 'none';
    }

    // Event listeners for seat selection
    var priceButtons = document.querySelectorAll(".price-button");
    priceButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            addSeatToCart(button);
        });
    });

    // Event listeners for navigation
    sectionJButton.addEventListener("click", function() {
        currentStep = "row";
        updateUI();
    });

    row5Button.addEventListener("click", function() {
        currentStep = "seat";
        updateUI();
    });

    backButton.addEventListener("click", function() {
        if (currentStep === "seat") {
            currentStep = "row";
        } else if (currentStep === "row") {
            currentStep = "section";
        }
        updateUI();
    });

    // Update UI based on the current step
    function updateUI() {
        sectionJMap.style.display = "none";
        row5Map.style.display = "none";
        fullMap.style.display = "none";
        selectionButtons.style.display = "none";
        rowButtons.style.display = "none";
        seatButtons.style.display = "none";

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
