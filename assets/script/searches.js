'use strict';

import { Program } from "./class/Program.js";


//get the HTML elements
const SRCH_IPT = document.getElementById('search-input');
const T_MIN = document.getElementById('tuition-min');
const T_MAX = document.getElementById('tuition-max');
const P_LEN = document.getElementById('program-length');
const BTN_TT = document.getElementById('btn-swap-tuition');
const BTN_COOP = document.getElementById('btn-toggle-coop');

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
let intCoop = false;

/** callback to execute the search */
function execSearch() {

}


