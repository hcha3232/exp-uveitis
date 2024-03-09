const audiseases = {
    cmv : {
        realName: 'Cytomegalovirus Anterior Uveitis',
        satisfy: 'rule #1 and #2',
        rules: [
            {
                title: 'Evidence of anterior uveitis',
                list: ['Anterior chamber cells','If anterior vitreous cells are present, anterior chamber inflammation should be present','No evidence of retinitis']
            },
            {
                title: 'Evidence of cytomegalovirus infection in the eye',
                list: ['Positive PCR for cytomegalovirus on aqueous specimen']
            }
        ],
        excop: ['Positive serology for syphilis using a treponemal test','Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)','Aqueous specimen PCR positive for herpes simplex virus or varicella zoster virus'],
        citation: 'Standardization of Uveitis Nomenclature Working Group.  Classification criteria for cytomegalovirus anterior uveitis.  Am J Ophthalmol 2021;228:89-95.'
    },
    hsv : {
        realName: 'Herpes Simplex Virus Anterior Uveitis',
        satisfy: 'rule #1, #2 and #3',
        rules: [
            {
                title: 'Evidence of anterior uveitis',
                list: ['Anterior chamber cells','If anterior vitreous cells are present, anterior chamber inflammation should be present','No evidence of retinitis']
            },
            {
                title: 'Unilateral uveitis (unless there is a positive aqueous PCR for herpes simplex virus)',
                list: []
            },
            {
                title: 'Evidence of herpes simplex infection in the eye',
                list: ['Aqueous humor PCR positive for herpes simplex virus OR','Sectoral iris atrophy in a patient ≤50 years of age OR','Herpes simplex keratitis']
            }
        ],
        excop: ['Concomitant dermatomal/cutaneous varicella zoster virus (unless aqueous specimen PCR positive for herpes simplex virus)','Positive serology for syphilis using a treponemal test','Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)','Aqeous specimen PCR positive for cytomegalovirus or varicella zoster virus'],
        citation: 'Standardization of Uveitis Nomenclature Working Group.  Classification criteria for herpes simplex virus anterior uveitis.  Am J Ophthalmol 2021;228:231-6.'
    },
    vzv : {
        realName: 'Varicella Zoster Virus Anterior Uveitis',
        satisfy: 'rule #1, #2 and #3',
        rules: [
            {
                title: 'Evidence of anterior uveitis',
                list: ['Anterior chamber cells','If anterior vitreous cells are present, severity is less than anterior chamber inflammation','No evidence of retinitis']
            },
            {
                title: 'Unilateral uveitis (unless there is a positive aqueous PCR for varicella zoster virus)',
                list: []
            },
            {
                title: 'Evidence of varicella zoster virus infection in the eye',
                list: ['Aqueous humor PCR positive for varicella zoster virus OR','Sectoral iris atrophy in a patient > 60 years of age OR','Concurrent or recent dermatomal Herpes zoster']
            }
        ],
        excop: ['Positive serology for syphilis using a treponemal test','Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)','Aqueous specimen PCR positive for cytomegalovirus or herpes simplex virus'],
        citation: 'Standardization of Uveitis Nomenclature Working Group.  Classification criteria for varicella zoster virus anterior uveitis.  Am J Ophthalmol 2021;228;165-73.'
    },
    fus : {
        realName: 'Fuchs Uveitis Syndrome',
        satisfy: '#1, #2, #3, and #4',
        rules: [
            {
                title: 'Evidence of anterior uveitis',
                list: ['Anterior chamber cells','If vitreous cells are present, anterior chamber inflammation also should be present','No evidence of active retinitis']
            },
            {
                title: 'Unilateral uveitis',
                list: []
            },
            {
                title: 'Evidence of Fuchs uveitis syndrome',
                list: ['Heterochromia OR','Unilateral diffuse iris atrophy AND stellate keratic precipitates']
            },
            {
                title: 'Neither endotheliitis nor nodular, coin-shaped endothelial lesions',
                list: []
            }
        ],
        excop: ['Positive serology for syphilis using a treponemal test','Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)','Aqueous specimen PCR positive for cytomegalovirus, herpes simplex virus or varicella zoster virus'],
        citation: 'Standardization of Uveitis Nomenclature Working Group.  Classification criteria for Fuchs uveitis syndrome.  Am J Ophthalmol 2021;228:262-7.'
    },
    jia : {
        realName: 'Juvenile Idiopathic Arthritis Anterior Uveitis',
        satisfy: '#1, #2 and #3',
        rules: [
            {
                title: 'Evidence of anterior uveitis',
                list: ['Anterior chamber cells','If anterior vitreous cells are present, severity is less than anterior chamber inflammation']
            },
            {
                title: `Chronic anterior uveitis or, if at initial diagnosis, uveitis is of insidious onset and asymptomatic/ minimally symptomatic`,
                list: []
            },
            {
                title: 'Juvenile idiopathic arthritis of the following subtypes',
                list: ['Oligoarthritis, persistent or extended OR', 'Rheumatoid factor negative polyarthritis OR', 'Juvenile psoriatic arthritis, other than psoriatic spondylitis']
            }
        ],
        excop : ['Enthesitis-related arthritis','Positive serology for syphilis using a treponemal test','Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)','Aqueous specimen PCR positive for cytomegalovirus, herpes simplex virus, or varicella zoster virus'],
        citation: 'Standardization of Uveitis Nomenclature Working Group.  Classification criteria for juvenile idiopathic arthritis-associated chronic anterior uveitis.  Am J Ophthalmol 2021;228:192-7.'
    },
    hlab27 : {
        realName: 'HLA-B27 Spondyloarthritis Anterior Uveitis',
        satisfy: '#1 and either (both #2 and #3) or #4',
        rules: [
            {
                title: 'Evidence of anterior uveitis',
                list: ['Anterior chamber cells','If anterior vitreous cells are present, severity is less than anterior chamber inflammation']
            },
            {
                title: 'Characteristic uveitis course',
                list: ['Acute or recurrent acute, unilateral or unilateral alternating course OR','Chronic course with a history of a recurrent acute, unilateral or unilateral alternating course evolving into chronic course']
            },
            {
                title: 'ASAS-defined spondyloarthritis (axial or peripheral) and/or HLA-B27-positive',
                list: []
            },
            {
                title: 'Chronic uveitis with both ASAS-defined spondyloarthritis (axial or peripheral) AND HLA-B27-positive',
                list: []
            }
        ],
        excop: ['Positive serology for syphilis using a treponemal test','Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)','Aqueous specimen PCR positive for cytomegalovirus, herpes simplex virus or varicella zoster virus'],
        citation: 'Standardization of Uveitis Nomenclature Working Group.  Classification criteria for spondyloarthritis/HLA-B27-associated anterior uveitis.  Am J Ophthalmol 2021;228:117-125.'
    },
    tinu : {
        realName: 'Tubulointerstitial Nephritis with Uveitis',
        satisfy: '#1 and #2',
        rules: [
            {
                title: 'Evidence of anterior uveitis',
                list: ['Anterior chamber cells','If vitritis or choroiditis or retinal vascular changes are present, anterior chamber inflammation also should be present']
            },
            {
                title: `Evidence of tubulointerstitial nephritis, either`,
                list: ['Positive renal biopsy OR','Elevated urine β-microglobulin and either abnormal urine analysis or elevated serum creatinine']
            }
        ],
        excop : ['Enthesitis-related arthritis','Positive serology for syphilis using a treponemal test','Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)'],
        citation: 'Standardization of Uveitis Nomenclature Working Group.  Classification criteria for tubulointerstitial nephritis with uveitis syndrome.  Am J Ophthalmol 2021;228:255-61.'
    },
    sarcoidosisAU : {
        satisfy: '#1 and #2',
        rules: [
            {
                title: 'Compatible uveitic picture, either',
                list: ['<b>Anterior uveitis</b> OR','Intermediate or anterior/intermediate uveitis  OR','Posterior uveitis with either choroiditis (paucifocal choroidal nodule(s) or multifocal choroiditis) OR','Panuveitis with choroiditis or retinal vascular sheathing or retinal vascular occlusion']
            },
            {
                title: `Evidence of sarcoidosis, either`,
                list: ['Tissue biopsy demonstrating non-caseating granulomata OR','Bilateral hilar adenopathy on chest imaging']
            }
        ],
        excop : ['Positive serology for syphilis using a treponemal test','Evidence of infection with Mycobacterium tuberculosis'],
        citation: 'Standardization of Uveitis Nomenclature Working Group.  Classification criteria for sarcoidosis-associated uveitis.  Am J Ophthalmol 2021;228:220-30.'
    },
    syphilisAU : {
        satisfy: '#1 and #2',
        rules: [
            {
                title: 'Uveitis with a compatible uveitic presentation, including',
                list: ['<b>Anterior uveitis</b> OR','Intermediate uveitis or anterior/intermediate uveitis OR',`Posterior or panuveitis with one of the following presentations <ol type="i" style="font-weight:400;">
                <li>Placoid inflammation of the retinal pigment epithelium or</li>
                <li>Multifocal inflammation of the retina/retinal pigment epithelium or</li>
                <li>Necrotizing retinitis or</li>
                <li>Retinal vasculitis</li>
            </ol>`]
            },
            {
                title: `Evidence of infection with Treponema pallidum, either`,
                list: ['Positive treponemal test and non-treponemal test OR','Positive treponemal test with two different treponemal tests']
            }
        ],
        excop : ['History of adequate treatment for syphilitic uveitis'],
        citation: 'Standardization of Uveitis Nomenclature Working Group.  Classification criteria for syphilitic uveitis.  Am J Ophthalmol 2021;228;182-91.'
    }
}

