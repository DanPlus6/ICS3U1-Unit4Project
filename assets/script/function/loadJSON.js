'use strict';

/** 
 * fetch json data from a json file
 * @param {string} path path to json file
 * @returns {string} json data from file
 * 
 * By: David Fu
 */
export async function loadJSON(path) {
    try { // Try to fetch and parse the JSON file from the provided path.
        // Stores the HTTP response returned by fetch.
        const response = await fetch(path);
        
        // Check if the HTTP request failed before trying to parse the response.
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        // Stores the parsed JSON data from the response body.
        const data = await response.json();
        return data;
    } catch (error) { // Catch any fetch or JSON parsing errors so the page does not crash.
        console.error("Could not load JSON file:", error);
    }
}
