'use strict';

/**
 * Creates a labelled paragraph for one field of program information
 * @param {string} label field label
 * @param {string} value field value
 * @returns {HTMLParagraphElement} paragraph containing the label and value
 * 
 * By: David Fu
 */
export function makeDetail(label, value) {
    const p = makeElem({tag:'p', htmlContent:`${label}: `});
    const span = makeElem({tag:'span', htmlContent:value});
    p.append(span);

    return p;
}
