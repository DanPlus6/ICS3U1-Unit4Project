'use strict';

export function searchAllMatches(arr, searchVal) {
    //contains the amount of times the search value is found in the array
    let count = countOccurrances(arr, searchVal, 0);
    //search if search value was not found
    if (count == 0){
        return 0;
    }
    //contains the indexes of the original array that contains the search value
    let newArr = new Array(count);
    //secondary iterator to traverse through newArr
    let k = 0;
    //traverse through the original array to find the indexes of what contains search value
    for (i = 0; i < arr.length; i++){
        //search if current element is equal to search value
        if (arr[i] == searchVal){
            newArr[k] = i
            k++;
        }
    }
    return newArr;
}
