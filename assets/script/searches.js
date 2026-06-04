'use strict';

// Import the functions from the function toolbox
import { addArrays } from './function/addArrays.js';
import { rangeSearch } from './function/rangeSearch.js';
import { removeDuplicates } from './function/removeDuplicates.js';
import { searchString } from './function/searchString.js';
import { searchAllMatches } from './function/searchAllMatches.js';
import { sortArray } from ',/function/sortArray.js';
import { Program } from './class/Program.js';
import { pop } from './function/pop.js';
import { countOccurrances } from './function/countOccurrances.js';
import { getPrograms } from './function/getPrograms.js';

//get the HTML elements
const TXT_INPUT = document.getElementById('txt-input');
const TT_UPPER_BOUND = document.getElementById('tt-upper-bound');
const TT_LOWER_BOUND = document.getElementById('tt-lower-bound');
const PROGRAM_LENGTH = document.getElementById('program-length');
const BTN_SWAP_TUITION = document.getElementById('btn-swap-tuition');
const P_OUTPUT = document.getElementById('p-output');

//contain the array with all the indexes that fulfills all searches
let searchResult;

//contain the array with all indexes that fulfills the new search
let newSearch;

//contains whether the user chose the international or domestic tution
let internationalChose = false;
let domesticChose = true;

/**
 * Finds all unique indexes of arrays that includes the search value
 * @returns -1 if the user did not input a string
 * unique indexes that includes the search value
 */
function partialSearch(){
    //contains the user's search value
    let userSearch = TXT_INPUT.value;
    //check if the search value is a number
    if (NaN(userSearch)){
        //contains the array with all the indexes that includes the search
        let resIndexes = addArrays(searchString(userSearch, schoolName), searchString(userSearch, city));
        resIndexes = addArrays(resIndexes, searchString(userSearch, province));
        resIndexes = addArrays(resIndexes, searchString(userSearch, country));
        resIndexes = addArrays(resIndexes, searchString(userSearch, programName));
        resIndexes = addArrays(resIndexes, searchString(userSearch, programDescription));
        resIndexes = addArrays(resIndexes, searchString(userSearch, admissionCoursesNeeded));
        resIndexes = addArrays(resIndexes, searchString(userSearch, academicCostDetails));
        resIndexes = addArrays(resIndexes, searchString(userSearch, livingCostDetails));
        resIndexes = addArrays(allIndexes, searchString(userSearch, interstingFacts));
        resIndexes = sortArray(resIndexes);
        resIndexes = removeDuplicates(resIndexes);
        return resIndexes;
    }
    else {
        return -1
    }
}

/**
 * Finds the indexes in the coop array that includes coop
 * @returns indexes that has coop
 */
function coopSearch(){
    resIndexes = searchAllMatches(hasCoop, true);
    return resIndexes;
}

/**
z* Finds the indexes in the coop array that does not include coop
 * @returns indexes that does not have coop
 */
function nonCoopSearch(){
    resIndexes = searchAllMatches(hasCoop, false);
    return resIndexes;
}

/**
 * Finds the domestic tuition between this range
 * @returns -2 if there is nothing that is inside the range
 * -1 if the inputs are not numbers
 * the indexes that is inside the range if conditions are fulfilled
 */
function domTuitionSearch(){
    //contains the upper bound the user imposed
    let upperBound = TT_UPPER_BOUND.value;
    //contains the lower bound the user imposed
    let lowerBound = TT_LOWER_BOUND.value;
    //check if the upper bound and lower bound inputs are numbers
    if (!isNaN(upperBound) && !isNaN(lowerBound)){
        resArray = rangeSearch(domesticTuition, lowerBound, upperBound);
        //check if the elements inside hte domestic tuition are inside the bounds
        if (resArray != -1){
            return resArray
        }
        else {
            return -2
        }
    }
    else {
        return -1
    }
}

/**
 * Finds the international tuition between this range
 * @returns -2 if there is nothing that is inside the range
 * -1 if the inputs are not numbers
 * the indexes that is inside the range if conditions are fulfilled
 */
function intTuitionSearch(){
    //contains the upper bound the user imposed
    let upperBound = TT_UPPER_BOUND.value;
    //contains the lower bound the user imposed
    let lowerBound = TT_LOWER_BOUND.value;
    //check if the upper bound and lower bound inputs are numbers
    if (!isNaN(upperBound) && !isNaN(lowerBound)){
        //contains the indexes of elements within the bounds
        let resArray = rangeSearch(internationalTuition, lowerBound, upperBound);
        //check if the elements inside the domestic tuition are inside the bounds
        if (resArray != -1){
            return resArray
        }
        else {
            return -2
        }
    }
    else {
        return -1
    }
}

/**
 * Swap the tuition the user is choosing
 */
function swapTuitionMode(){
    //check if the user is on domestic tuition
    if (domesticChose == true){
        domesticChose = false;
        internationalChose = true; 
        BTN_SWAP_TUITION.textContent = "International Tuition";
    }
    else {
        internationalChose = false;
        domesticChose = true;
        BTN_SWAP_TUITION.textContent = "Domestic Tuition";
    }
}

