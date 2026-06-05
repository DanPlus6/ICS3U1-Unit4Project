'use strict';

import { Program } from "../class/Program.js";
import { loadJSON } from "./loadJSON.js";
import { addArrays } from "./addArrays.js";
import { getLocal } from "./getLocal.js";

const PATH = '../../data/programs.json';

let programs = null;

/** 
 * Gets all the programs research data as an array of 'Program' objects
 * @returns {Program[]} array containing all the program research data
 * 
 * By: David Fu
 */
export async function getPrograms() {
    // check if programs are already fetched
    if (programs) return programs;
    /** Fetch baseline programs */
    const raw = await loadJSON(PATH);
    /** Fetch locally saved programs */
    const savedPrograms = getLocal();

    programs = addArrays(Program.fromJsonArray(raw), Program.fromJsonArray(savedPrograms));
    
    return programs;
}
