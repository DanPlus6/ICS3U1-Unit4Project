'use strict';

/**
 * Function to create a html element
 * @param {HTMLElementType} tag type of html tag/element to create
 * @param {string} htmlContent optional innerHTML content to assign to element
 * @returns {HTMLElement} target to created html element
 */
export function makeElem(tag, htmlContent=null) {
    /**
     * target to HTML element to create
     * @type {HTMLElement}
     */
    const elem = document.createElement(tag);
    // if innerHTML content is specified, assign it
    if (htmlContent) elem.innerHTML = htmlContent;

    return elem;
}
