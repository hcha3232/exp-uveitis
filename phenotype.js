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

export const auPhenotypes = [hsvAU, vzvAU, cmvAU, fusAU, jiaAU,hlab27AU, tinuAU]




