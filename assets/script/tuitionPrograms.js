'use strict';

/**
 * Finds the amount of times this event happens in an array
 * @param {*} anArray an array to search through
 * @param {*} lowestInput the lowest range -- or if there is no highest range, if the number is equal
 * @param {*} highestInput the highest range -- 0 if there is no highest range
 * @returns the amount of times it occurs 
 */
function countOccurrances(anArray, lowestInput, highestInput){
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
    else {
        //contains the indexes of the tuitions that is inside the ranges
        let tuitionIndexes = new Array(indexCount);
    }
    //secondary iterator that traverses through the tuitionIndexes array
    let k = 0;
    //traverse through the array to find the indexes of tuition that are inside the ranges
    for (let i; i < anArray.length; i++){
        //find if the current element is inside the ranges
        if (anArray[i] >= lowestInput && anArray[i] <= highestInput){
            tuitionRanges[k] = anArray[i];
            k++;
        }
    }
    return tuitionRanges;
}

/**
 * Finds the indexes of program lengths that are equal to the amount that is being found
 * @param {Array} anArray an array to search through
 * @param {number} programLength the length being searched
 * @returns 0 if there is no program that matches this length -- an array containing the indexes of the array that matches to the amount if there are programs that matches
 */
function programLengths(anArray, programLength){
    //contains the amount of times the array matches the program length
    let indexCount = countOccurrances(anArray, programLength, 0);
    //if there is none that matches
    if (indexCount == 0){
        return 0;
    }
    else {
        //contains the indexes of the programs that matches the length being searched
        let programIndexes = new Array(indexCount);
    }
    //secondary iterator to traverse through programIndexes array
    let k = 0;
    //traverse through the array to find which elements matches the length
    for (let i; i < anArray.length; i++){
        //find if the current element matches the length being searched for
        if (anArray[i] == programLength){
            programIndexes[k] = anArray[i];
            k++;
        }
    }
}