'use strict';

//traversal for the school pages
let currentIndex = 0;

/**
 * Updates the arrays with the current index variable
 */
function updateData(updateIndex){
    schoolNames[updateIndex];
    cities[updateIndex];
    provinces[updateIndex];
    countries[updateIndex];
    schoolPictures[updateIndex];
    mapPictures[updateIndex];
    programNames[updateIndex];
    lengthsOfPrograms[updateIndex];
    programDescriptions[updateIndex];
    coop[updateIndex];
    admissionCoursesNeeded[updateIndex];
    admissionAveragesNeeded[updateIndex];
    domesticTuitions[updateIndex];
    internationalTuitions[updateIndex];
    academicCostDetails[updateIndex];
    academicCosts[updateIndex];
    livingCostDetails[updateIndex];
    livingCosts[updateIndex];
    interestingFacts[updateIndex];
    primarySources1[updateIndex];
    primarySources2[updateIndex];
    primarySources3[updateIndex];
    secondarySources1[updateIndex];
    secondarySources2[updateIndex];
}

/**
 * Increases the current index by 1 to show the next school
 */
function nextSchool(){
    //check if the current index is equal to or lower than the highest bound
    if (currentIndex <= numberOfSchools){
        currentIndex++
        updateData(currentIndex);
    }
}

/**
 * Increases the current index by 1 to show the previous school
 */
function prevSchool(){
    //check if the current index is equal to or higher than the lowest bound
    if (currentIndex >= 0){
        currentIndex--
        updateData(currentIndex);
    }
}