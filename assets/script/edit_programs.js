'use strict';

// get the HTML elements
const SCHOOL_NAME = document.getElementById('schoolName');
const CITY = document.getElementById('city');
const PROVINCE = document.getElementById('province');
const COUNTRY = document.getElementById('country');
const SCHOOL_PIC = document.getElementById('schoolPicture');
const MAP_PIC = document.getElementById('mapPicture');
const PROGRAM_NAME = document.getElementById('programName');
const PROGRAM_LENGTH = document.getElementById('programLength');
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
let nonCoop = false;

function swapCoop(){
    if (hasCoop){
        hasCoop = false;
        nonCoop = true;
        HAS_COOP.textContent = "Has Coop: No";
    }
    else {
        hasCoop = true;
        nonCoop = false;
        HAS_COOP.textContent = "Has Coop: Yes";
    }
}
