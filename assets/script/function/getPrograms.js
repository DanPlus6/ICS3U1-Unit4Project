'use strict';

import { Program } from "../class/Program.js";

const PATH = '/assets/data/programs.json';


let programs = null;

/** 
 * Gets all the programs research data as an array of 'Program' objects
 * @returns {programs[]} array containing all the program research data
 */
export async function getPrograms() {
    if (programs) return programs;

    const r = await fetch(PATH);
    const raw = r.json();

    programs = Program.fromJsonArray(raw) + JSON.parse(localStorage.getItem("programs") || "[]");
    
    return programs;
}
