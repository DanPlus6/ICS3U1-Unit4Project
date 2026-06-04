'use strict';

import { Program } from "./class/Program.js";
import { addArrays } from "./function/addArrays.js";
import { getLocal } from "./function/getLocal.js";
import { sortArray } from "./function/sortArray.js";
import { append } from "./function/append.js";
import { getListHTML } from "./function/getListHTML.js";

// get the HTML elements
const SCHOOL_NAME = document.getElementById('schoolName');
const CITY = document.getElementById('city');
const PROVINCE = document.getElementById('province');
const COUNTRY = document.getElementById('country');
const SCHOOL_PIC = document.getElementById('schoolPicture');
const MAP_PIC = document.getElementById('mapPicture');
const PROGRAM_NAME = document.getElementById('programName');
const PROGRAM_LENGTH = document.getElementById('lengthOfProgram');
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
const INTERESTING_FACTS = document.getElementById('interestingFacts');
const PRIMARY_SOURCES = document.getElementById('primarySources');
const SECONDARY_SOURCES = document.getElementById('secondarySources');
const BTN_ADD_FACT = document.getElementById('btn-addfact');
const BTN_ADD_PRIMARY_SOURCE = document.getElementById('btn-addprimsource');
const BTN_ADD_SECONDARY_SOURCE = document.getElementById('btn-addsecsource');
const BTN_VERIFY = document.getElementById('btn-verify');
const BTN_SAVE = document.getElementById('btn-save');

/** boolean to determine if the user's program has coop or not */
let hasCoop = true;

/**
 * Swaps the coop mode from having coop to not having coop and vice versa
 */
function swapCoop() {
    // check current coop mode/status to swap it
    if (hasCoop) {
        hasCoop = false;
        HAS_COOP.textContent = "Has Coop: No";
    } else {
        hasCoop = true;
        HAS_COOP.textContent = "Has Coop = Yes";
    }
}

/** flag to check if program's values are valid */
let valid = true;

/** Saves programs into local storage */
function save() {
    verify();
    if (!valid){
        alert('Invalid Input');
        return;
    }
    let programs = getLocal();
    sortArray(programs);
    let newProgram = new Program(SCHOOL_NAME.value, CITY.value, PROVINCE.value, COUNTRY.value, SCHOOL_PIC.value, MAP_PIC.value, PROGRAM_NAME.value, PROGRAM_LENGTH.value, PROGRAM_DESC.value, hasCoop, ADMISSION_COURSES.value, ADMISSION_AVERAGE.value, DOMESTIC_TUITION.value, INTERNATIONAL_TUTION.value,ACADEMIC_COST_DETAILS.value, ACADEMIC_COST.value, LIVING_COST_DETAILS.value, LIVING_COST.value, INTERESTING_FACTS.value, PRIMARY_SOURCES.value, SECONDARY_SOURCES.value);
    append(programs, newProgram);
    localStorage.setItem("program", JSON.stringify(programs));
    console.log("successfully saved");
}

/** Check if the program is valid */
function verify() {
    valid = true;

    // check if domestic tuition is a numerical value
    if (isNaN(DOMESTIC_TUITION.value)) valid = false; 

    // check if international tuition is a numerical value
    if (isNaN(INTERNATIONAL_TUTION.value)) valid = false; 

    // check if academic cost is a numerical value
    if (isNaN(ACADEMIC_COST.value)) valid = false; 

    // check if living cost is a numerical value
    if (isNaN(LIVING_COST.value)) valid = false;
    
    // check if program length is a numerical value
    if (isNaN(PROGRAM_LENGTH.value)) valid = false;
}

/** callback to attach event listeners as this script is included as a module script */
function attachListeners() {
    HAS_COOP.addEventListener("click",swapCoop);
    BTN_ADD_FACT.addEventListener("click", () => addEditableListItem(INTERESTING_FACTS, 'Fact'));
    BTN_ADD_PRIMARY_SOURCE.addEventListener("click", () => addEditableListItem(PRIMARY_SOURCES, 'priSource'));
    BTN_ADD_SECONDARY_SOURCE.addEventListener("click", () => addEditableListItem(SECONDARY_SOURCES, 'secSource'));
    BTN_VERIFY.addEventListener("click",verify);
    BTN_SAVE.addEventListener("click",save);
}

/** async callback to run once page loads */
function init() {
    // attaches event listeners
    attachListeners();
}

document.addEventListener("DOMContentLoaded", init);
