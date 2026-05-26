'use strict';

/**
 * Removes all the duplicated data in an array
 * @param {Array} arr An array to remove duplicates from
 * @returns The array with no duplicate data
 */
function removeDuplicates(arr){
    //make is easier to remove duplicates
    sortArray(arr);

    //store only elements without any duplicates BUT it will be too big
    //This means there will be undefined elements at the end.
    //So it needs to be resized after all duplicates are removed
    let newArr = new Array(arr.length);

    //keep track of which index to copy into newArr
    let k = 0;

    //put the first element of anArray into newArr
    let last = arr[0];
    newArr[0] = last; 

    //go through the array, checking if the next element is equal
    //to the lastElement -- if it is, don't copy
    for (let i = 1; i < arr.length; i++){
        if (arr[i] != last){
            //go to the next empty spot in the newArr array
            k++;
            newArr[k] = arr[i];
            last = arr[i];
        }
    }

    //newArr has all the data + a lot of undefined spaces
    // The number of data copied is equal to k + 1
    let finalArr = new Array(k + 1);
    for (let i = 0; i < finalArr.length; i++){
        finalArr[i] = newArr[i];
    }
    return finalArr;
}