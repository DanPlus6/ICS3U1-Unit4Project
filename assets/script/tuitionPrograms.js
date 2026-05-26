'use strict';

/**
 * Finds the indexes of tuition within the highest and lowest input
 * @param {Array} anArray an array to search through
 * @param {number} lowestInput the lowest range
 * @param {number} highestInput the highest range
 * @returns 0 if there is no tuition between these ranges, an array with the tuition indexes if there are tuitions within these ranges
 */
function tuitionRanges(anArray, lowestInput, highestInput){
    //contains the amount of times the tuition is inside the ranges
    let indexCount = countOccurrances(anArray, lowestInput, highestInput);
    //check if there is no tuition inside the range
    if (indexCount == 0){
        return 0;
    }
    //contains the indexes of the tuitions that is inside the ranges
    let tuitionIndexes = new Array(indexCount);
    //secondary iterator that traverses through the tuitionIndexes array
    let k = 0;
    //traverse through the array to find the indexes of tuition that are inside the ranges
    for (let i; i < anArray.length; i++){
        //find if the current element is inside the ranges
        if (anArray[i] >= lowestInput && anArray[i] <= highestInput){
            tuitionIndexes[k] = i;
            k++;
        }
    }
    return tuitionIndexes;
}