'use strict';

import { Program } from "./class/Program.js";


//get the HTML elements
const SRCH_IPT = document.getElementById("search-input");
const T_MIN = document.getElementById("tuition-min");
const T_MAX = document.getElementById("tuition-max");
const P_LEN = document.getElementById("program-length");
const BTN_TT = document.getElementById("btn-swap-tuition");
const BTN_COOP = document.getElementById("btn-toggle-coop");
const BTN_SRCH = document.getElementById("btn-search");

/** 
 * array to store search results to render
 * @type {Program[]}
 */
let searchRes = [];

/** flag to track if search results should have coop */
let hasCoop = false;

/**
 * flag to track if to filter programs by international tuition
 * `true` = international, `false` = domestic
 */
let intTuition = false;


/** callback to execute the search */
function execSearch() {
    
}

/** callback to swap tuition mode */
function swapTuition() {
    if (intTuition) {
        intTuition = false;
        BTN_TT.innerHTML = "Has Co-op: Yes";
    } else {
        intTuition = true;
        BTN_TT.innerHTML = "Has Co-op: No";
    }
}

/** callback to swap */
function toggleCoop() {
    if (hasCoop) {
        hasCoop = false;
        BTN_COOP.innerHTML = "Has Co-op: Yes";
    } else {
        hasCoop = true;
        BTN_COOP.innerHTML = "Has Co-op: No";
    }
}


/** initialization callback  */
function init() {
    BTN_TT.addEventListener("click", swapTuition);
    BTN_COOP.addEventListener("click", toggleCoop);
    BTN_SRCH.addEventListener("click", execSearch);


}
document.addEventListener("DOMContentLoaded", init);
