'use strict';

import { pop } from './pop.js';

/**
 * Finds the indexes of an array within the highest and lowest input
 * @param {Array} anArray an array to search through
 * @param {number} lowestInput the lowest range
 * @param {number} highestInput the highest range
 * @returns 0 if there is no index between these ranges, an array with the indexes if there are elements within these ranges
 */
function tuitionRanges(anArray, lowestInput, highestInput){
    // contains the amount of indexes within the ranges
    let indexCount = 0
    // contains the indexes inside the ranges
    let rangeIndexes = new Array(anArray.length);
    // secondary iterator that traverses through the rangeIndexes array
    let k = 0;
    // traverse through the array to find the indexes that are inside the ranges
    for (let i; i < anArray.length; i++){
        //find if the current element is inside the ranges
        if (anArray[i] >= lowestInput && anArray[i] <= highestInput){
            rangeIndexes[k] = i;
            k++;
        }
    }

    if (indexCount == 0){
        return -1;
    }

    while (indexCount--){
        pop(rangeIndexes);
    }
    return rangeIndexes;
}