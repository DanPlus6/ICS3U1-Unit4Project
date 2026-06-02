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

// get the HTML elements
const PROGRAM_NAME = document.getElementById('programName');
const LENGTH_OF_PROGRAM = document.getElementById('lengthOfProgram');
const PROGRAM_DESCRIPTION = document.getElementById('programDescription');
const HAS_COOP = document.getElementById('hasCoop');
const ADMISSION_COURSES_NEEDED = document.getElementById('admissionCoursesNeeded');
const ADMISSION_AVERAGE_NEEDED = document.getElementById('admissionAverageNeeded');
const DOMESTIC_TUITION = document.getElementById('domesticTuition');
const INTERNATIONAL_TUTION = document.getElementById('internationalTuition');
const ACADEMIC_COST_DETAILS = document.getElementById('academicCostDetails');
const ACADEMIC_COST = document.getElementById('academicCost');
const LIVING_COST_DETAILS = document.getElementById('livingCostDetails');
const LIVING_COST = document.getElementById('livingCost');
const INTERESTING_FACTS = document.getElementById('interstingFacts');
const PRIMARY_SOURCE1 = document.getElementById('primarySource1');
const PRIMARY_SOURCE2 = document.getElementById('primarySource2');
const PRIMARY_SOURCE3 = document.getElementById('primarySource3');
const SECONDARY_SOURCE1 = document.getElementById('secondarySource1');
const SECONDARY_SOURCE2 = document.getElementById('secondarySource2');
const SECONDARY_SOURCE3 = document.getElementById('secondarySource3');

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
