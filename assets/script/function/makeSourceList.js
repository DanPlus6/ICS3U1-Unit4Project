'use strict';

import { makeElem } from "./makeElem.js";

/**
 * Creates a list of research source links
 * @param {string[]} sources array of source urls
 * @returns {HTMLUListElement} list containing source links
 * 
 * By: David Fu
 */
export function makeSourceList(sources) {
    const sourceList = makeElem({tag:'ul'});

    for (const source of sources) {
        const sourceItem = makeElem({tag:'li'});
        const sourceLink = makeElem({tag:'a', href:source, htmlContent:source});
        sourceItem.append(sourceLink);
        sourceList.append(sourceItem);
    }

    return sourceList;
}
