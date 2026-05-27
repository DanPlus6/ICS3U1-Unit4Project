'use strict';

/**
 * Searches for occurences of a pattern in a text using the Knuth–Morris–Pratt algorithm
 * @param {*} txt Text to search in
 * @param {*} pat Pattern to search for in text
 * @returns {number[]} all indices in text where pattern match is found
 */
export function searchString(txt, pat) {
    // Construct LPS
    /** longest prefix sum array for string searching */
    const lps = new Array(pat.length);
    /** length of longest prefix which is also a suffix for the previous index */
    let len = 0;

    lps[0] = 0;
    
    let i = 1;
    while (i < pat.length) {
        // if there is pattern match, increment lps size
        if (pat[i] === pat[len]) {
            ++len;
            lps[i] = len;
            ++i;
        }
        // If mismatch of pattern occurs
        else {
            // set len to the previous lps value to avoid redundant comparisons if longest prefix len is 0
            if (len !== 0) {
                len = lps[len-1];
            } 
            // if no matching prefix, set lps[i] to 0
            else {
                lps[i] = 0;
                ++i;
            }
        }
    }
    
    // Search
    const res = [];

    /** primary iterator for traversing the text */
    let i = 0;
    /** secondary iterator for traversing the pattern */
    let j = 0;
    // iterate through text
    while (i < txt.length) {
        // if characters match, move both iterators forward
        if (txt[i] === pat[j]) {
            ++i;
            ++j;

            // check if entire pattern is matched to store the start index in result
            if (j === m) {
                res.push(i-j);
                
                // Use LPS of previous index to skip unnecessary comparisons
                j = lps[j - 1];
            }
        }
        // check if there is a mismatch
        else {
            // use lps value of previous index to avoid redundant comparisons
            if (j !== 0)
                j = lps[j-1];
            else
                ++i;
        }
    }

    return res;
}
