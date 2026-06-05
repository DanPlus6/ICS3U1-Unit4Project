/**
 * By David Fu
 */

'use strict';

import { Program } from "./class/Program.js";
import { append } from "./function/append.js";
import { getPrograms } from "./function/getPrograms.js";
import { makeElem } from "./function/makeElem.js";
import { renderPrograms } from "./function/renderPrograms.js";
import { searchString } from "./function/searchString.js";


//get the HTML elements
const SRCH_IPT = document.getElementById("search-input");
const T_MIN = document.getElementById("tuition-min");
const T_MAX = document.getElementById("tuition-max");
const P_LEN = document.getElementById("program-length");
const BTN_TT = document.getElementById("btn-swap-tuition");
const BTN_COOP = document.getElementById("btn-toggle-coop");
const BTN_SRCH = document.getElementById("btn-search");
const P_OUTPUT = document.getElementById("p-output");

/** 
 * array to store all searchable programs
 * @type {Program[]}
 */
let programs = [];

/** 
 * array to store search results to render
 * @type {Program[]}
 */
let searchRes = [];

/** flag to track if search results should have coop */
let hasCoop = true;

/**
 * flag to track if to filter programs by international tuition
 * `true` = international, `false` = domestic
 */
let intTuition = false;


/**
 * Parses an input field into a number, falling back when it is blank or invalid
 * @param {HTMLInputElement} input input field to parse
 * @param {number} fallback value to return when there is no usable number
 * @returns {number} parsed number or fallback
 */
function getNumberInput(input, fallback) {
    if (input.value === "") return fallback;

    const parsed = Number(input.value);
    if (Number.isNaN(parsed)) return fallback;

    return parsed;
}

/**
 * Checks if a program matches the user's search text
 * @param {Program} program program to search through
 * @param {string} searchText lowercase text from search bar
 * @returns {boolean} whether the program contains the search text
 */
function matchesSearchText(program, searchText) {
    if (searchText === "") return true;

    const searchableText = program.getString().toLowerCase();
    const matches = searchString(searchableText, searchText);
    return matches.length > 0;
}

/**
 * Checks if a program matches the selected filters
 * @param {Program} program program to check
 * @param {number} minTuition minimum tuition range
 * @param {number} maxTuition maximum tuition range
 * @param {number} length program length filter
 * @returns {boolean} whether the program passes the filters
 */
function matchesFilters(program, minTuition, maxTuition, length) {
    const tuition = Number(intTuition ? program.internationalTuition : program.domesticTuition);
    const programLength = Number(program.lengthOfProgram);

    if (program.hasCoop !== hasCoop) return false;
    if (tuition < minTuition || tuition > maxTuition) return false;
    if (length !== -1 && programLength !== length) return false;

    return true;
}

/**
 * Shows a message in the output container
 * @param {string} message message to show
 */
function showMessage(message) {
    P_OUTPUT.replaceChildren();
    P_OUTPUT.append(makeElem({tag:"p", htmlContent:message}));
}

/** callback to execute the search */
function execSearch() {
    const searchText = SRCH_IPT.value.toLowerCase().trim();
    const minTuition = getNumberInput(T_MIN, Number.NEGATIVE_INFINITY);
    const maxTuition = getNumberInput(T_MAX, Number.POSITIVE_INFINITY);
    const programLength = getNumberInput(P_LEN, -1);

    searchRes = [];

    for (let i = 0; i < programs.length; i++) {
        if (matchesSearchText(programs[i], searchText) && matchesFilters(programs[i], minTuition, maxTuition, programLength)) {
            append(searchRes, programs[i]);
        }
    }

    if (searchRes.length === 0) {
        showMessage("No programs match your search.");
        return;
    }

    renderPrograms(P_OUTPUT, searchRes, false);
}

/** callback to swap tuition mode */
function swapTuition() {
    if (intTuition) {
        intTuition = false;
        BTN_TT.innerHTML = "Domestic Tuition";
    } else {
        intTuition = true;
        BTN_TT.innerHTML = "International Tuition";
    }
}

/** callback to swap */
function toggleCoop() {
    if (hasCoop) {
        hasCoop = false;
        BTN_COOP.innerHTML = "Has Co-op: No";
    } else {
        hasCoop = true;
        BTN_COOP.innerHTML = "Has Co-op: Yes";
    }
}


/** initialization callback  */
async function init() {
    programs = await getPrograms();

    BTN_TT.addEventListener("click", swapTuition);
    BTN_COOP.addEventListener("click", toggleCoop);
    BTN_SRCH.addEventListener("click", execSearch);
    SRCH_IPT.addEventListener("keydown", (event) => {
        if (event.key === "Enter") execSearch();
    });
}
document.addEventListener("DOMContentLoaded", init);
