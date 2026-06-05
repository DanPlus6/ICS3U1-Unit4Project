'use strict';

/**
 * Searches for occurrences of a pattern in a text using the Knuth–Morris–Pratt algorithm
 * @param {string} txt Text to search in
 * @param {string} pat Pattern to search for in text
 * @returns {number[]} all indices in text where pattern match is found
 *
 * By: David Fu
 */
export function searchString(txt, pat) {
    // Construct LPS
    /** longest proper prefix which is also a suffix array */
    const lps = new Array(pat.length);
    /** length of longest prefix which is also a suffix for the previous index */
    let len = 0;

    lps[0] = 0;

    // iterate through each character of the pattern (starting at 1 since lps[0] is always 0)
    for (let i = 1; i < pat.length;) {
        // if current pattern character matches the character at the current prefix length
        if (pat[i] === pat[len]) {
            // extend the matching prefix-suffix and record its length at this position
            ++len;
            lps[i] = len;
            ++i;
        } else {
            // if there's a mismatch but we have a non-zero prefix length to fall back to
            if (len !== 0) {
                // fall back using the lps of the previous index to try a shorter prefix
                len = lps[len - 1];
            } else {
                // no prefix to fall back on, so lps at this position is 0; advance to next character
                lps[i] = 0;
                ++i;
            }
        }
    }

    // Search
    const res = [];

    let i = 0; // primary iterator for traversing the text
    let j = 0; // secondary iterator for traversing the pattern

    // iterate through each character of the text
    while (i < txt.length) {
        // if the current text and pattern characters match, advance both iterators
        if (txt[i] === pat[j]) {
            ++i;
            ++j;

            // if j has reached the end of the pattern, a full match was found
            if (j === pat.length) {
                // record the start index of the match, then use lps to skip redundant comparisons
                res.push(i - j);
                j = lps[j - 1];
            }
        } else {
            // mismatch: if j is non-zero, fall back using lps to avoid redundant comparisons
            if (j !== 0)
                j = lps[j - 1];
            else
                // j is already 0, so no fallback is possible; advance to the next text character
                ++i;
        }
    }

    return res;
}