const iudiseases = {
    pp : {
        realName: 'Pars Planitis',
        satisfy: '#1 and #2',
        rules: [
            {
                title: 'Evidence of intermediate uveitis',
                list: ['Vitreous cells AND/OR vitreous haze','If anterior chamber cells are present, anterior chamber inflammation severity less than vitreous severity','No evidence of retinitis or choroiditis','No retinal vascular occlusion in posterior pole & mid-periphery']
            },
            {
                title: 'Evidence of pars planitis',
                list: ['Vitreous snowballs OR','Pars plana snowbanks']
            }
        ],
        excop: ['Multiple sclerosis, defined by the McDonald criteria','Positive serology for syphilis using a treponemal test','Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)','Positive serology for Lyme disease, either IgG or IgM (e.g. positive ELISA AND Western blot with requisite number of bands for assay used)'],
        citation: 'Standardization of Uveitis Nomenclature Working Group.  Classification criteria for pars planitis.  Am J Ophthalmol 2021;228;268-74.'
    },
    npp : {
        realName: 'Intermediate Uveitis, Non-Pars Planitis Type',
        satisfy: '#1 and #2',
        rules: [
            {
                title: 'Evidence of intermediate uveitis',
                list: ['Vitreous cells AND/OR vitreous haze','If anterior chamber cells are present, anterior chamber inflammation severity less than vitreous severity','No evidence of retinitis',]
            },
            {
                title: 'No evidence of pars planitis',
                list: ['Vitreous snowballs NOR','Pars plana snowbanks']
            }
        ],
        excop: ['Multiple sclerosis, defined by the McDonald criteria','Positive serology for syphilis using a treponemal test','Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)','Positive serology for Lyme disease, either IgG or IgM (e.g. positive ELISA AND Western blot with requisite number of bands for assay used)','Evidence of intraocular lymphoma on diagnostic vitrectomy'],
        citation: 'Standardization of Uveitis Nomenclature Working Group.  Classification criteria for intermediate uveitis, non-pars planitis type.  Am J Ophthalmol 2021;228;152-64.'
    },
    ms : {
        realName: 'Multiple Sclerosis-associated Intermediate Uveitis',
        satisfy: '#1 and #2',
        rules: [
            {
                title: 'Evidence of intermediate uveitis',
                list: ['Vitreous cells AND/OR vitreous haze','If anterior chamber cells are present, anterior chamber inflammation severity less than vitreous severity','No evidence of retinitis or choroiditis']
            },
            {
                title: 'Evidence of multiple sclerosis using the Revised  McDonald  Diagnostic Criteria',
                list: []
            }
        ],
        excop: ['Positive serology for syphilis using a treponemal test','Evidence of sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue biopsy demonstrating non-caseating granulomata)','Positive serology for Lyme disease, either IgG or IgM (e.g. positive ELISA AND Western blot with requisite number of bands for assay used)'],
        citation: 'Standardization of Uveitis Nomenclature Working Group.  Classification criteria for multiple sclerosis-associated intermediate uveitis.  Am J Ophthalmol 2021;228:72-9.'
    },
    sarcoidosisIU : {
        satisfy: '#1 and #2',
        rules: [
            {
                title: 'Compatible uveitic picture, either',
                list: ['Anterior uveitis OR','<b>Intermediate or anterior/intermediate uveitis</b> OR','Posterior uveitis with either choroiditis (paucifocal choroidal nodule(s) or multifocal choroiditis) OR','Panuveitis with choroiditis or retinal vascular sheathing or retinal vascular occlusion']
            },
            {
                title: `Evidence of sarcoidosis, either`,
                list: ['Tissue biopsy demonstrating non-caseating granulomata OR','Bilateral hilar adenopathy on chest imaging']
            }
        ],
        excop : ['Positive serology for syphilis using a treponemal test','Evidence of infection with Mycobacterium tuberculosis'],
        citation: 'Standardization of Uveitis Nomenclature Working Group.  Classification criteria for sarcoidosis-associated uveitis.  Am J Ophthalmol 2021;228:220-30.'
    },
    syphilisIU : {
        satisfy: '#1 and #2',
        rules: [
            {
                title: 'Uveitis with a compatible uveitic presentation, including',
                list: ['Anterior uveitis OR','<b>Intermediate uveitis or anterior/intermediate uveitis</b> OR',`Posterior or panuveitis with one of the following presentations <ol type="i" style="font-weight:400;">
                <li>Placoid inflammation of the retinal pigment epithelium or</li>
                <li>Multifocal inflammation of the retina/retinal pigment epithelium or</li>
                <li>Necrotizing retinitis or</li>
                <li>Retinal vasculitis</li>
            </ol>`]
            },
            {
                title: `Evidence of infection with Treponema pallidum, either`,
                list: ['Positive treponemal test and non-treponemal test OR','Positive treponemal test with two different treponemal tests']
            }
        ],
        excop : ['History of adequate treatment for syphilitic uveitis'],
        citation: 'Standardization of Uveitis Nomenclature Working Group.  Classification criteria for syphilitic uveitis.  Am J Ophthalmol 2021;228;182-91.'
    }
}


