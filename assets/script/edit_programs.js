'use strict';

import { Program } from "./class/Program.js";
import { addArrays } from "./function/addArrays.js";
import { getLocal } from "./function/getLocal.js";
import { sortArray } from "./function/sortArray.js";
import { append } from "./function/append.js";

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

// boolean to determine if the user's program has coop or not
let hasCoop = true;

function swapCoop(){
    if (hasCoop){
        hasCoop = false;
        HAS_COOP.textContent = "Has Coop = No";
    }
    else {
        hasCoop = true;
        HAS_COOP.textContent = "Has Coop = Yes";
    }
}

function save(){
    let programs = getLocal();
    sortArray(programs);
    
    let newProgram = new Program(SCHOOL_NAME.value, CITY.value, PROVINCE.value, COUNTRY.value, SCHOOL_PIC.value, MAP_PIC.value, PROGRAM_NAME.value, PROGRAM_LENGTH.value, PROGRAM_DESC.value, hasCoop, ADMISSION_COURSES.value, ADMISSION_AVERAGE.value, DOMESTIC_TUITION.value, INTERNATIONAL_TUTION.value,ACADEMIC_COST_DETAILS.value, ACADEMIC_COST.value, LIVING_COST_DETAILS.value, LIVING_COST.value, INTERESTING_FACTS.value, PRIMARY_SOURCES.value, SECONDARY_SOURCES.value);
    append(programs, newProgram);
    localStorage.setItem("program", JSON.stringify(programs));
}
