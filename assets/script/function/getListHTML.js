'use strict';

/**
 * Gets clean HTML for a user-editable list
 * @param {HTMLUListElement} list list to serialize
 * @returns {string} raw HTML string of list item elements
 */
export function getListHTML(list) {
    const container = document.createElement('div');

    for (const item of list.children) {
        if (item.textContent.trim() === '') continue;

        const cleanItem = item.cloneNode(true);
        cleanItem.removeAttribute('contenteditable');
        cleanItem.removeAttribute('spellcheck');
        container.append(cleanItem);
    }

    return container.innerHTML;
}
