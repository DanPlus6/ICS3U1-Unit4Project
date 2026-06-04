'use strict';

/**
 * Creates html element optionally with a value
 * @param {HTMLElementType} type type of html element to create
 * @param {*} val value to assign the html element
 * @returns {HTMLElement} target to created html element
 */
export function makeElem(type, val=null) {
    if (val) return Object.assign(document.createElement(type), val);
    else return document.createElement(type);
}