/**
 * Finds the indexes of elements that have the same length of program as the user input
 * @returns -2 if there are no elements that are equal to the user input
 * -1 if the user did not input a number
 * array containing indexes of elements that are equal to the user input if conditions are fulfilled
 */
function lengthSearch(){
    //contains the user input
    let userInput = PROGRAM_LENGTH.value;
    //check if the user input is a number
    if (!NaN(userInput)){
        //contains the indexes of elements that are the length of the program
        let resArray = searchAllMatches(lengthOfProgram, userInput);
        //check if there are any elements that are equal to the user input
        if (resArray != -1){
            return resArray;
        }
        else {
            return -2
        }
    }
    else {
        return -1
    }
}

/**
 * Determines which searches to filter and displays it
 */
function showAllSearches(){
    //contains the first filter
    let secondarySearch;
    //contains the common elements between the original search and first filter
    let commonSearch;
    //contains the user input
    const userInput = TXT_INPUT.value;
    const lowerBound = TT_LOWER_BOUND.value;
    const upperBound = TT_UPPER_BOUND.value;
    const lengthSearch = PROGRAM_LENGTH.value;
    //check if the user has nothing inputed
    if (userInput == '' && lowerBound == '' && upperBound == '' && lengthSearch == ''){

    }
    //check if the user did not input a partial search
    if (userInput == ''){
        //check if the user did not input anything into tuition search
        if (lowerBound == '' && upperBound == ''){
            //contains the starting search
            let originalSearch = lengthSearch();
        }
        //check if the user did not input anything into length search
        else if (lengthSearch == ''){
            //check if both the upper and lower bound has inputs
            if (lowerBound != '' && upperBound != ''){
                //check if the user chose domestic tuition
                if (domesticChose){
                    //contains the starting search
                    let originalSearch = domTuitionSearch();
                }
                else {
                    //contains the starting search
                    let originalSearch = intTuitionSearch();
                }
            }
        }
        else {
            //check if the inputed into both the upper bound and lower bound
            if (lowerBound != '' && upperBound != ''){
                //check if the user chose domestic search
                if (domesticChose){
                    //contains the starting search
                    let originalSearch = domTuitionSearch();
                    //contains the first filter
                    secondarySearch = lengthSearch();
                    //contains the common elements between the original search and first filter
                    commonSearch = new Array(secondarySearch.length);
                    //iterator for the commonSearch
                    let k = 0;
                    //traverse through the secondarySearch
                    for (let i = 0; i < secondarySearch.length; i++){
                        //check if the current element in secondarySearch occurs in origialSearch
                        if (countOccurrances(originalSearch, secondarySearch[i], 0) > 0){
                            commonSearch[k] = secondarySearch[i];
                            k++;
                        }
                    }
                    //check if there are no common elements
                    if (k == 0){

                    }
                    //iterator to remove undefined elements
                    let j = secondarySearch.length;
                    //finds the difference between the length of secondarySearch and the common element count to remove undefined elements
                    for (j; j > k; j--){
                        pop(commonSearch);
                    }
                }
                else {
                    //contains the starting search
                    let originalSearch = intTuitionSearch();
                    //contains the first filter
                    secondarySearch = lengthSearch();
                    //contains the common elements between the original search and first filter
                    commonSearch = new Array(secondarySearch.length);
                    //iterator for the commonSearch
                    let k = 0;
                    //traverse through the secondarySearch
                    for (let i = 0; i < secondarySearch.length; i++){
                        //check if the current element in secondarySearch occurs in origialSearch
                        if (countOccurrances(originalSearch, secondarySearch[i], 0) > 0){
                            commonSearch[k] = secondarySearch[i];
                            k++;
                        }
                    }
                    //check if there are no common elements
                    if (k == 0){

                    }
                    //iterator to remove undefined elements
                    let j = secondarySearch.length;
                    //finds the difference between the length of secondarySearch and the common element count to remove undefined elements
                    for (j; j > k; j--){
                        pop(commonSearch);
                    }
                }
            }
        }
    }
    else {
        //contains the starting search
        let originalSearch = partialSearch();
        if (lowerBound == '' && upperBound == ''){
            //contains the first filter
            secondarySearch = lengthSearch();
            //contains the common elements between the original search and the filter
            commonSearch = new Array(secondarySearch.length);
            //iterator for commonSearch
            let k = 0;
            //traverse through secondarySearch to find the common elements
            for (let i = 0; i < secondarySearch.length; i++){
                //check if the current element is the same as any element in originalSearch
                if (countOccurrances(originalSearch, secondarySearch[i], 0) > 0){
                    commonSearch[k] = secondarySearch[i];
                    k++;
                }
            }
            //check if there are no elements in common
            if (k == 0){

            }
            //iterator to remove undefined elements
            let j = secondarySearch.length;
            //find the difference between the secondarySearch length and the count of common elements to remove the undefined elements
            for (j; k > k; j--){
                pop(commonSearch);
            }
        }
        //check if the user has no input in program length
        else if (lengthSearch == ''){
            //check if the user has inputs in both the upper and lower bound
            if (lowerBound != '' && upperBound != ''){
                //check if the user has domesitic tuition chosen
                if (domesticChose){
                    //contains the first filter
                secondarySearch = domTuitionSearch();
                //contains the common elements between the original search and the filter
                commonSearch = new Array(secondarySearch.length);
                //iterator for commonSearch
                let k = 0;
                //traverse through secondarySearch to find the common elements
                for (let i = 0; i < secondarySearch.length; i++){
                    //check if the current element is the same as any element in originalSearch
                    if (countOccurrances(originalSearch, secondarySearch[i], 0) > 0){
                        commonSearch[k] = secondarySearch[i];
                        k++;
                    }
                }
                //check if there are no elements in common
                if (k == 0){
    
                }
                //iterator to remove undefined elements
                let j = secondarySearch.length;
                //find the difference between the secondarySearch length and the count of common elements to remove the undefined elements
                for (j; k > k; j--){
                    pop(commonSearch);
                }
    
                }
                else {
                    //contains the first filter
                    secondarySearch = intTuitionSearch();
                    //contains the common elements between the original search and the filter
                    commonSearch = new Array(secondarySearch.length);
                    //iterator for commonSearch
                    let k = 0;
                    //traverse through secondarySearch to find the common elements
                    for (let i = 0; i < secondarySearch.length; i++){
                        //check if the current element is the same as any element in originalSearch
                        if (countOccurrances(originalSearch, secondarySearch[i], 0) > 0){
                            commonSearch[k] = secondarySearch[i];
                            k++;
                        }
                    }
                    //check if there are no elements in common
                    if (k == 0){
    
                    }
                    //iterator to remove undefined elements
                    let j = secondarySearch.length;
                    //find the difference between the secondarySearch length and the count of common elements to remove the undefined elements
                    for (j; k > k; j--){
                        pop(commonSearch);
                    }
                }
            }
            else {

            }
        }
        else {
            //check if the user has inputs in both the upper and lower bound and they are both numbers
            if (lowerBound != '' && upperBound != ''){
                //check if the user has domestic tution selected
                if (domesticChose){
                    //contains the first filter
                    secondarySearch = domTuitionSearch();
                    //contains the common elements between the original search and the filter
                    commonSearch = new Array(secondarySearch.length);
                    //iterator for commonSearch
                    let k = 0;
                    //traverse through secondarySearch to find the common elements
                    for (let i = 0; i < secondarySearch.length; i++){
                        //check if the current element is the same as any element in originalSearch
                        if (countOccurrances(originalSearch, secondarySearch[i], 0) > 0){
                            commonSearch[k] = secondarySearch[i];
                            k++;
                        }
                    }
                    //check if there are no elements in common
                    if (k == 0){
    
                    }
                    //iterator to remove undefined elements
                    let j = secondarySearch.length;
                    //find the difference between the secondarySearch length and the count of common elements to remove the undefined elements
                    for (j; k > k; j--){
                        pop(commonSearch);
                    }
                    }
                else {
                    //contains the first filter
                    secondarySearch = intTuitionSearch();
                    //contains the common elements between the original search and the filter
                    commonSearch = new Array(secondarySearch.length);
                    //iterator for commonSearch
                    let k = 0;
                    //traverse through secondarySearch to find the common elements
                    for (let i = 0; i < secondarySearch.length; i++){
                        //check if the current element is the same as any element in originalSearch
                        if (countOccurrances(originalSearch, secondarySearch[i], 0) > 0){
                            commonSearch[k] = secondarySearch[i];
                            k++;
                        }
                    }
                    //check if there are no elements in common
                    if (k == 0){
    
                    }
                    //iterator to remove undefined elements
                    let j = secondarySearch.length;
                    //find the difference between the secondarySearch length and the count of common elements to remove the undefined elements
                    for (j; k > k; j--){
                        pop(commonSearch);
                    }
                }
                //contains the second filter
                let thirdSearch = lengthSearch();
                //contains the common elements between the leftover elements and the second filter
                let resSearch = thirdSearch.length;
                //iterator for resSearch
                let k = 0;
                //traverse through thirdSearch to find the common elements between the leftover elements and second filter
                for (let i = 0; i < thirdSearch.length; i++){
                    //check if the current element in thirdSearch occurs in commonSearch
                    if (countOccurrances(commonSearch, thirdSearch[i], 0) > 0){
                        resSearch[k] = thirdSearch[i];
                        k++;
                    }
                }
                //check if there are no elements in common
                if (k == 0){
    
                }
                //iterator to remove undefined elements
                let j = thirdSearch.length;
                //finds the difference between the common element count and thirdSearch length to delete undefined elements
                for (j; j > k; j--){
                    pop(resSearch);
                }
            }
            else {
                
            }
        }
    }
}