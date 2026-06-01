'use strict';

// Import the functions from the function toolbox
import { addArrays } from './function/addArrays';
import { rangeSearch } from './function/rangeSearch';
import { removeDuplicates } from './function/removeDuplicates';
import { searchString } from './function/searchString';
import { searchAllMatches } from './function/searchAllMatches';
import { sortArray } from ',/function/sortArray';
import { Program } from './class/Program';
import { pop } from './function/pop';
import { countOccurrances } from './function/countOccurrances';

//get the HTML elements
const TXT_INPUT = document.getElementById('txt-input');
const TXT_UPPER_BOUND = document.getElementById('txt-upper-bound');
const TXT_LOWER_BOUND = document.getElementById('txt-lower-bound');

//contain the array with all the indexes that fulfills all searches
let searchResult;

//contain the array with all indexes that fulfills the new search
let newSearch;

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
    let upperBound = TXT_UPPER_BOUND.value;
    //contains the lower bound the user imposed
    let lowerBound = TXT_LOWER_BOUND.value;
    //check if the upper bound and lower bound inputs are numbers
    if (!NaN(upperBound) && !NaN(lowerBound)){
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
    let upperBound = TXT_UPPER_BOUND.value;
    //contains the lower bound the user imposed
    let lowerBound = TXT_LOWER_BOUND.value;
    //check if the upper bound and lower bound inputs are numbers
    if (!NaN(upperBound) && !NaN(lowerBound)){
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
 * Finds the indexes of elements that have the same length of program as the user input
 * @returns -2 if there are no elements that are equal to the user input
 * -1 if the user did not input a number
 * array containing indexes of elements that are equal to the user input if conditions are fulfilled
 */
function lengthSearch(){
    //contains the user input
    let userInput = TXT_INPUT.value;
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
 * Shows the partial search results
 */
function showPartialSearch(){
    newSearch = partialSearch();
    //check if the user inputed a number
    if (newSearch = -1){
        //input "please input a string"
    }
    else {
        //check if there was no previous search result
        if (searchResult == null){
            searchResult = newSearch;
        }
        else{
            //contains the elements that are in the newSearch and searchResult arrays
            let newSearchResults = new Array(searchResult.length);
            //iterator for newSearchResults array
            let k = 0;
            //traverse through the newSearch array
            for (let i = 0; i < newSearch.length; i++){
                //find if the elements in newSearch is inside searchResult
                if (countOccurrances(searchResult, newSearch[i], 0) > 0){
                    //copy the elements that are in both into the newSearchResults array
                    newSearchResults[k] = newSearch[i];
                    k++
                }
            }
            //check if there is no matching result
            if (k == 0){
                //input "there is no matching result"
            }
            else {
                //iterator to remove undefined elements
                let j = searchResult.length;
                //find the difference between the count and the array length
                for (j; j > k ; j--){
                    pop(newSearchResults);
                }
            }
            searchResult = newSearchResults;
            //input the search result below
        }
    }
}

/**
 * Shows the coop search results
 */
function showCoop(){
    newSearch = coopSearch();
    //check if there is no previous search
    if (searchResult == null){
        searchResult = newSearch;
    }
    else{
        //contains the common elements between newSearch and searchResult
        let newSearchResults = new Array(searchResult.length);
        //iterator for newSearchResults
        let k = 0;
        //traverse through the newSearch array
        for (let i = 0; i < newSearch.length; i++){
            //check if the newSearch element is inside searchResult
            if (countOccurrances(searchResult, newSearch[i], 0) > 0){
                newSearchResults[k] = newSearch[i];
                k++
            }
        }
        //check if there is no common elements
        if (k == 0){
            //input "there is no matching result"
        }
        else {
            //iterator to remove undefined elements
            let j = searchResult.length;
            //find the difference between the count and the array length
            for (j; j > k ; j--){
                pop(newSearchResults);
            }
        }
        searchResult = newSearchResults;
        //input the search result below
    }
}

/**
 * Shows the non-coop results
 */
function showNonCoop(){
    newSearch = nonCoopSearch();
    //check if there is no previous search
    if (searchResult == null){
        searchResult = newSearch;
    }
    else{
        //contains the common elements between newSearch and searchResult
        let newSearchResults = new Array(searchResult.length);
        //iterator for newSearchResults
        let k = 0;
        //traverse through newSearch array
        for (let i = 0; i < newSearch.length; i++){
            //check if there are any common elements between newSearch and searchResult
            if (countOccurrances(searchResult, newSearch[i], 0) > 0){
                newSearchResults[k] = newSearch[i];
                k++
            }
        }
        //check if there are no common elements
        if (k == 0){
            //input "there is no matching result"
        }
        else {
            //iterator to remove undefined elements
            let j = searchResult.length;
            //find the difference between the count and the array length
            for (j; j > k ; j--){
                pop(newSearchResults);
            }
        }
        searchResult = newSearchResults;
        //input the search result below
    }
}

/**
 * Shows the domestic tuition search results
 */
function showDomTuition(){
    newSearch = domTuitionSearch();
    //check if the user inputed a not a number
    if (newSearch == -1){
        //input "please input a number"
    }
    //check if the user inputed a number that has no tuition inside the range
    else if (newSearch == -2){
        //input "there is no tuition in this range"
    }
    else {
        //check if there is no previous search result
        if (searchResult == null){
            searchResult = newSearch;
        }
        else{
            //contains the common elements between newSearch and searchResult
            let newSearchResults = new Array(searchResult.length);
            //iterator for newSearchResults
            let k = 0;
            //traverse through newSearch
            for (let i = 0; i < newSearch.length; i++){
                //check if there are any common elements between newSearch and searchResult
                if (countOccurrances(searchResult, newSearch[i], 0) > 0){
                    newSearchResults[k] = newSearch[i];
                    k++
                }
            }
            //check if there is no matching result
            if (k == 0){
                //input "there is no matching result"
            }
            else {
                //iterator to remove undefined elements
                let j = searchResult.length;
                //find the difference between the count and array length
                for (j; j > k ; j--){
                    pop(newSearchResults);
                }
            }
            searchResult = newSearchResults;
            //input the search result below
        }
    }
}

/**
 * Search the international tuition search results
 */
function showIntTuition(){
    newSearch = intTuitionSearch();
    //check if the user inputed not a number
    if (newSearch == -1){
        //input "please input a number"
    }
    //check if there is no tuiton in the range the user inputed
    else if (newSearch == -2){
        //input "there is no tuition in this range"
    }
    else {
        //check if there is no previous search
        if (searchResult == null){
            searchResult = newSearch;
        }
        else{
            //contains the common elements between newSearch and searchResult
            let newSearchResults = new Array(searchResult.length);
            //iterator for newSearchResults
            let k = 0;
            //traverse through newSearch
            for (let i = 0; i < newSearch.length; i++){
                //check if there are any common elements between newSearch and searchResult
                if (countOccurrances(searchResult, newSearch[i], 0) > 0){
                    newSearchResults[k] = newSearch[i];
                    k++
                }
            }
            //check if there is no common elements between newSearch and searchResult
            if (k == 0){
                //input "there is no matching result"
            }
            else {
                //iterator to remove undefined elemnts
                let j = searchResult.length;
                //find the difference between the count and array length
                for (j; j > k ; j--){
                    pop(newSearchResults);
                }
            }
            searchResult = newSearchResults;
            //input the search result below
        }
    }
}

/**
 * Search the international tuition search results
 */
function showLength(){
    newSearch = lengthSearch();
    //check if the user inputed not a number
    if (newSearch == -1){
        //input "please input a number"
    }
    //check if there is no length equal to the user input
    else if (newSearch == -2){
        //input "there is no length equal to the input"
    }
    else {
        //check if there is no previous search
        if (searchResult == null){
            searchResult = newSearch;
        }
        else{
            //contains the common elements between newSearch and searchResult
            let newSearchResults = new Array(searchResult.length);
            //iterator for newSearchResults
            let k = 0;
            //traverse through newSearch
            for (let i = 0; i < newSearch.length; i++){
                //check if there are any common elements between newSearch and searchResult
                if (countOccurrances(searchResult, newSearch[i], 0) > 0){
                    newSearchResults[k] = newSearch[i];
                    k++
                }
            }
            //check if there is no common elements between newSearch and searchResult
            if (k == 0){
                //input "there is no matching result"
            }
            else {
                //iterator to remove undefined elemnts
                let j = searchResult.length;
                //find the difference between the count and array length
                for (j; j > k ; j--){
                    pop(newSearchResults);
                }
            }
            searchResult = newSearchResults;
            //input the search result below
        }
    }
}

function resetSearches(){
    searchResult = null;
}