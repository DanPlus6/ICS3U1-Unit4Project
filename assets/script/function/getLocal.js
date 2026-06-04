'use strict';

import { Program } from "../class/Program.js";

/**
 * Gets programs from local storage
 * @returns {Program[]} array of programs saved to localstorage
 * 
 * By: David Fu
 */
export function getLocal() {
    return Program.fromJsonArray(JSON.parse(localStorage.getItem("programs") || "[]"));
}
