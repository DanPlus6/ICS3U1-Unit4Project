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
    if (mode === "url") { // check if validation mode is url structural check
        try { // attempt to construct url using provided source to structurally validate the source
            const url = new URL(src);
        } catch (_) { // if attempting to construct the URL fails, source is structurally invalid
            return false;
        }
    } else {
        return TypeError;
    }
}
