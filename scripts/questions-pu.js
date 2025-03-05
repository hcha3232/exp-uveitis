import { Question, Result } from "./new-decision.js";

export const dummyQuestionsPU = {
    'intro': new Question(
        `<div class="alert alert-warning" role="alert">
            <b>Warning!</b><br>The use of Uveitis Tree does NOT replace clinical judgement. By selecting YES, I confirm that I am using Uveitis Tree with this understanding.
        </div>`,
        "Do you want to start?",
        [
            { label: "Yes", nextQuestion: "uveitis_type" },
            { label: "Exit", nextQuestion: "intro" }
        ],
        "",
        {

        }
    ),
    'uveitis_type': new Question(
        "Question",
        `Identify the primary type of inflammation in the uveitis.`,
        [
            { label: "Retinitis", nextQuestion: "retinitis" },
            { label: "Retinal vasculitis", nextQuestion: "rvasculitis" },
            { label: "Choroiditis/Chorioretinitis", nextQuestion: "choroiditis-1" },
            { label: "Panuveitis", nextQuestion: "panuveitis-1" },
            { label: "Rapidly vision deteriorating posterior or panuveitis", nextQuestion: "rapid-1"}
        ],
        "",
        {

        }
    ),
    'retinitis': new Question(
        "Question",
        "Which clinical feature aligns with the patient's presentation?",
        [
            { label: `${other_feature_render('Necrotizing retinitis involving the peripheral retina','Other features include',['Circumferential or confluent retinitis','Retinal vasculitis','More than minimal vitritis'])}`, nextQuestion: "ddx_arn" },
            { label: `${other_feature_render('Necrotizing retinitis with indistinct borders due to numerous small (<50µm) satellite) in a systemic or  ocular immune-compromised patient','Other features include',['Absent to mild vitritis','Wedge-shaped area of retinitis','Hemorrhagic appearance of retinitis','Granular appearance of retinitis'])}`, nextQuestion: "ddx_cmv_retinitis" },
            { label: `${other_feature_render('Focal or pauci-focal necrotizing retinitis in a immuno-competent patient','Other features include',['Hyperpigmented and/or atrophic chorioretinal scar','Round or oval retinitis lesions','Recurrent acute (episodic) courses'])}`, nextQuestion: "ddx_toxo" },
            { label: `${other_feature_render('Focal retinal infiltrates with retinal vasculitis','Other findings include',['Oral aphthous ulcers','Genital ulcers',"Typical defined Behcet's disease skin lesions"])}`, nextQuestion: "ddx_behcet_retinitis" },
            { label: `None above`, nextQuestion: "ddx_un_retinitis" }
        ],
        "",
        {
            "Tubercular uveitis" : "low",
            "Sarcoid uveitis" : "low",
            "APMPPE" : "low",
            "BSCR" : "low",
            "MEWDS" : "low",
            "MFCPU" : "low",
            "PIC" : "low",
            "Serpiginous Choroiditis" : "low",
            "Sympathetic Ophthalmia" : "low",
            "VKH" : "low",
            "Endophthalmitis" : "low",
            "Drug-induced" : "low"
        }
    ),
    'rvasculitis': new Question(
        "Question",
        "Which clinical feature aligns with the patient's presentation?",
        [
            { label: `Occlusive retinal vasculitis WITH <br><br>${imaging_render('History','',['Exposure to individuals diagnosed with TB','Travelled to a TB-endemic region recently'])}`, nextQuestion: "ddx_tb_rvasculitis" },
            { label: `${other_feature_render('Retinal vasculitis and/or focal retinal infiltrates','Other findings include',['Oral aphthous ulcers','Genital ulcers',"Typical defined Behcet's disease skin lesions"])}`, nextQuestion: "ddx_behcet_rvasculitis" },
            { label: `Retinal vasculitis WITH <br><br>${imaging_render('Respiratory symptoms','',['Shortness of breath','Cough'])} ${imaging_render('Others','',['Skin lumps','Joint aches'])}`, nextQuestion: "ddx_sarcoid_rvasculitis" },
            { label: `None above`, nextQuestion: "ddx_un_rvasculitis" }
        ],
        "<b>Note.</b> ARN, CMV retinitis, and Toxoplasma chorioretinis could have vasculitis - But the primary site of involvement is retina",
        {   
            "APMPPE" : "low",
            "BSCR" : "low",
            "MEWDS" : "low",
            "MFCPU" : "low",
            "PIC" : "low",
            "Serpiginous Choroiditis" : "low",
            "Sympathetic Ophthalmia" : "low",
            "VKH" : "low",
            "Endophthalmitis" : "low",
            "Drug-induced" : "low"
        }
    ),
    'choroiditis-1': new Question(
        "Question",
        "Is the lesion pauci-focal or multi-focal?",
        [
            { label: `Pauci-focal`, nextQuestion: "choroiditis-pauci" },
            { label: `Multi-focal`, nextQuestion: "choroiditis-multi" },
        ],
        "<b>Note.</b> Bacterial and Fungal endophthalmitis often manifest as chorioretinitis - But the primary type is panuveitis with significant vitritis",
        {
            "ARN" : "low",
            "CMV retinitis" : "low",
            "Behcet Disease uveitis" : "low",
            "Sympathetic Ophthalmia" : "low",
            "VKH" : "low",
            "Drug-induced" : "low"
        }
    ),
    'choroiditis-pauci': new Question(
        "Question",
        "Which clinical feature aligns with the patient's presentation?",
        [
            { label: `${imaging_render('','Morphology',['Ameboid or serpentine shape'])} ${imaging_render('','Imaging',['FA: Early diffuse hypo-fluorescent lesion, late hyper-fluorescent lesion border','FAF: Hypo-autofluorescent lesion with hyper-autofluorescent border'])}`, nextQuestion: "check-tb-sc" },
            { label: `${imaging_render('','Morphology',['Plaque-like placoid appearance'])} ${imaging_render('','Imaging',['FA: Early hypo-fluorescent lesion and late diffuse hyper-fluorescent lesion<br>*During acute phase of the disease'])}`, nextQuestion: "ddx_apmppe" },
            { label: `A choroidal nodule (Sarcoid Granuloma) WITH <br><br>${imaging_render('Respiratory symptoms','',['Shortness of breath','Cough'])} ${imaging_render('Others','',['Skin lumps','Joint aches'])}`, nextQuestion: "ddx_sarcoid_panuveitis" },
            { label: `A choroidal nodule (Tuberculoma) WITH <br><br>${imaging_render('History','',['Exposure to individuals diagnosed with TB','Travelled to a TB-endemic region recently'])}`, nextQuestion: "ddx_tb_posterior" },
            { label: `${other_feature_render('Focal or pauci-focal necrotizing retinitis in a immuno-competent patient','Other features include',['Hyperpigmented and/or atrophic chorioretinal scar','Round or oval retinitis lesions','Recurrent acute (episodic) courses'])}`, nextQuestion: "ddx_toxo" },
            { label: `None above`, nextQuestion: "ddx_un_choroiditis" }
        ],
        "",
        {
            "BSCR" : "low",
            "MEWDS" : "low",
            "MFCPU" : "low",
            "PIC" : "low",
        }
    ),
    'choroiditis-multi': new Question(
        "Question",
        "Which clinical feature aligns with the patient's presentation?",
        [
            { label: `${imaging_render('','Morphology',['Ameboid or serpentine shape'])} ${imaging_render('','Imaging',['FA<br>Early diffuse hypo-fluorescent lesion, late hyper-fluorescent lesion border','FAF<br>Hypo-autofluorescent lesion with hyper-autofluorescent border'])}`, nextQuestion: "check-tb-sc" },
            { label: `${imaging_render('','Morphology',['Plaque-like placoid appearance'])} ${imaging_render('','Imaging',['FA<br>Early hypo-fluorescent lesion and late diffuse hyper-fluorescent lesion<br>*During acute phase of the disease'])}`, nextQuestion: "ddx_apmppe" },
            { label: `${imaging_render('History and Examination','',['Unilateral eye involvement'])} ${imaging_render('','Morphology',['Gray-white spots with foveal granularity'])}, ${imaging_render('','Imaging',['FA<br>“Wreath-like” hyper-fluorescent lesions','OCT<br>Hyper-reflective lesions extending from the retinal pigment epithelium, into and/or through the ellipsoid zone into the outer nuclear layer of the retina'])}`, nextQuestion: "ddx_mewds" },
            { label: `${imaging_render('History and Examination','',['Bilateral eye involvement','Mid-periphery or peripheral involvement'])} ${imaging_render('','Morphology',['Oval or round lesions with predominant lesion size > 250 µm',`“Punched-out atrophic” scars or active lesions`])}`, nextQuestion: "check-tb-mfcpu" },
            { label: `${imaging_render('History and Examination','',['No anterior and vitreous inflammation','Concentrated in posterior pole'])} ${imaging_render('','Morphology',['Punctate lesion appearance with predominant lesion size < 250 µm (typically < 125 µm)',`Yellow-white or cream-coloured`])}`, nextQuestion: "ddx_pic" },
            { label: `${imaging_render('History and Examination','',['Bilateral eye involvement','Absent to mild anterior chamber inflammation','Absent to moderate vitritis'])} ${imaging_render('','Morphology',['Cream-colored or yellow-orange',`Oval or round choroidal lesions (“birdshot spots”)`])}`, nextQuestion: "ddx_bscr" },       
            { label: `None above`, nextQuestion: "check_post_sarcoidosis" }
        ],
        "",
        {
            "Toxoplasma chorioretinitis" : "low"
        }
    ),
    'check_post_sarcoidosis': new Question(
        "Question",
        "Has the patient reported respiratory symptoms like shortness of breath/cough and skin lumps or joint aches?",
        [
            { label: `Yes`, nextQuestion: "ddx_sarcoid_panuveitis" },
            { label: `No`, nextQuestion: "ddx_un_choroiditis" }
        ],
        "",
        {

        }
    ),
    'check-tb-sc': new Question(
        "Question",
        "Has the patient reported exposure to individuals diagnosed with tuberculosis (TB) or traveled to a TB-endemic region recently?",
        [
            { label: `Yes`, nextQuestion: "ddx_tb_sc" },
            { label: `No`, nextQuestion: "ddx_sc" }
        ],
        "",
        {
            "Serpiginous Choroiditis" : "high",
            "Tubercular uveitis" : "high"
        }
    ),
    'check-tb-mfcpu': new Question(
        "Question",
        "Has the patient reported exposure to individuals diagnosed with tuberculosis (TB) or traveled to a TB-endemic region recently?",
        [
            { label: `Yes`, nextQuestion: "ddx_tb_mfcpu" },
            { label: `No`, nextQuestion: "ddx_mfcpu" }
        ],
        "",
        {
            "MFCPU" : "high",
            "Tubercular uveitis" : "high"
        }
    ),
    'panuveitis-1': new Question(
        "Question",
        "Does the patient have bilateral granulomatous panuveitis with multiple serous retinal detachment?",
        [
            { label: 'Yes', nextQuestion: 'pu_so_vkh'},
            { label: 'No', nextQuestion: 'panuveitis-2'}
        ],
        "",
        {
            "APMPPE" : "low",
            "BSCR" : "low",
            "MEWDS" : "low",
            "MFCPU" : "low",
            "PIC" : "low",
            "Serpiginous Choroiditis" : "low",
        }
    ),

    'pu_so_vkh': new Question(
        "Question",
        "Which clinical feature aligns with the patient's presentation?",
        [
            { label: 'History of unilateral ocular trauma or surgery', nextQuestion: 'ddx_so'},
            { label: `${imaging_render('',`Evidence of Harada's disease`,['Exudative retinal detachment','FA - Multiple-loculated appearance','OCT - Septae'])} ${imaging_render('','Neurologic symptoms',['Headache','Tinnitus','Dysacusis','Meningism','CSF pleocytosis'])}`, nextQuestion: "ddx_vkh_early" },
            { label: `${imaging_render('','History of early stage VKH disease',['Sunset glow fundus'])} ${imaging_render('','Cutaneous findings',['Vitiligo','Poliosis','Alopecia'])}`, nextQuestion: "ddx_vkh_late" },
            { label: `None above`, nextQuestion: "ddx_un_panuveitis" }
        ],
        "",
        {
            "Sympathetic Ophthalmia" : "high",
            "VKH" : "high"
        }
    ),

    

    'panuveitis-2': new Question(
        "Question",
        "Is there prominent retinitis, retinal vasculitis, or vitritis?",
        [
            { label: `Yes, prominent retinitis`, nextQuestion: "pan-retinitis" },
            { label: `Yes, prominent retinal vasculitis`, nextQuestion: "pan-rvasculitis" },
            { label: `Yes, progressive vitritis with hypopyon`, nextQuestion: "endophthalmitis" },
            { label: `No`, nextQuestion: "drug_induced" }
        ],
        "",
        {
            "Sympathetic Ophthalmia" : "low",
            "VKH" : "low"
        }
    ),

    'pan-retinitis': new Question(
        "Question",
        "Which clinical feature aligns with the patient's presentation?",
        [
            { label: `${other_feature_render('Necrotizing retinitis involving the peripheral retina','Other features include',['Circumferential or confluent retinitis','Retinal vasculitis','More than minimal vitritis'])}`, nextQuestion: "ddx_arn" },
            { label: `${other_feature_render('Necrotizing retinitis with indistinct borders due to numerous small (<50µm) satellite) in a systemic or  ocular immune-compromised patient','Other features include',['Absent to mild vitritis','Wedge-shaped area of retinitis','Hemorrhagic appearance of retinitis','Granular appearance of retinitis'])}`, nextQuestion: "ddx_cmv_retinitis" },
            { label: `${other_feature_render('Focal or pauci-focal necrotizing retinitis in a immuno-competent patient','Other features include',['Hyperpigmented and/or atrophic chorioretinal scar','Round or oval retinitis lesions','Recurrent acute (episodic) courses'])}`, nextQuestion: "ddx_toxo" },
            { label: `${other_feature_render('Focal retinal infiltrates with retinal vasculitis','Other findings include',['Oral aphthous ulcers','Genital ulcers',"Typical defined Behcet's disease skin lesions"])}`, nextQuestion: "ddx_behcet_retinitis" },
            { label: `None above`, nextQuestion: "ddx_un_panuveitis" }
        ],
        "",
        {
            "Tubercular uveitis" : "low",
            "Sarcoid uveitis" : "low",
        }
    ),

    'pan-rvasculitis': new Question(
        "Question",
        "Which clinical feature aligns with the patient's presentation?",
        [
            { label: `Occlusive retinal vasculitis WITH <br><br>${imaging_render('History','',['Exposure to individuals diagnosed with TB','Travelled to a TB-endemic region recently'])}`, nextQuestion: "ddx_tb_rvasculitis" },
            { label: `${other_feature_render('Retinal vasculitis and/or focal retinal infiltrates','Other findings include',['Oral aphthous ulcers','Genital ulcers',"Typical defined Behcet's disease skin lesions"])}`, nextQuestion: "ddx_behcet_rvasculitis" },
            { label: `Retinal vasculitis WITH <br><br>${imaging_render('Respiratory symptoms','',['Shortness of breath','Cough'])} ${imaging_render('Others','',['Skin lumps','Joint aches'])}`, nextQuestion: "ddx_sarcoid_rvasculitis" },
            { label: `None above`, nextQuestion: "ddx_un_panuveitis" }
        ],
        "",
        {   
            "ARN" : "low",
            "CMV retinitis" : "low",
            "Toxoplasma chorioretinitis" : "low"
        }
    ),

    'endophthalmitis': new Question(
        "Question",
        "Which clinical feature aligns with the patient's presentation?",
        [
            { label: 'History of ocular surgery, intravitreal injections, or trauma', nextQuestion: 'ddx_Xendophthalmitis'},
            { label: 'History of IV drug abuse, dental surgery, or bacteria/fungalaemia', nextQuestion: 'ddx_Nendophthalmitis'},
            { label: `None above`, nextQuestion: "ddx_un_panuveitis"}
        ],
        "",
        {
            "Endophthalmitis" : "high"
        }
    ),

    'drug_induced': new Question(
        "Question",
        "Check if patient's drug history matches the uveitis presentation",
        [
            { label: `${imaging_render('','',['Rifabutin: conjunctival injection, keratic precipitates, anterior chamber cell/flare with or without hypopyon, vitreous cell, perivascular retinal infiltrates',
            'Bisphosphonates: conjunctivitis, scleritis, iritis - anterior chamber reaction with cell/flare',
            'Moxifloxacin: acute bilateral iris depigmentation and anterior uveitis',
            'Checkpoint inhibitor: anterior uveitis, VKH-like uveitis (nivolumab), Behcet like syndrome (pembrolizumab)',
            'Brimonidine: KP, posterior synechiae, iris nodules, anterior chamber cell/flare',
            'Prostaglandin analogues: mild anterior chamber reaction, CME'])}`, nextQuestion: "ddx_drug_induced" },
            { label: `No relevance`, nextQuestion: "ddx_un_panuveitis" }
        ],
        "",
        {

        }
    ),

    
    'rapid-1': new Question(
        "Question",
        "Which clinical feature aligns with the patient's presentation?",
        [
            { label: `${other_feature_render('Necrotizing retinitis involving the peripheral retina','Other features include',['Circumferential or confluent retinitis','Retinal vasculitis','More than minimal vitritis'])}`, nextQuestion: "ddx_arn" },
            { label: `${other_feature_render('Focal or pauci-focal necrotizing retinitis in a immuno-competent patient','Other features include',['Hyperpigmented and/or atrophic chorioretinal scar','Round or oval retinitis lesions','Recurrent acute (episodic) courses'])}`, nextQuestion: "ddx_toxo" },
            { label: `${other_feature_render('Focal retinal infiltrates with retinal vasculitis','Other findings include',['Oral aphthous ulcers','Genital ulcers',"Typical defined Behcet's disease skin lesions"])}`, nextQuestion: "ddx_behcet_panuveitis" },
            { label: `Progressive vitritis and hypopyon WITH <br><br>${imaging_render('History','',['Ocular surgery, intravitreali injections, trauma, IV drug abuse, dental surgery, or sepsis'])}`, nextQuestion: 'rapid_endophthalmitis'},
            { label: `Occlusive retinal vasculitis WITH <br><br>${imaging_render('History','',['Exposure to individuals diagnosed with TB','Travelled to a TB-endemic region recently'])}`, nextQuestion: "ddx_tb_panuveitis"},
            { label: `High-risk sexual behaviour`, nextQuestion: "ddx_syphilis"},
            { label: `None above`, nextQuestion: "ddx_un_panuveitis"}
        ],
        "",
        {
            "CMV retinitis" : "low",
            "APMPPE" : "low",
            "BSCR" : "low",
            "MEWDS" : "low",
            "MFCPU" : "low",
            "PIC" : "low",
            "Serpiginous Choroiditis" : "low",
            "Sympathetic Ophthalmia" : "low",
            "VKH" : "low",
            "Sarcoid uveitis" : "low",
            "Drug-induced" : "low"
        }
    ),

    'rapid_endophthalmitis': new Question(
        "Question",
        "Which clinical feature aligns with the patient's presentation?",
        [
            { label: 'History of ocular surgery, intravitreal injections, or trauma', nextQuestion: 'ddx_Xendophthalmitis'},
            { label: 'History of IV drug abuse, dental surgery, or bacteria/fungalaemia', nextQuestion: 'ddx_Nendophthalmitis'},
        ],
        "",
        {
            "Endophthalmitis" : "high"
        }
    ),



    


    'ddx_syphilis' : new Result(
        ["Syphilitic Uveitis"],
        [`Syphilitic uveitis most often presents in the secondary stage. It causes a wide variety of ocular inflammatory conditions. 
        <br><br>
        *Because of the wide variety of syphilitic ocular manifestations and the fact that this disease may mimic other etiologic entities, routine use of serologic tests for syphilis in adult patients with intraocular inflammation of unknown origin is mandatory, unless the diagnosis is quite obvious or a well-known systemic disease is present and can explain the ocular inflammation.`],
        [
            {
                "signs" : []
            }
        ],
        {
            "Syphilitic uveitis" : "high"
        }
    ),




    'ddx_arn' : new Result(
        ["Acute Retinal Necrosis"],
        [`Acute retinal necrosis (ARN) is the most frequent and serious manifestation of HSV-1, HSV-2, and VZV in the posterior segment of the eye.
        <br><br>
        As ARN is a potentially blinding necrotizing retinitis, it represents a medical emergency and should be treated immediately, preferably in an inpatient setting without waiting for confirmatory ancillary tests.`],
        [
            {
                "signs" : [`Necrotizing retinitis involving the peripheral retina`, 

                `Circumferential or confluent retinitis`,
                
                `Retinal vascular sheathing and/or occlusion`,
                
                `More than minimal vitritis`]
            }
        ],
        {
            "ARN" : "high"
        }
    ),
    'ddx_cmv_retinitis' : new Result(
        ["Cytomegalovirus Retinitis"],
        [`CMV retinitis occurs in late stages of AIDS and typically is associated with a CD4+ T-cell count of less than 50 cells/μL. 
        <br><br>
        It is the most common
        ocular complication of AIDS, but patient may also have CMV retinitis without AIDS, usually from iatrogenic immunosuppression. `],
        [
            {
                "signs" : [`Necrotizing retinitis with indistinct borders due to numerous small ( < 50 μm) satellites`,

                `Immune compromise (Systemic or ocular)`,
                
                `Wedge-shaped area of retinitis`,
                
                `Hemorrhagic appearance of the retinitis`,
                
                `Granular appearance of the retinitis`,
                
                `Absent to mild vitritis`]
            }
        ],
        {
            "CMV retinitis" : "high"
        }
    ),'ddx_toxo' : new Result(
        ["Toxoplasma Chorioretinitis"],
        [`Toxoplasmosis is an infection caused by T. gondii , an obligate intracellular protozoan and is the leading cause of posterior infectious uveitis worldwide.
        <br><br>
        Ocular disease may occur soon after primary infection or later due to reactivation of intraretinal T. gondii cysts.
        <br><br>
        Diagnosis of toxoplasmic uveitis is based on clinical presentation of a focus of retinitis adjacent to a chorioretinal scar`],
        [
            {
                "signs" : [`Focal or paucifocal necrotizing retinitis`,

                `Hyperpigmented and/or atrophic chorioretinal scar (“toxoplasmic scar”)`,
                
                `Round or oval retinitis lesions`,
                
                `Recurrent acute (episodic) course`]
            }
        ],
        {
            "Toxoplasma chorioretinitis" : "high"
        }
    ),
    'ddx_behcet_retinitis' : new Result(
        ["Behçet Disease Uveitis"],
        [`The primary manifestation of Behchet disease (BD) may start unilateral most often as an anterior uveitis, but later on, bilateral posterior uveitis occurs in most of the cases, and more than half of the patients develop panuveitis with a chronic relapsing course.
        <br><br>
        BD patients lose their visual function due to repeated ocular inflammatory attacks leading to occlusive vasculopathy of vessels in the retina and the optic nerve.`],
        [
            {
                "signs" : [`Vasculitis`,

                `Branch retinal vein occlusion`,
                
                `Recurrent Oral or genital ulcers`,
                
                `Skin rashes, pustules, lumps or bumps`,
                
                `"Shifting hypopyon" for Anterior uveitis caused by Behcet disease`,
                
                `Demographics (historical Silk Road area from East Asia to the Mediterranean region)`]
            }
        ],
        {
            "Behcet Disease uveitis" : "high"
        }
    ),
    'ddx_behcet_panuveitis' : new Result(
        ["Behçet Disease Uveitis"],
        [`The primary manifestation of Behchet disease (BD) may start unilateral most often as an anterior uveitis, but later on, bilateral posterior uveitis occurs in most of the cases, and more than half of the patients develop panuveitis with a chronic relapsing course.
        <br><br>
        BD patients lose their visual function due to repeated ocular inflammatory attacks leading to occlusive vasculopathy of vessels in the retina and the optic nerve.`],
        [
            {
                "signs" : [`Vasculitis`,

                `Branch retinal vein occlusion`,
                
                `Recurrent Oral or genital ulcers`,
                
                `Skin rashes, pustules, lumps or bumps`,
                
                `"Shifting hypopyon" for Anterior uveitis caused by Behcet disease`,
                
                `Demographics (historical Silk Road area from East Asia to the Mediterranean region)`]
            }
        ],
        {
            "Behcet Disease uveitis" : "high"
        }
    ),
    'ddx_behcet_rvasculitis' : new Result(
        ["Behçet Disease Uveitis"],
        [`The primary manifestation of Behchet disease (BD) may start unilateral most often as an anterior uveitis, but later on, bilateral posterior uveitis occurs in most of the cases, and more than half of the patients develop panuveitis with a chronic relapsing course.
        <br><br>
        BD patients lose their visual function due to repeated ocular inflammatory attacks leading to occlusive vasculopathy of vessels in the retina and the optic nerve.`],
        [
            {
                "signs" : [`Vasculitis`,

                `Branch retinal vein occlusion`,
                
                `Recurrent Oral or genital ulcers`,
                
                `Skin rashes, pustules, lumps or bumps`,
                
                `"Shifting hypopyon" for Anterior uveitis caused by Behcet disease`,
                
                `Demographics (historical Silk Road area from East Asia to the Mediterranean region)`]
            }
        ],
        {
            "Behcet Disease uveitis" : "high"
        }
    ),

    'ddx_un_retinitis' : new Result(
        ["Undifferentiated Posterior Uveitis (Retinitis)"],
        [`The SUN Working Group has recommended that uveitis cases not meeting criteria for a specific disease be classified as undifferentiated with the course, laterality, and anatomic class. 
        <br><br>
        About 50% of uveitis are undifferentiated. 
        <br><br>
        Refer to <b>differential diagnosis</b> section below to see which causes are more likely.  `],
        [
            {
                "signs" : ['Course', 'Laterality', 'Anatomic class']
            }
        ],
        {
            "Undifferentiated Posterior/Panuveitis" : "high"
        }
    ),

    'ddx_tb_rvasculitis' : new Result(
        ["Tubercular Uveitis"],
        [`Intraocular TB manifests in multiple presentation from anterior, intermediate, posterior and panuveitis. 
        <br><br>
        For posterior uveitis, choroidal tubercles are the most characteristic lesions of intraocular TB. However, there are serpiginous-like TB and multiple choroiditis-like TB as well. 
        <br><br>
        Sometimes, occlusive retinal vasculitis can be the only sign of ocular involvement.
        <br><br>
        Ethnicity and travel history are important.`],
        [
            {
                "signs" : [`anterior uveitis with iris nodules`, `serpiginous-like tubercular choroiditis`, `choroidal nodule (i.e. tuberculoma)`,
            `in individuals with active systemic tuberculosis, multifocal choroiditis`,'occlusive retinal vasculitis']
            }
        ],
        {
            "Tubercular Uveitis" : "high"
        }
    ),
    'ddx_tb_posterior' : new Result(
        ["Tubercular Uveitis"],
        [`Intraocular TB manifests in multiple presentation from anterior, intermediate, posterior and panuveitis. 
        <br><br>
        For posterior uveitis, choroidal tubercles are the most characteristic lesions of intraocular TB. However, there are serpiginous-like TB and multiple choroiditis-like TB as well. 
        <br><br>
        Sometimes, occlusive retinal vasculitis can be the only sign of ocular involvement.
        <br><br>
        Ethnicity and travel history are important.`],
        [
            {
                "signs" : [`anterior uveitis with iris nodules`, `serpiginous-like tubercular choroiditis`, `choroidal nodule (i.e. tuberculoma)`,
            `in individuals with active systemic tuberculosis, multifocal choroiditis`,'occlusive retinal vasculitis']
            }
        ],
        {
            "Tubercular Uveitis" : "high"
        }
    ),
    'ddx_tb_panuveitis' : new Result(
        ["Tubercular Uveitis"],
        [`Intraocular TB manifests in multiple presentation from anterior, intermediate, posterior and panuveitis. 
        <br><br>
        For posterior uveitis, choroidal tubercles are the most characteristic lesions of intraocular TB. However, there are serpiginous-like TB and multiple choroiditis-like TB as well. 
        <br><br>
        Sometimes, occlusive retinal vasculitis can be the only sign of ocular involvement.
        <br><br>
        Ethnicity and travel history are important.`],
        [
            {
                "signs" : [`anterior uveitis with iris nodules`, `serpiginous-like tubercular choroiditis`, `choroidal nodule (i.e. tuberculoma)`,
            `in individuals with active systemic tuberculosis, multifocal choroiditis`,'occlusive retinal vasculitis']
            }
        ],
        {
            "Tubercular Uveitis" : "high"
        }
    ),

    'ddx_sarcoid_rvasculitis' : new Result(
        ["Sarcoid Uveitis"],
        [`Uveitis is seen in a significant number of patients with sarcoidosis. 
        <br><br>
        For posterior uveitis, Yellow-gray nodular lesions may appear in the choroid or outer retina. Multiple active or atrophic chorioretinal peripheral lesions are seen. Patchy retinal phlebitis may be found, associated with candle wax dripping. 
        <br><br>
        Anterior involvement indicates panuveitis.
        `],
        [
            {
                "signs" : [`Yellow-gray nodular lesions`,

                `Multiple active or atrophic chorioretinal lesions`,
                
                `Patchy retinal phlebitis`, 
                
                `Complications: retinal haemorrhage from veins from phlebitis`]
            }
        ],
        {
            "Sarcoid uveitis" : "high"
        }
    ),
    'ddx_sarcoid_panuveitis' : new Result(
        ["Sarcoid Uveitis"],
        [`Uveitis is seen in a significant number of patients with sarcoidosis. 
        <br><br>
        For posterior uveitis, Yellow-gray nodular lesions may appear in the choroid or outer retina. Multiple active or atrophic chorioretinal peripheral lesions are seen. Patchy retinal phlebitis may be found, associated with candle wax dripping. 
        <br><br>
        Anterior involvement indicates panuveitis.
        `],
        [
            {
                "signs" : [`Yellow-gray nodular lesions`,

                `Multiple active or atrophic chorioretinal lesions`,
                
                `Patchy retinal phlebitis`, 
                
                `Complications: retinal haemorrhage from veins occluded from phlebitis`]
            }
        ],
        {
            "Sarcoid uveitis" : "high"
        }
    ),

    'ddx_un_rvasculitis' : new Result(
        ["Undifferentiated Posterior Uveitis (Retinal vasculitis)"],
        [`The SUN Working Group has recommended that uveitis cases not meeting criteria for a specific disease be classified as undifferentiated with the course, laterality, and anatomic class. 
        <br><br>
        About 50% of uveitis are undifferentiated. 
        <br><br>
        Refer to <b>differential diagnosis</b> section below to see which causes are more likely.  `],
        [
            {
                "signs" : ['Course', 'Laterality', 'Anatomic class']
            }
        ],
        {
            "Undifferentiated Posterior/Panuveitis" : "high"
        }
    ),

    'ddx_apmppe' : new Result(
        ["Acute Posterior Multifocal Placoid Pigment Epitheliopathy"],
        [`Acute Posterior Multifocal Placoid Pigment Epitheliopathy belongs to the group of primary inflammatory choriocapillaropathies formerly classified as a white
        dot syndrome.`],
        [
            {
                "signs" : [`Serous exudative retinal detachments in severe cases`,

                `Hyperacute`,
                
                `Usually bilateral`,
                
                `Predominantly occurs in young individuals during 20 – 40s`,
                
                `Check SUN morphology and imaging criteria`]
            }
        ],
        {
            "APMPPE" : "high"
        }
    ),

    'ddx_sc' : new Result(
        ["Serpiginous Choroiditis"],
        [`Serpiginous choroiditis is a bilateral, asymmetric choroiditis that usually extends from the juxtapapillary choroid and often shows progression and multiple recurrences over the course of many years or decades.
        <br><br>
        Choroidal neovascularization and subretinal fibrosis are two main long-term complications.`],
        [
            {
                "signs" : [`Bilateral, asymmetric choroiditis`,

                `Check SUN morphology and imaging criteria`]
            }
        ],
        {
            "Serpiginous Choroiditis" : "high"
        }
    ),

    'ddx_mewds' : new Result(
        ["Multiple Evanescent White Dot Syndrome"],
        [`Multiple evanescent white dot syndrome (MEWDS) results from primary inflammatory involvement of the choriocapillaris causing nonperfusion.
        <br><br>
        Viral flu-like syndromes may precede MEWDS in up to 50 % of patients. it is usually unilateral and shows unique episodes.`],
        [
            {
                "signs" : [`Preceding viral syndrome`, `Unilateral involvement`, `Check SUN morphology and imaging criteria`]
            }
        ],
        {
            "MEWDS" : "high"
        }
    ),

    'ddx_bscr' : new Result(
        ["Birdshot Chorioretinitis"],
        [`Birdshot Chorioretinitis should be considered for middle-aged patients presenting with symptoms of visual field loss, floaters, nyctalopia, or changes in color vision, who have no significant anterior segment involvement, but show vitritis and signs of retinal vasculitis, even in the absence of the characteristic choroidal lesions, especially when HLA-A29 is positive`],
        [
            {
                "signs" : [`Bilateral, chronic`,
                
                `Retinal vasculitis`,
                
                `Minimal to no anterior inflammation`,
            
                `Check SUN morphology and imaging criteria`]
            }
        ],
        {
            "BSCR" : "high"
        }
    ),

    'ddx_mfcpu' : new Result(
        ["Multifocal Choroiditis with Panuveitis"],
        [`Multifocal choroiditis and panuveitis is an uncommon, chronic, recurrent disease. It affects more frequently myopic females in the third or fourth decades of life. 
        <br><br>
        Multifocal choroidal lesions are typical and usually bilateral, but may be asymmetric.`],
        [
            {
                "signs" : [`Chronic, recurrent`,

                `Usually bilateral`,
                
                `Check SUN morphology and imaging criteria`]
            }
        ],
        {
            "MFCPU" : "high"
        }
    ),

    'ddx_pic' : new Result(
        ["Punctate Inner Choroiditis"],
        [`Punctate inner choroiditis is a rare, idiopathic, inflammatory disease confined to the inner choroid and retinal pigment epithelium that occurs in otherwise healthy, predominantly young adult myopic women.`],
        [
            {
                "signs" : [`Typically unilateral`,

                    `Complications: CNV, Subretinal fibrosis`,
                    
                    `Absence of anterior or vitreous inflammation`,
                    
                    `Check SUN morphology and imaging criteria`]
            }
        ],
        {
            "PIC" : "high"
        }
    ),

    'ddx_tb_mfcpu' : new Result(
        ["Tubercular Uveitis"],
        [`Intraocular TB manifests in multiple presentation from anterior, intermediate, posterior and panuveitis. 
        <br><br>
        For posterior uveitis, choroidal tubercles are the most characteristic lesions of intraocular TB. However, there are serpiginous-like TB and multiple choroiditis-like TB as well. 
        <br><br>
        Sometimes, occlusive retinal vasculitis can be the only sign of ocular involvement.
        <br><br>
        Ethnicity and travel history are important.`],
        [
            {
                "signs" : [`anterior uveitis with iris nodules`, `serpiginous-like tubercular choroiditis`, `choroidal nodule (i.e. tuberculoma)`,
            `in individuals with active systemic tuberculosis, multifocal choroiditis`,'occlusive retinal vasculitis']
            }
        ],
        {
            "Tubercular Uveitis" : "high"
        }
    ),

    'ddx_tb_sc' : new Result(
        ["Tubercular Uveitis"],
        [`Intraocular TB manifests in multiple presentation from anterior, intermediate, posterior and panuveitis. 
        <br><br>
        For posterior uveitis, choroidal tubercles are the most characteristic lesions of intraocular TB. However, there are serpiginous-like TB and multiple choroiditis-like TB as well. 
        <br><br>
        Sometimes, occlusive retinal vasculitis can be the only sign of ocular involvement.
        <br><br>
        Ethnicity and travel history are important.`],
        [
            {
                "signs" : [`anterior uveitis with iris nodules`, `serpiginous-like tubercular choroiditis`, `choroidal nodule (i.e. tuberculoma)`,
            `in individuals with active systemic tuberculosis, multifocal choroiditis`,'occlusive retinal vasculitis']
            }
        ],
        {
            "Tubercular Uveitis" : "high"
        }
    ),

    'ddx_un_choroiditis' : new Result(
        ["Undifferentiated Posterior Uveitis (Choroiditis)"],
        [`The SUN Working Group has recommended that uveitis cases not meeting criteria for a specific disease be classified as undifferentiated with the course, laterality, and anatomic class. 
        <br><br>
        About 50% of uveitis are undifferentiated. 
        <br><br>
        Refer to <b>differential diagnosis</b> section below to see which causes are more likely.  `],
        [
            {
                "signs" : ['Course', 'Laterality', 'Anatomic class']
            }
        ],
        {
            "Undifferentiated Posterior/Panuveitis" : "high"
        }
    ),

    'ddx_so' : new Result(
        ["Sympathetic Ophthalmia"],
        [`Sympathetic ophthalmia is a rare, bilateral, diffuse granulomatous uveitis that occurs following penetrating trauma or ocular surgery involving one eye.`],
        [
            {
                "signs" : [`Posterior findings:`,

                `Optic disk swelling`,
                
                `Generalised retinal oedema`,
                
                `Diffuse choroidal thickening`,
                
                `Dalen-Fuchs nodules in the midperiphery of the retina`,
                
                `Multiple choroidal granulomas`,
                
                `Exudative retinal detachment`]
            }
        ],
        {
            "Sympathetic Ophthalmia" : "high"
        }
    ),

    'ddx_vkh_early' : new Result(
        ["Early-Stage Vogt-Koyanagi-Harada Disease"],
        [`Vogt-Koyanagi-Harada disease (VKH) is a multisystem inflammatory autoimmune disease affecting the eyes, meninges, ears, and skin.
        <br><br>
        VKH-associated uveitis is typically a bilateral, diffuse granulomatous uveitis.
        <br><br>
        There are early and late forms of VKH.`],
        [
            {
                "signs" : [`Bilateral, diffuse granulomatous uveitis`,
                
                `Vitiligo`,
                
                `Poliosis`]
            }
        ],
        {
            "VKH" : "high"
        }
    ),

    'ddx_vkh_late' : new Result(
        ["Late-Stage Vogt-Koyanagi-Harada Disease"],
        [`Vogt-Koyanagi-Harada disease (VKH) is a multisystem inflammatory autoimmune disease affecting the eyes, meninges, ears, and skin.
        <br><br>
        VKH-associated uveitis is typically a bilateral, diffuse granulomatous uveitis.
        <br><br>
        There are early and late forms of VKH.`],
        [
            {
                "signs" : [`Bilateral, diffuse granulomatous uveitis`,
                
                `Vitiligo`,
                
                `Poliosis`]
            }
        ],
        {
            "VKH" : "high"
        }
    ),

    'ddx_un_panuveitis' : new Result(
        ["Undifferentiated Panuveitis"],
        [`The SUN Working Group has recommended that uveitis cases not meeting criteria for a specific disease be classified as undifferentiated with the course, laterality, and anatomic class. 
        <br><br>
        About 50% of uveitis are undifferentiated. 
        <br><br>
        Refer to <b>differential diagnosis</b> section below to see which causes are more likely.  `],
        [
            {
                "signs" : ['Course', 'Laterality', 'Anatomic class']
            }
        ],
        {
            "Undifferentiated Posterior/Panuveitis" : "high"
        }
    ),

    'ddx_drug_induced' : new Result(
        ["Drug Induced Uveitis"],
        [`Drug-induced uveitis is considered when a patient without a previous history of intraocular inflammation develops uveitis after being exposed to a certain agent. 
        , and the inflamamation improves after the drug is discontinued. The introduction of many new drugs into clinical practice has been accompanied by an increasing number of reports of drug-induced uveitis. `],
        [
            {
                "signs" : [`<b>Rifabutin</b>: conjunctival injection, keratic precipitates, anterior chamber cell/flare with or without hypopyon, vitreous cell, perivascular retinal infiltrates <br>`,
                `<b>Bisphosphonates</b>: conjunctivitis, scleritis, iritis - anterior chamber reaction with cell/flare <br>`,
                `<b>Moxifloxacin</b>: acute bilateral iris depigmentation and anterior uveitis <br>`,
                `<b>Checkpoint inhibitor</b>: anterior uveitis, VKH-like uveitis (nivolumab), Behcet like syndrome (pembrolizumab) <br>`,
                `<b>Brimonidine</b>: KP, posterior synechiae, iris nodules, anterior chamber cell/flare <br>`,
                `<b>Prostaglandin analogues</b>: mild anterior chamber reaction, CME <br>`]
            }
        ],
        {
            "Drug-induced" : "high"
        }
    ),
    'ddx_Nendophthalmitis' : new Result(
        ["Endogenous endophthalmitis"],
        [`Endogenous endophthalmitis is a blood-borne metastatic infection from the primary inoculation site secondary to bacterial or a fungal pathology. 
        The microorganism primarily spreads through the posterior segment vessels`],
        [
            {
                "signs" : ['reduced visual acuity', 'conjunctival injection', 'corneal edema','hypopyon','anterior chamber cells','significant vitritis','chorioretinal infiltrates']
            }
        ],
        {
            "Endophthalmitis" : "high"
        }
    ),
    'ddx_Xendophthalmitis' : new Result(
        ["Exogenous Endophthalmitis"],
        [`Exogenous endophthalmitis is the most common type of endophthalmitis. It occurs when bacteria or fungi gets inside the eye from surgery, an injection into the eyeball or an eye trauma`],
        [
            {
                "signs" : ['reduced visual acuity', 'conjunctival injection', 'corneal edema','hypopyon','anterior chamber cells','significant vitritis','chorioretinal infiltrates']
            }
        ],
        {
            "Endophthalmitis" : "high"
        }
    )
    
    


    
}

function other_feature_render(text1, text2, textList){
    let text = '';
    text += text1 + '<br><br>';
    text += `${text2}`
    text += `<ul class='custom-list'>`
    textList.forEach(item => {
        text += `<li><i class='bi bi-check'></i><span>${item}</span></li>`
    })
    text += `</ul>`
    console.log(text)
    return text;
}

function imaging_render(text1, text2, textList){
    let text = ``;
    text += text1;
    text += `<span style='margin-bottom: 0.8rem;'>${text2}</span>` 
    
    text += `<ul class='custom-list' style='line-height: 1.7;'>`;
    textList.forEach(item => {
        text += `<li><i class='bi bi-check'></i><span>${item}</span></li>`
    })
    text += `</ul>`
    console.log(text)
    return text;
}