export const database = {
    cmv : classification(audiseases.cmv),   
    hsv : classification(audiseases.hsv),
    vzv : classification(audiseases.vzv),
    fus : classification(audiseases.fus),
    jia : classification(audiseases.jia) +
    `
    <img src="/img/SUN-JIA-Category.png" class="img-fluid container-gap"></img>
    `,
    hlab27 : classification(audiseases.hlab27) + 
    `
        <img src="/img/SUN-ASAS.png" class="img-fluid container-gap"></img>
        <img src="/img/SUN-ASAS2.png" class="img-fluid container-gap"></img>
    `,
    tinu : classification(audiseases.tinu),
    sarcoidosisAU : classification(audiseases.sarcoidosisAU),
    tb : `
        <img src="/img/SUN-TB.png" class="img-fluid container-gap"></img>
    `,
    syphilisAU : classification(audiseases.syphilisAU)
    +
    `
    <img src="/img/SUN-SYPHILIS-SCREENING.png" class="img-fluid container-gap"></img>
    `,
    uau : `
    <div class="alert alert-primary" role="alert">
    Undifferentiated uveitis accounts for 50% of cases among uveitis patients.
    </div>
    `,
    //SUN table and images
    anatLoc : `
    <img src="/img/SUN-ANATOMIC-LOCATION.png" class="img-fluid container-gap"></img>
    `,
    course : `
    <img src="/img/SUN-COURSE.png" class="img-fluid container-gap"></img>
    `,

    ///// Intermediate ////
    pp : classification(iudiseases.pp),   
    npp : classification(iudiseases.npp),
    ms : classification(iudiseases.ms),
    sarcoidosisIU : classification(iudiseases.sarcoidosisIU),
    syphilisIU : classification(iudiseases.syphilisIU),
    piolIU: `
    <div class="alert alert-primary" role="alert">
    If patient is above the age of 50 presenting with uveitis for the first time, masquerade syndrome from PIOL should be suspected. Look for
    neurological signs such as balance issues, cognitive impairment, palsies, seizures, and dizziness. Patches or subretinal tumour infiltration could be observed.
    </div>`,
    lymeIU: `
    <div class="alert alert-primary" role="alert">
    Lyme disease is suspected if patient has reported recent travel to a Lyme-endemic region, outdoor activities in wooded areas, or exposure to large animals, with the presence of a characteristic pink or red erythema migrans rash.
    </div>`
}





