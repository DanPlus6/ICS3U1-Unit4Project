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

// --- HTML targets ---
// program general info
const SCHOOL_NAME = document.getElementById('schoolName');
const CITY = document.getElementById('city');
const PROVINCE = document.getElementById('province');
// program details
const SCHOOL_PIC = document.getElementById('schoolPicture');
const MAP_PIC = document.getElementById('mapPicture');
const PROGRAM_NAME = document.getElementById('programName');
const LENGTH_OF_PROGRAM = document.getElementById('lengthOfProgram');
const PROGRAM_DESC = document.getElementById('programDescription');
const HAS_COOP = document.getElementById('hasCoop');
const ADMISSION_COURSES = document.getElementById('admissionCoursesNeeded');
const ADMISSION_AVERAGE = document.getElementById('admissionAverageNeeded');
const DOMESTIC_TUITION = document.getElementById('domesticTuition');
const INTERNATIONAL_TUTION = document.getElementById('internationalTuition');
const ACADEMIC_COST_DETAILS = document.getElementById('academicCostDetails');
const ACADEMIC_COST = document.getElementById('academicCost');
const LIVING_COST_DETAILS = document.getElementById('livingCostDetails');
const LIVING_COST = document.getElementById('livingCost');
const INTERESTING_FACTS = document.getElementById('interstingFacts');
const PRIMARY_SOURCES = document.getElementById('primary-sources');
const SECONDARY_SOURCES = document.getElementById('secondary-sources');
// traversal buttons
const BTN_NXT = document.getElementById('btn-next');
const BTN_PRV = document.getElementById('btn-prev');


/** 
 * Updates current webpage to display info of current program
 * @param {Program} program current program
 */
function updateData(program) {
    document.title = program.programName;
    
    SCHOOL_NAME.innerHTML = program.schoolName;
    CITY.innerHTML = program.city;
    PROVINCE.innerHTML = program.province;

    SCHOOL_PIC.src = program.schoolPicture;
    MAP_PIC.src = program.mapPicture;

    PROGRAM_NAME.innerHTML = program.programName;
    LENGTH_OF_PROGRAM.innerHTML = program.lengthOfProgram;
    PROGRAM_DESC.innerHTML = program.programDescription;
    HAS_COOP.innerHTML = (program.hasCoop ? 'Yes' : 'No');
    ADMISSION_COURSES.innerHTML = program.admissionCoursesNeeded;
    ADMISSION_AVERAGE.innerHTML = program.admissionAverageNeeded;
    DOMESTIC_TUITION.innerHTML = program.domesticTuition;
    INTERNATIONAL_TUTION.innerHTML = program.internationalTuition;
    ACADEMIC_COST.innerHTML = program.academicCost;
    ACADEMIC_COST_DETAILS.innerHTML = program.academicCostDetails;
    LIVING_COST.innerHTML = program.livingCost;
    LIVING_COST_DETAILS.innerHTML = program.livingCostDetails;
    INTERESTING_FACTS.innerHTML = program.interestingFacts;

    PRIMARY_SOURCES.innerHTML = program.primarySources;
    SECONDARY_SOURCES.innerHTML = program.secondarySources;
}

/**
 * Increases the current index by 1 to show the next school
 */
function next() {
    console.log('hello world');
    // check if the current index is equal to or lower than the highest bound
    if (idx <= programs.length) {
        updateData(programs[++idx]);
    }
}

/**
 * Increases the current index by 1 to show the previous school
 */
function prev() {
    console.log('hell world');
    // check if the current index is equal to or higher than the lowest bound
    if (idx >= 0) {
        updateData(programs[--idx]);
    }
}

/** callback to attach event listeners as this script is included as a module script */
function attachListeners() {
    BTN_NXT.addEventListener("click",next);
    BTN_PRV.addEventListener("click",prev);
}
document.addEventListener("DOMContentLoaded", (event) => {
    attachListeners(); 
    console.log(JSON.parse(JSON.stringify(programs)));
});

