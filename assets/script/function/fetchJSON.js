'use strict';

/** 
 * fetch json data from a json file
 * @param {string} path path to json file
 * @returns {string} json data from file
 */
export async function loadJSON(path) {
    try {
        const response = await fetch(path);
        
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Could not load JSON file:", error);
    }
}
