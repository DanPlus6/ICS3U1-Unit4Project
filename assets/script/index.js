'use strict';

// Stores the small disclaimer image that opens the overlay.
const disclaimerTrigger = document.getElementById("stuco-disclaimer-trigger");
// Stores the full-screen disclaimer overlay element.
const disclaimerOverlay = document.getElementById("disclaimer-overlay");
// Stores the button used to close the disclaimer overlay.
const disclaimerClose = document.getElementById("disclaimer-close");

function openDisclaimer() {
    disclaimerOverlay.classList.add("is-visible");
    disclaimerOverlay.setAttribute("aria-hidden", "false");
}

function closeDisclaimer() {
    disclaimerOverlay.classList.remove("is-visible");
    disclaimerOverlay.setAttribute("aria-hidden", "true");
}

disclaimerTrigger.addEventListener("click", openDisclaimer);
disclaimerTrigger.addEventListener("keydown", (event) => {
    // Check if the user pressed Enter or Space to open the disclaimer without a mouse.
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDisclaimer();
    }
});
disclaimerClose.addEventListener("click", closeDisclaimer);
