'use strict';

/**
 * Validates a source by checking if destination is reachable
 * @param {string} src the source to validate
 * @param {string} mode validation modes (`url` by default):

 * `url` for standard urls structural check,
 * 
 * `live` for network check,
 * 
 * `img` for image src check
 * @returns {bool} whether or not source is valid
 */
export function validateSrc(src, mode="url") {
    // if source is empty, invalidate immediately
    if (!src) {
        resolve(false);
        return;
    }

    if (mode === "url") { // check if validation mode is url structural check
        try { // attempt to construct url using provided source to structurally validate the source
            const url = new URL(src);
        } catch { return false; } // if attempting to construct the URL fails, source is structurally invalid
    } else if (mode === "live") { // check if validation mode is network check
        try { // attempt to issue HEAD request via fetch api to check if source is reachable
            const response = await fetch(src, {method:"HEAD"});

            return response.ok;
        } catch { return false; } // if source is unreachable, invalidate source
    } else if (mode === "img") { // check if validation mode is image src check
        // attempt to construct new image using source to validate it
        return new Promise((resolve) => {
            /** img object to construct for validation */
            const img = new Image();
            // resolve promise based on whether image loads successfully or path is broken/missing/blocked
            img.onload = () => resolve(true);
            img.onerror = () => resolve(true);
            img.src = src;
        });
    } else {
        return TypeError;
    }
}
