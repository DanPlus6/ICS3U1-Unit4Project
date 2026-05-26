'use strict';

Array.prototype.mpop = function() {
    let lastElem = this[this.length-1];
    --this.length;
    return lastElem;
}
