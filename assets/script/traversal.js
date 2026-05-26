'use strict';

//traversal for the school pages
let currentIndex = 0;

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