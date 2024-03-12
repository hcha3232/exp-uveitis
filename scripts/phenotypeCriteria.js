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

const pudiseases = {
    apmppe : {
        satisfy: '#1 and #2',
        rules: [
            {
                title: 'Paucifocal or multifocal choroidal lesions on clinical examination with',
                list: ['Plaque-like or placoid appearance to the lesions']
            },
            {
                title: 'Characteristic fluorescein angiogram in the acute phase of the disease (lesions are \
                    hypofluorescent early and diffusely hyperfluorescent late)',
                list: []
            },
        ],
        excop: ['Positive serology for syphilis using a treponemal test','Evidence for sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue \
            biopsy demonstrating non-caseating granulomata)'],
        citation: ''
    },
    bscr : {
        satisfy: '[#1 and #2 and #3] or #4',
        rules: [
            {
                title: 'Characteristic bilateral multifocal choroiditis on ophthalmoscopy',
                list: ['Multifocal cream-colored or yellow-orange, oval or round choroidal lesions (“birdshot spots”)']
            },
            {
                title: 'Absent to mild anterior chamber inflammation',
                list: ['Absent to mild anterior chamber cells AND','No keratic precipitates AND','No posterior synechiae']
            },
            {
                title: 'Absent to moderate vitritis',
                list: []
            },
            {
                title: 'Multifocal choroiditis with',
                list: ['Positive HLA-A29 test AND either (b. or c.)','Characteristic “birdshot” spots (multifocal cream-colored or yellow-orange, oval or round choroidal lesions) on ophthalmoscopy OR',
            'Characteristic indocyanine green angiogram (multifocal hypofluorescent spots) without characteristic “birdshot” spots on ophthalmoscopy']
            }
        ],
        excop: ['Positive serology for syphilis using a treponemal test','Evidence for sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue \
            biopsy demonstrating non-caseating granulomata)','Evidence of intraocular lymphoma on diagnostic vitrectomy or tissue biopsy'],
        citation: ''
    },
    mewds : {
        satisfy: '#1 and #2 and #3',
        rules: [
            {
                title: 'Multifocal chorioretinal gray-white spots with foveal granularity',
                list: []
            },
            {
                title: 'Characteristic fluorescein angiogram or optical coherence tomogram (OCT)',
                list: [`“Wreath-like” hyperfluorescent lesions on fluorescein angiogram OR`,'Hyperreflective lesions on OCT extending from the retinal pigment epithelium, into \
                and/or through the ellipsoid zone into the outer nuclear layer of the retina']
            },
            {
                title: 'Absent to mild anterior chamber and vitreous inflammation',
                list: []
            }
        ],
        excop: ['Positive serology for syphilis using a treponemal test','Evidence for sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue \
            biopsy demonstrating non-caseating granulomata)','Bilateral simultaneous disease onset'],
        citation: ''
    },
    mfcpu : {
        satisfy: '#1 and #2 and #3',
        rules: [
            {
                title: 'Multifocal choroiditis with',
                list: ['Oval or round lesions AND','Predominant lesion size >125 µm']
            },
            {
                title: 'Characteristic appearance',
                list: [`“Punched-out atrophic” chorioretinal scars OR`,'Active lesions with more than minimal vitreous inflammation']
            },
            {
                title: 'Inflammatory lesions and/or characteristic scars involving the mid-periphery or periphery with or without posterior pole involvement',
                list: []
            }
        ],
        excop: ['Positive serology for syphilis using a treponemal test','Evidence for sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue \
            biopsy demonstrating non-caseating granulomata)','Evidence of infection with Mycobacterium tuberculosis'],
        citation: ''
    },
    pic : {
        satisfy: '#1 and #2 and #3',
        rules: [
            {
                title: 'Multifocal choroidal inflammatory lesions',
                list: ['Predominant lesion size <250 µm AND','Punctate lesion appearance']
            },
            {
                title: 'Lesion involvement of posterior pole with or without mid-periphery',
                list: []
            },
            {
                title: 'Absent to minimal anterior chamber and vitreous inflammation',
                list: []
            }
        ],
        excop: ['Positive serology for syphilis using a treponemal test','Evidence for sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue \
            biopsy demonstrating non-caseating granulomata)'],
        citation: ''
    },
    sc : {
        satisfy: '#1 and #2 and #3',
        rules: [
            {
                title: 'Paucifocal or multifocal choroiditis with an ameboid or serpentine shape*',
                list: []
            },
            {
                title: 'Characteristic imaging',
                list: ['Fluorescein angiogram with early diffuse hypofluorescent lesions and late hyperfluorescent lesion borders OR','Fundus auto-fluorescence with hypo-autofluorescent lesions with hyper-autofluorescent borders']
            },
            {
                title: 'Absent to minimal anterior chamber and vitreous inflammation',
                list: []
            }
        ],
        excop: ['Positive serology for syphilis using a treponemal test','Evidence for sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue \
            biopsy demonstrating non-caseating granulomata)','Evidence of infection with Mycobacterium tuberculosis'],
        citation: ''
    },
    behcet : {
        satisfy: '#1 and #2',
        rules: [
            {
                title: 'Compatible uveitic syndrome',
                list: ['Anterior uveitis','Anterior and intermediate uveitis','Posterior uveitis with retinal vasculitis and/or focal retinal infiltrates*','Panuveitis with retinal vasculitis and/or focal retinal infiltrates*']
            },
            {
                title: 'A diagnosis of Behçet disease using International Study Group for Behçet Disease criteria',
                list: []
            }
        ],
        excop: ['Positive serology for syphilis using a treponemal test','Evidence for sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue \
            biopsy demonstrating non-caseating granulomata)'],
        citation: ''
    },
    so : {
        realName: 'Sympathetic Ophthalmia',
        satisfy: '#1 and #2 and #3',
        rules: [
            {
                title: 'History of unilateral ocular trauma or surgery',
                list: []
            },
            {
                title: 'Ocular inflammation, either',
                list: ['Bilateral OR','If there is no view in the inciting eye (e.g. enucleated, phthisis, opaque cornea), then \
                detectable inflammation in the sympathizing eye']
            },
            {
                title: 'Evidence of more than isolated anterior uveitis, either',
                list: ['Anterior chamber and vitreous inflammation OR','Panuveitis with choroidal involvement']
            },
        ],
        excop: ['Positive serology for syphilis using a treponemal test','Evidence for sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue \
            biopsy demonstrating non-caseating granulomata)'],
        citation: ''
    },
    evkh : {
        satisfy: '#1 or #2 and #3',
        rules: [
            {
                title: 'Evidence of Harada’s disease',
                list: ['Serous (exudative) retinal detachment AND (b. and/or c.)','Multi-loculated appearance on fluorescein angiogram OR','Septae on optical coherence tomogram']
            },
            {
                title: 'Panuveitis* with >2 of the following neurologic symptoms or signs',
                list: ['Headache OR','Tinnitus OR','Dysacusis OR','Meningismus OR','Cerebrospinal fluid pleocytosis']
            },
            {
                title: 'No history of penetrating ocular trauma or vitreoretinal surgery prior to disease onset',
                list: []
            }
        ],
        excop: ['Positive serology for syphilis using a treponemal test','Evidence for sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue \
            biopsy demonstrating non-caseating granulomata)'],
        citation: ''
    },
    lvkh : {
        satisfy: '#1 and #2 or #3',
        rules: [
            {
                title: 'History of early-stage Vogt-Koyanagi-Harada disease',
                list: []
            },
            {
                title: 'Sunset glow fundus',
                list: ['']
            },
            {
                title: 'Uveitis* AND >1 of the following cutaneous findings',
                list: ['Vitiligo OR','Poliosis OR','Alopecia']
            }
        ],
        excop: ['Positive serology for syphilis using a treponemal test','Evidence for sarcoidosis (either bilateral hilar adenopathy on chest imaging or tissue \
            biopsy demonstrating non-caseating granulomata)'],
        citation: ''
    },
    arn : {
        satisfy: '#1 and #2 or #3',
        rules: [
            {
                title: 'Necrotizing retinitis involving the peripheral retina',
                list: []
            },
            {
                title: 'Evidence of infection with either herpes simplex virus (HSV) or Varicella zoster virus (VZV)',
                list: ['Positive PCR* for either HSV or VZV from either an aqueous or vitreous specimen']
            },
            {
                title: 'Characteristic clinical picture',
                list: ['Circumferential or confluent retinitis AND','Retinal vascular sheathing and/or occlusion AND','More than minimal vitritis']
            }
        ],
        excop: ['Positive serology for syphilis using a treponemal test','Intraocular specimen PCR-positive for cytomegalovirus or Toxoplasma gondii (unless \
            there is immune compromise, morphologic evidence for >1 infection, the characteristic \
            clinical picture of acute retinal necrosis, and the intraocular fluid specimen has a positive \
            PCR for either HSV or VZV)'],
        citation: ''
    },
    cmvRet : {
        satisfy: '#1 and #2 and either #3 or #4',
        rules: [
            {
                title: 'Necrotizing retinitis with indistinct borders due to numerous small (<50 μm) satellites',
                list: []
            },
            {
                title: 'Immune compromise, either',
                list: ['Systemic (e.g. AIDS, organ transplant, chemotherapy) OR','Ocular (e.g. intraocular corticosteroids or chemotherapy)']
            },
            {
                title: 'Characteristic clinical picture ([a. or b. or c.] AND d.)',
                list: ['Wedge-shaped area of retinitis OR','Hemorrhagic appearance of the retinitis OR','Granular appearance of the retinitis AND','Absent to mild vitritis']
            },
            {
                title: 'Evidence of intraocular infection with cytomegalovirus',
                list: ['Positive PCR* for cytomegalovirus from either the aqueous or vitreous specimen']
            },
        ],
        excop: ['Positive serology for syphilis using a treponemal test','Intraocular specimen PCR-positive for herpes simplex virus, varicella zoster virus or \
        Toxoplasma gondii (unless there is immune compromise, morphologic evidence for >1 \
        infection, the characteristic picture of cytomegalovirus retinitis, and the intraocular fluid \
        specimen also has a positive PCR for cytomegalovirus)'],
        citation: ''
    },
    sarcoidosisPU : {
        satisfy: '#1 and #2',
        rules: [
            {
                title: 'Compatible uveitic picture, either',
                list: ['Anterior uveitis OR','Intermediate or anterior/intermediate uveitis OR','<b>Posterior uveitis with either choroiditis (paucifocal choroidal nodule(s) or multifocal choroiditis)</b> OR','<b>Panuveitis with choroiditis or retinal vascular sheathing or retinal vascular occlusion</b>']
            },
            {
                title: `Evidence of sarcoidosis, either`,
                list: ['Tissue biopsy demonstrating non-caseating granulomata OR','Bilateral hilar adenopathy on chest imaging']
            }
        ],
        excop : ['Positive serology for syphilis using a treponemal test','Evidence of infection with Mycobacterium tuberculosis'],
        citation: 'Standardization of Uveitis Nomenclature Working Group.  Classification criteria for sarcoidosis-associated uveitis.  Am J Ophthalmol 2021;228:220-30.'
    },
    syphilisPU : {
        satisfy: '#1 and #2',
        rules: [
            {
                title: 'Uveitis with a compatible uveitic presentation, including',
                list: ['Anterior uveitis OR','Intermediate uveitis or anterior/intermediate uveitis OR',`<b>Posterior or panuveitis with one of the following presentations</b> <ol type="i" style="font-weight:500;">
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
    },
    toxo : {
        satisfy: '#1 and #2 or #3',
        rules: [
            {
                title: 'Focal or paucifocal necrotizing retinitis*',
                list: []
            },
            {
                title: 'Evidence of infection with Toxoplasma gondii',
                list: ['Positive PCR† for Toxoplasma gondii from either the aqueous or vitreous specimen OR',
                'Positive serum IgM antibodies against Toxoplasma gondii']
            },
            {
                title: 'Characteristic clinical ocular features',
                list: ['Hyperpigmented and/or atrophic chorioretinal scar (“toxoplasmic scar”) AND (b. or c.)','Round or oval retinitis lesions OR','Recurrent acute (episodic) course']
            }
        ],
        excop: ['Both negative IgG AND IgM antibodies against Toxoplasma gondii (unless there is a positive PCR for Toxoplasma gondii from an aqueous or vitreous specimen)',
        'Positive serology for syphilis using a treponemal test',
        'Intraocular specimen PCR-positive for herpes simplex virus, varicella zoster virus or \
        cytomegalovirus (unless there is immune compromise, morphologic evidence for >1 \
        infection, the characteristic picture of toxoplasmic retinitis, and the intraocular fluid \
        specimen also has a positive PCR for T. gondii)'],
        citation: ''
    },
    tbPU : {
        satisfy: '#1 and #2',
        rules: [
            {
                title: 'Evidence of a tubercular uveitis compatible uveitic syndrome',
                list: ['anterior uveitis with iris nodules','<b>serpiginous-like tubercular choroiditis</b>','<b>choroidal nodule (i.e. tuberculoma)</b>','<b>in individuals with active systemic tuberculosis, multifocal choroiditis</b>','<b>occlusive retinal vasculitis</b>']
            },
            {
                title: 'Evidence of infection with Mycobacterium tuberculosis, either',
                list: ['histologically- or microbiologically-confirmed infection with M. tuberculosis* OR',
                'positive interferon-γ release assay (IGRA)† OR','positive tuberculin skin test‡']
            },
        ],
        excop: ['Positive serology for syphilis using a treponemal test',
        'Positive biopsy for sarcoidosis (and therefore an absence of histological or microbiologic confirmation of infection with M. tuberculosis)',
        'Uveitic syndrome compatible with either sarcoidosis-associated uveitis or tubercular \
        uveitis and bilateral hilar adenopathy on chest imaging without histological or \
        microbiologic confirmation of the diagnosis of infection with M. tuberculosis §'],
        citation: ''
    },
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
    </div>`,

    ////// Posterior + Panuveitis ////
    apmppe : classification(pudiseases.apmppe),
    pic : classification(pudiseases.pic),
    mfcpu : classification(pudiseases.mfcpu),
    bscr : classification(pudiseases.bscr),
    mewds : classification(pudiseases.mewds),
    sc : classification(pudiseases.sc),
    behcet : classification(pudiseases.behcet),
    so : classification(pudiseases.so),
    vkh : '<span style="font-size: 16px;">Early VKH<br><br></span>' + classification(pudiseases.evkh) + '<span style="font-size: 16px;">Late VKH<br><br></span>' + classification(pudiseases.lvkh),
    arn: classification(pudiseases.arn),
    cmvRet: classification(pudiseases.cmvRet),
    sarcoidosisPU: classification(pudiseases.sarcoidosisPU),
    syphilisPU: classification(pudiseases.syphilisPU),
    toxo: classification(pudiseases.toxo),
    tbPU: classification(pudiseases.tbPU),
    endophthalmitis : `
    <div class="alert alert-primary" role="alert">
    Endophthalmitis is a purulent inflammation of the intraocular fluids (vitreous and aqueous) usually due to infection. 
    </div>

* Serious intraocular inflammatory disorder resulting from infection of the vitreous cavity <br>
* Progressive vitritis is the hallmark of any form of endophthalmitis <br>
* Histologically: massive infiltration of the vitreous cavity with inflammatory cells
<br><br>
<div class="alert alert-primary" role="alert">
Types of Endophthalmitis</div>

<b>Exogenous</b> <br>
* Acute Postoperative <br>
* Chronic Postoperative <br>
* Traumatic <br>
* Filtering Bleb-Associated <br>
* After Intravitreal Injections <br>
* Corneal ulcer <br><br>
<b>Endogenous</b> <br>
* Bacterial or fungal endogenous chorioretinitis +/- vitritis <br>
    `,
    drug_induced : `
    <div class="alert alert-primary" role="alert">
    Uveitis may be induced after systemic or topical ocular drug administration. 
    </div><br>
    * <b>Rifabutin</b>: conjunctival injection, keratic precipitates, anterior chamber cell/flare with or without hypopyon, vitreous cell, perivascular retinal infiltrates <br>
            * <b>Bisphosphonates</b>: conjunctivitis, scleritis, iritis - anterior chamber reaction with cell/flare <br>
            * <b>Moxifloxacin</b>: acute bilateral iris depigmentation and anterior uveitis <br>
            * <b>Checkpoint inhibitor</b>: anterior uveitis, VKH-like uveitis (nivolumab), Behcet like syndrome (pembrolizumab) <br>
            * <b>Brimonidine</b>: KP, posterior synechiae, iris nodules, anterior chamber cell/flare <br>
            * <b>Prostaglandin analogues</b>: mild anterior chamber reaction, CME <br>
    `
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