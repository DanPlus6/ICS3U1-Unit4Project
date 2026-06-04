'use strict';

/**
 * Creates html element optionally with a value
 * @param {Object} args object of arguments passed
 * @param {HTMLElementType} args.tag type of html tag/element to create
 * @param {string} [args.className] optional classname to assign to the element
 * @param {string} [args.id] optional id to assign to the element
 * @param {string} [args.htmlContent] optional innerHTML content to assign to element
 * @returns {HTMLElement} target to created html element
 */
export function makeElem({tag, className, id, htmlContent}) {
    /** 
     * target to created html element
     * @type {HTMLElement}
     */
    const elem = document.createElement(tag);
    
    // check if class name was specified to assign it
    if (className) elem.className = className;
    // check if id was specified to assign it
    if (id) elem.id = id;
    // check if innerHTML content was specified to assign it
    if (htmlContent) elem.innerHTML = htmlContent;


    return elem;
}
