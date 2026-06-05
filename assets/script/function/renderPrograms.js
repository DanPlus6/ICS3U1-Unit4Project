'use strict';

import { Program } from '../class/Program.js';
import { makeElem } from './makeElem.js';
import { makeDetails } from './makeDetails.js';
import { makeSourceList } from './makeSourceList.js';

/**
 * Formats a number with a unit suffix
 * @param {number|string} value value to format
 * @param {string} unit unit to append
 * @returns {string} formatted value
 */
function formatUnit(value, unit) {
    if (value === "" || value == null) return "";

    const numericValue = Number(value);
    if (unit === "years" && numericValue === 1) return `${value} year`;

    return `${value} ${unit}`;
}

/**
 * Formats a number as a dollar amount
 * @param {number|string} value value to format
 * @returns {string} formatted currency
 */
function formatMoney(value) {
    if (value === "" || value == null) return "";
    if (typeof value === "string" && value[0] === "$") return value;

    const numericValue = Number(value);
    if (Number.isNaN(numericValue)) return `$${value}`;

    return `$${numericValue.toLocaleString()}`;
}

/**
 * Formats a number as a percent
 * @param {number|string} value value to format
 * @returns {string} formatted percent
 */
function formatPercent(value) {
    if (value === "" || value == null) return "";
    if (typeof value === "string" && value[value.length-1] === "%") return value;

    return `${value}%`;
}

/** 
 * dynamically generates elements to render programs' data
 * @param {HTMLElement} ct container to generate elemnts in
 * @param {Program[]} pgs array of programs to render
 * @param {boolean} images default to true, choose whether or not to display images
 * 
 * By: David Fu
 */
export function renderPrograms(ct, pgs, images=true) {
    // Fail softly and do not overwrite existing content if programs array is empty
    if (!pgs) return;

    // clear old content
    ct.replaceChildren();

    const frag = document.createDocumentFragment();
    // iterate through provided programs and generate elemtns for each of them
    for (const program of pgs) {
        // Fail softly and continue if current program is empty
        if (!program) continue;

        /** div to contain all of program's information */
        const programInfo = makeElem({tag:'div', className:'program-info'});

        /** div to store general info section of program */
        const generalInfo = makeElem({tag:'div', className:'general-info'});

        const programName = makeElem({tag:'h1', htmlContent:program.programName});
        generalInfo.append(programName);

        const schoolName = makeElem({tag:'h2', htmlContent:program.schoolName});
        generalInfo.append(schoolName);

        const p_city = makeDetails('City', program.city);
        generalInfo.append(p_city);

        const p_province = makeDetails('Province', program.province);
        generalInfo.append(p_province);

        programInfo.append(generalInfo);

        // check if images should be generated
        if (images) {
            /** div to store program images */
            const programImages = makeElem({tag:'div', className:'program-imgs'});

            const imgSchool = makeElem({tag:'img', src:program.schoolPicture, alt:`${program.schoolName} picture`});
            programImages.append(imgSchool);

            const imgMap = makeElem({tag:'img', src:program.mapPicture, alt:`${program.schoolName} map`});
            programImages.append(imgMap);

            programInfo.append(programImages);
        }
        
        /** div to store program details */
        const programDetails = makeElem({tag:'div', className:'program-details'});

        programDetails.append(makeDetails('Length of Program', formatUnit(program.lengthOfProgram, 'years')));
        programDetails.append(makeDetails('Program Description', program.programDescription));
        programDetails.append(makeDetails('Co-op Available', (program.hasCoop ? 'Yes' : 'No')));
        programDetails.append(makeDetails('Admission Courses Needed', program.admissionCoursesNeeded));
        programDetails.append(makeDetails('Admission Average Needed', formatPercent(program.admissionAverageNeeded)));
        programDetails.append(makeDetails('Domestic Tuition', formatMoney(program.domesticTuition)));
        programDetails.append(makeDetails('International Tuition', formatMoney(program.internationalTuition)));
        programDetails.append(makeDetails('Academic Cost', formatMoney(program.academicCost)));
        programDetails.append(makeDetails('Academic Cost Details', program.academicCostDetails));
        programDetails.append(makeDetails('Living Cost', formatMoney(program.livingCost)));
        programDetails.append(makeDetails('Living Cost Details', program.livingCostDetails));

        const interestingFactsHeading = makeElem({tag:'h2', htmlContent:'Interesting Facts'});
        programDetails.append(interestingFactsHeading);

        const interestingFacts = makeElem({tag:'div', htmlContent:program.interestingFacts});
        programDetails.append(interestingFacts);

        programInfo.append(programDetails);


        /** div to store program research sources */
        const researchSources = makeElem({tag:'div', className:'research-sources'});

        const researchHeading = makeElem({tag:'h2', htmlContent:'Research Sources'});
        researchSources.append(researchHeading);

        const primaryHeading = makeElem({tag:'h3', htmlContent:'Primary Sources'});
        researchSources.append(primaryHeading);

        /** div to store program primary research sources */
        const primarySources = makeElem({tag:'div', className:'primary-sources'});
        primarySources.append(makeSourceList(program.primarySources));
        researchSources.append(primarySources);

        const secondaryHeading = makeElem({tag:'h3', htmlContent:'Secondary Sources'});
        researchSources.append(secondaryHeading);

        /** div to store program secondary research sources */
        const secondarySources = makeElem({tag:'div', className:'secondary-sources'});
        secondarySources.append(makeSourceList(program.secondarySources));
        researchSources.append(secondarySources);

        programInfo.append(researchSources);


        frag.appendChild(programInfo);
    }

    ct.appendChild(frag);
}
