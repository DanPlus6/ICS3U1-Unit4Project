'use strict';

/**
 * Cocatinates 2 arrays into 1 bigger array
 * @param {Array} array1 The first array
 * @param {Array} array2 The second array
 * @returns The bigger array
 */
function addArrays(array1, array2){
    //the total array has all of array1 followed by array2
    let totalArray = new Array(array1.length + array2.length);

    //copy all of array1 into totalArray
    for (let i = 0; i < array1.length; i++){
        totalArray[i] = array1[i];
    }

    //store the secondary iterator for totalArray
    let k = array1.length - 1;

    //copy all of array2 into totalArray
    for (let i = 0; i < array2.length; i++){
        totalArray[k] = array2[i];
        k++;
    }

    return totalArray;
}