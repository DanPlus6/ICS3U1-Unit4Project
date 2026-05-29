'use strict';

import { getPrograms } from "./function/getPrograms.js";

/** array storing java */
const programs = getPrograms();

/**
 * Updates current webpage elements to display the current
 * @param {Program} program the program t
 */
function updateData(program) {

}


//traversal for the school pages
let idx = 0;

/**
 * Increases the current index by 1 to show the next school
 */
function nextSchool(){
    //check if the current index is equal to or lower than the highest bound
    if (idx <= numberOfSchools) {
        ++idx;
        updateData(programs[idx]);
    }
}

/**
 * Increases the current index by 1 to show the previous school
 */
function prevSchool(){
    //check if the current index is equal to or higher than the lowest bound
    if (idx >= 0) {
        --idx;
        updateData(programs[idx]);
    }
}
