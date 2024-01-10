import { database } from "./phenotypeCriteria.js";

const Probability =  {
    HIGH: 'high',
    MODERATE: 'moderate',
    LOW: 'low'
}

export class Phenotype {
    constructor(fullName, name, criteria, probability = Probability.MODERATE){
        this.fullName = fullName;
        this.name = name;
        this.probability = probability;
        this.criteria = criteria;
    }

    updateProbability(newProbability) {
        return new Phenotype(this.fullName, this.name, this.criteria, newProbability)
    }
}



const hsvAU = new Phenotype(`Herpes Simplex Anterior Uveitis`,`HSV Anterior uveitis`, database['hsv']);
const vzvAU = new Phenotype(`Varicella Zoster Virus Anterior Uveitis`,`VZV Anterior uveitis`, database['vzv']);
const cmvAU = new Phenotype(`Cytomegalovirus Anterior Uveitis`,`CMV Anterior uveitis`, database['cmv']);
const fusAU = new Phenotype(`Fuchs Uveitis Syndrome`,`FUS Anterior uveitis`, database['fus']);
const jiaAU = new Phenotype(`Juvenile Idiopathic Arthritis-associated Chronic Anterior Uveitis`,`JIA Anterior uveitis`, database['jia']);
const hlab27AU = new Phenotype(`Spondyloarthritis/HLA-B27-associated Anterior Uveitis`,`HLA-B27 Anterior uveitis`, database['hlab27']);
const tinuAU = new Phenotype(`Tubulointerstitial Nephritis with Uveitis Syndrome`,`TINU Anterior uveitis`, database['tinu']);
const sarcAU = new Phenotype(`Sarcoidosis-associated Anterior Uveitis`,`Sarcoid Anterior uveitis`, database['sarcoidosisAU']);
const syphAU = new Phenotype(`Syphilitic Anterior Uveitis`,`Syphilis Anterior uveitis`, database['syphilisAU']);
const undiffAU = new Phenotype(`Undifferentiated Anterior uveitis`,`Undifferentiated Anterior uveitis`, database['uau']);

export const auPhenotypes = [hsvAU, vzvAU, cmvAU, fusAU, jiaAU,hlab27AU, tinuAU,sarcAU, syphAU,undiffAU]

const ppIU = new Phenotype(`Pars Planitis`,"PP Intermediate uveitis", database['pp']);
const nppIU = new Phenotype(`Intermediate Uveitis, Non-Pars Planitis Type`,"NPP Intermediate uveitis", database['npp']);
const msIU = new Phenotype(`Multiple Sclerosis-associated Intermediate Uveitis`,"MS Intermediate uveitis", database['ms']);
const sarcIU = new Phenotype(`Sarcoidosis-associated Intermediate Uveitis`,"Sarcoid Intermediate uveitis", database['sarcoidosisIU']);
const syphIU = new Phenotype(`Syphilitic Intermediate Uveitis`,"Syphilis Intermediate uveitis", database['syphilisIU']);
const piolIU = new Phenotype(`Primary Intraocular Lymphoma`,"PIOL", database['piolIU']);
const lymeIU = new Phenotype(`Lyme Disease Intermediate Uveitis`,"Lyme Intermediate uveitis", database['lymeIU']);

export const iuPhenotypes = [ppIU, nppIU, msIU, sarcIU, syphIU, lymeIU, piolIU]

const arnPU = new Phenotype(`Acute Retinal Necrosis`,"ARN Posterior uveitis", '');
const cmvPU = new Phenotype(`Cytomegalovirus Retinitis`,"CMV Posterior uveitis", '');
const toxoPU = new Phenotype(`Toxoplasmic Retinitis`,"Toxoplasmosis Posterior uveitis", '');
const behcetPU = new Phenotype(`Behçet Disease Uveitis`,"Behçet Disease Uveitis", '');
const tbPU = new Phenotype(`Tubercular Uveitis`,"TB Posterior uveitis", '');
const sarcPU = new Phenotype(`Sarcoid Uveitis`,"Sarcoidosis Posterior uveitis", '');
const syphPU = new Phenotype(`Syphilitic Uveitis`,"Syphilis Posterior uveitis", '');
const apmppePU = new Phenotype(`Acute Posterior Multifocal Placoid Pigment Epitheliopathy`,"APMPPE Posterior uveitis", '');
const bscrPU = new Phenotype(`Birdshot Chorioretinitis`,"BSCR Posterior uveitis", '');
const mewdsPU = new Phenotype(`Multiple Evanescent White Dot Syndrome`,"MEWDS Posterior uveitis", '');
const mfcpuPU = new Phenotype(`Multifocal Choroiditis with Panuveitis`,"MFCPU Posterior uveitis", '');
const picPU = new Phenotype(`Punctate Inner Choroiditis`,"PIC Posterior uveitis", '');
const scPU = new Phenotype(`Serpiginous Choroiditis`,"SC Posterior uveitis", '');
const soPU = new Phenotype(`Sympathetic Ophthalmia`,"SO Panuveitis", '');
const evkhPU = new Phenotype(`Early Vogt-Koyanagi-Harada Disease`,"VKH-early Panuveitis", '');
const lvkhPU = new Phenotype(`Late Vogt-Koyanagi-Harada Disease`,"VKH-late Panuveitis", '');

export const puPhenotypes = [arnPU,cmvPU,toxoPU,behcetPU,tbPU,sarcPU,syphPU,apmppePU,bscrPU,mewdsPU,mfcpuPU,picPU,scPU,soPU,evkhPU,lvkhPU]

