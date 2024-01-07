import { database } from "./phenotypeCriteria.js";

const Probability =  {
    HIGH: 'high',
    MODERATE: 'moderate',
    LOW: 'low'
}

export class Phenotype {
    constructor(name, criteria, probability = Probability.MODERATE){
        this.name = name;
        this.probability = probability;
        this.criteria = criteria;
    }

    updateProbability(newProbability) {
        return new Phenotype(this.name, this.criteria, newProbability)
    }
}

const hsvAU = new Phenotype("HSV Anterior uveitis", database['hsv']);
const vzvAU = new Phenotype("VZV Anterior uveitis", database['vzv']);
const cmvAU = new Phenotype("CMV Anterior uveitis", database['cmv']);
const fusAU = new Phenotype("FUS Anterior uveitis", database['fus']);
const jiaAU = new Phenotype("JIA Anterior uveitis", database['jia']);
const hlab27AU = new Phenotype("HLA-B27 Anterior uveitis", database['hlab27']);
const tinuAU = new Phenotype("TINU Anterior uveitis", database['tinu']);
const sarcAU = new Phenotype("Sarcoid Anterior uveitis", database['sarcoidosisAU']);
const syphAU = new Phenotype("Syphilis Anterior uveitis", database['syphilisAU']);
const undiffAU = new Phenotype("Undifferentiated Anterior uveitis", database['uau']);

export const auPhenotypes = [hsvAU, vzvAU, cmvAU, fusAU, jiaAU,hlab27AU, tinuAU,sarcAU, syphAU,undiffAU]

const ppIU = new Phenotype("PP Intermediate uveitis", database['pp']);
const nppIU = new Phenotype("NPP Intermediate uveitis", database['npp']);
const msIU = new Phenotype("MS Intermediate uveitis", database['ms']);
const sarcIU = new Phenotype("Sarcoid Intermediate uveitis", database['sarcoidosisIU']);
const syphIU = new Phenotype("Syphilis Intermediate uveitis", database['syphilisIU']);
const lymeIU = new Phenotype("PIOL Intermediate uveitis", database['piolIU']);
const piolIU = new Phenotype("Lyme Intermediate uveitis", database['lymeIU']);

export const iuPhenotypes = [ppIU, nppIU, msIU, sarcIU, syphIU, lymeIU, piolIU]

