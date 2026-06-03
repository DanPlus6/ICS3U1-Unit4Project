'use strict';

import { Program } from "../class/Program.js";
import { loadJSON } from "./loadJSON.js";
import { addArrays } from "./addArrays.js";
import { getLocal } from "./getLocal.js";

const PATH = '/assets/data/programs.json';


let programs = null;

/** 
 * Gets all the programs research data as an array of 'Program' objects
 * @returns {programs[]} array containing all the program research data
 */
export async function getPrograms() {
    if (programs) return programs;

    const raw = await loadJSON(PATH);
    const savedPrograms = getLocal();

    programs = addArrays(Program.fromJsonArray(raw), Program.fromJsonArray(savedPrograms));
    
    return programs;
}
