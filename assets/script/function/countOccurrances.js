'use strict';

/**
 * Finds the amount of times this event happens in an array
 * @param {*} anArray an array to search through
 * @param {*} lowestInput the lowest range -- or if there is no highest range, if the number is equal
 * @param {*} highestInput the highest range -- 0 if there is no highest range
 * @returns the amount of times it occurs 
 */
export function countOccurrances(anArray, lowestInput, highestInput){
    let countAmount = 0;
    //check if there is no highest input
    if (highestInput == 0){
        //traverse through the array to count the amount of times the array element is equal to the lowest bound
        for (let i; i < anArray.length; i++){
            if (anArray[i] == lowestInput){
                countAmount++;
            }
        }
    }
    else {
         //traverse through the array to count the amount of times the array element is inside the ranges
        for (let i; i < anArray.length; i++){
            if (anArray[i] >= lowestInput && anArray[i] <= highestInput){
                countAmount++;
            }
        }
    }
    return countAmount;
}
