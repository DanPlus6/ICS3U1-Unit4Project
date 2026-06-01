'use strict';

import { Program } from "./class/Program.js";
import { getPrograms } from "./function/getPrograms.js";

/** 
 * array storing programs to traverse through
 * @type {Program[]}
 */
const programs = getPrograms();

const urlParams = new URLSearchParams(window.location.search);
/** index for traversing through the programs */
let idx = urlParams.get('idx');

/** 
 * Updates current webpage to display info of current program
 * @param {Program} program current program
 */
function updateData(program) {
    document.title = program.programName;
}

/**
 * Increases the current index by 1 to show the next school
 */
function next() {
    //check if the current index is equal to or lower than the highest bound
    if (idx <= programs.length) {
        updateData(programs[++idx]);
    }
}

/**
 * Increases the current index by 1 to show the previous school
 */
function prev() {
    //check if the current index is equal to or higher than the lowest bound
    if (idx >= 0) {
        updateData(programs[--idx]);
    }
}
