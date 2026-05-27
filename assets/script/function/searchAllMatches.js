'use strict';

import { pop } from './pop.js';

/**
 * Searches for all occurences of a value in an array
 * @param {Array} arr the input array
 * @param {*} searchVal the search value
 * @returns {number[]} all indices where value is found
 * 
 * By: Ian Choy
 */
export function searchAllMatches(arr, searchVal) {
    /** track the amount of times the search value is found in the array */
    let count = 0;
    /** array to contain the indexes of the original array that contains the search value */
    let indexes = new Array(arr.length);
    /** secondary iterator to traverse through newArr */
    let k = 0;

    // traverse through the original array to find the indexes of what contains search value
    for (i = 0; i < arr.length; i++) {
        // search if current element is equal to search value
        if (arr[i] == searchVal) {
            indexes[k] = i;
            ++k;
            ++count;
        }
    }

    if (count == 0) return -1;

    while (count--) pop(arr);

    return indexes;
}
