'use strict';

const disclaimerTrigger = document.getElementById("stuco-disclaimer-trigger");
const disclaimerOverlay = document.getElementById("disclaimer-overlay");
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
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDisclaimer();
    }
});
disclaimerClose.addEventListener("click", closeDisclaimer);