function classification (disease) {
    let disHtml =  ``

    disHtml += 
    `
    <div class="main" id="main-article">
        <div class="main-table">
            <div class="alert alert-primary" role="alert" style="font-weight:700">Should satisfy ${disease.satisfy}</div>
            <ol style="font-weight:500;">
    `
    
    let a = ``
    for (let i = 0; i < disease.rules.length; i++){
        a += `<li>${disease.rules[i].title}`
        if(disease.rules[i].list.length!=0){
            a += `<ol type="a" style="font-weight:400; padding-left: 0;">`
            for (let j = 0; j < disease.rules[i].list.length; j++){
                a += `<li>${disease.rules[i].list[j]}</li>`
            }
            a += `</ol>`
        }
        a += `</li><br>`
    }
    

    disHtml += a + `</ol>`;

    disHtml += `
    <div class="exclusion-box" id="exclusion-box">
                <div class="exclusion-title">
                    <div class="alert alert-warning" role="alert" style="font-weight:700">Exlusion criteria</div>
                </div>
                <ul>
    `

    let e = ``
    for (let i = 0; i < disease.excop.length; i++){
        e += `<li style="font-weight:400;">${disease.excop[i]}</li>`
    }

    disHtml += e
    
    
    disHtml += 
                `</ul></div><br>
            
            <div class="citation">
                <span style="font-weight: 500;">References </span><br>
                <span style="font-weight:400; font-size: 0.6rem;">${disease.citation}</span>      
            </div>
        </div>
    </div>
    <br>
    `
    //console.log(disHtml)
    return disHtml;
}