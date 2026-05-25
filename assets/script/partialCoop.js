'use strict';

/**
 * Finds the indexes of universities / colleges that have coop
 * @param {Array} anArray 
 * @returns 0 if there are no universities / colleges with coop -- an array containing indexes of universities if there is
 */
function searchCoop(anArray){
    //contains the amount of times there is a coop inside the array
    let indexCount = countOccurrances(anArray, true, 0)
    //if there is no universities / colleges with coop, return 0
    if (indexCount == 0){
        return 0;
    }
    else {
        //contains the indexes of universities / colleges with coop
        let coopIndexes = new Array(indexCount);
    }
    //secondary iterator to traverse through the coopIndexes array
    let k = 0;
    //traverse through the original array to find the indexes that has coop
    for (let i; i < anArray.length; i++){
        //finds if the current element has coop
        if (anArray[i]){
            coopIndexes[k] = anArray[i];
            k++;
        }
    }
    return coopIndexes;
}