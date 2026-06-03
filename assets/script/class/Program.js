'use strict';

export class Program {
    /** 
     * object to store research for an university program 
     * @param {string} data raw json research data
     */
    constructor(data) {
        this.legacyIndex = data.legacyIndex;
        this.legacyFile = data.legacyFile;

        this.schoolName = data.schoolName;
        this.city = data.city;
        this.province = data.province;
        this.country = data.country;
        this.schoolPicture = data.schoolPicture;
        this.mapPicture = data.mapPicture;
        this.programName = data.programName;
        this.lengthOfProgram = data.lengthOfProgram;
        this.programDescription = data.programDescription;
        this.hasCoop = data.hasCoop;
        this.admissionCoursesNeeded = data.admissionCoursesNeeded;
        this.admissionAverageNeeded = data.admissionAverageNeeded;
        this.domesticTuition = data.domesticTuition;
        this.internationalTuition = data.internationalTuition;
        this.academicCostDetails = data.academicCostDetails;
        this.academicCost = data.academicCost;
        this.livingCostDetails = data.livingCostDetails;
        this.livingCost = data.livingCost;
        this.interestingFacts = data.interestingFacts;
        this.primarySources = data.primarySources || [];
        this.secondarySources = data.secondarySources || [];
    }

    /** 
     * callback to convert raw json data into a Program class
     * @param {string} data raw json data
     * @returns {Program} a new Program class from raw data
     */
    static fromJson(data) {
        return new Program(data);
    }

    /** 
     * function to convert organized json array into array of Program objects
     * @param {string[]} jsonArr array of raw json data
     * @returns {Program[]} parsed array of Program objects
     */
    static fromJsonArray(programs) {
        return programs.map((programData) => Program.fromJson(programData));
    }
}
