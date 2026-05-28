'use strict';

export class program {
    /** class to store research for a single university program */
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

    static fromJson(data) {
        return new program(data);
    }

    static fromJsonArray(programs) {
        return programs.map((programData) => program.fromJson(programData));
    }
}
