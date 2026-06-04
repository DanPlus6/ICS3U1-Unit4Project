'use strict';

/** not found page path */
const PATH = "404.html";

/** 
 * callback to redirect user to 404 page
 * 
 * By: David Fu
 */
export function redirect404() {
    window.location.href = PATH;
}
