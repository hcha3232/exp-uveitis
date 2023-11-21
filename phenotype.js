const Probability =  {
    HIGH: 'high',
    MODERATE: 'moderate',
    LOW: 'low'
}

class Phenotype {
    constructor(name, criteria){
        this.name = name;
        this.probability = Probability.MODERATE;
        this.criteria = criteria;
    }

    updateProbability(newProbability) {
        this.probability = newProbability;
    }

    getSummary() {
        return `${this.name}: ${this.description}`;
    }
}

const hsvAU = new Phenotype("HSV Anterior uveitis", "");
const vzvAU = new Phenotype("VZV Anterior uveitis", "");
const cmvAU = new Phenotype("CMV Anterior uveitis", "");
const fusAU = new Phenotype("FUS Anterior uveitis", "");
const jiaAU = new Phenotype("JIA Anterior uveitis", "");

export const auPhenotypes = [hsvAU, vzvAU, cmvAU, fusAU, jiaAU]

