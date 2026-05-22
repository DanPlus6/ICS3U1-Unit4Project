'use strict';

//traversal for the school pages
let currentIndex = 0;

/**
 * Updates the arrays with the current index variable
 */
function updateData(){
    schoolNames[currentIndex];
    cities[currentIndex];
    provinces[currentIndex];
    countries[currentIndex];
    schoolPictures[currentIndex];
    mapPictures[currentIndex];
    programNames[currentIndex];
    lengthsOfPrograms[currentIndex];
    programDescriptions[currentIndex];
    coop[currentIndex];
    admissionCoursesNeeded[currentIndex];
    admissionAveragesNeeded[currentIndex];
    domesticTuitions[currentIndex];
    internationalTuitions[currentIndex];
    academicCostDetails[currentIndex];
    academicCosts[currentIndex];
    livingCostDetails[currentIndex];
    livingCosts[currentIndex];
    interestingFacts[currentIndex];
    primarySources1[currentIndex];
    primarySources2[currentIndex];
    primarySources3[currentIndex];
    secondarySources1[currentIndex];
    secondarySources2[currentIndex];
}

/**
 * Increases the current index by 1 to show the next school
 */
function nextSchool(){
    //check if the current index is equal to or lower than the highest bound
    if (currentIndex <= numberOfSchools){
        currentIndex++
        updateData();
    }
}

/**
 * Increases the current index by 1 to show the previous school
 */
function prevSchool(){
    //check if the current index is equal to or higher than the lowest bound
    if (currentIndex >= 0){
        currentIndex--
        updateData();
    }
}