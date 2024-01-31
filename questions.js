import { Question, Result } from "./new-decision.js";

export const dummyQuestions = {
    'intro': new Question(
        `<div class="alert alert-warning" role="alert">
        <b>Warning!</b><br>The use of Uveitis Tree does NOT replace clinical judgement. By selecting YES, I confirm that I am using Uveitis Tree with this understanding.
    </div>`,
        "Do you want to start?",
        [
            { label: "Yes", nextQuestion: "course_type" },
            { label: "Exit", nextQuestion: "not_agreed" }
        ],
        "",
        {

        }
    ),
    'course_type': new Question(
        `Question`,
        `Describe the course of the uveitis.`,
        [
            { label: "Acute, monophasic", nextQuestion: "laterality_m" },
            { label: "Acute, recurrent", nextQuestion: "laterality_r" },
            { label: "Chronic", nextQuestion: "laterality_c" }
        ],
        "",
        {

        }
    ),
    'laterality_m': new Question(
        "Question",
        "What is the laterality of the uveitis?",
        [
            { label: "Unilateral", nextQuestion: "kp_m_ul" },
            { label: "Bilateral", nextQuestion: "kp_m_bl" },
        ],
        "",
        {
            "JIA Anterior uveitis" : "low"
        }
    ),
    'laterality_m': new Question(
        "Question",
        "What is the laterality of the uveitis?",
        [
            { label: "Unilateral", nextQuestion: "kp_m_ul" },
            { label: "Bilateral", nextQuestion: "kp_m_bl" },
        ],
        "",
        {
            "JIA Anterior uveitis" : "low"
        }
    ),
    'laterality_r': new Question(
        "Question",
        "What is the laterality of the uveitis?",
        [
            { label: "Unilateral", nextQuestion: "kp_r_ul" },
            { label: "Bilateral", nextQuestion: "kp_r_bl" },
            { label: "Alternating", nextQuestion: "kp_r_alt" },
        ],
        "",
        {
            "JIA Anterior uveitis" : "low"
        }
    ),
    'laterality_c': new Question(
        "Question",
        "What is the laterality of the uveitis?",
        [
            { label: "Unilateral", nextQuestion: "kp_c_ul" },
            { label: "Bilateral", nextQuestion: "kp_c_bl" },
            { label: "History of Alternating", nextQuestion: "kp_c_hx_alt" },
        ],
        "",
        {
        }
    ),
    'kp_m_ul': new Question(
        "Question",
        "What type of keratic precipitates are seen in the uveitis?",
        [
            { label: "Granulomatous", nextQuestion: "viral_au_1_keratitis" },
            { label: "Stellate", nextQuestion: "fus_au_1_endotheliitis" },
            { label: "Non-granulomatous", nextQuestion: "heterochromia_mr_ul_ng" },
            { label: "Endothelial dusting", nextQuestion: "heterochromia_mr_ul_ng" },
            { label: "None", nextQuestion: "heterochromia_mr_ul_ng" }
        ],
        "",
        {
            "JIA Anterior uveitis" : "low",
            "TINU Anterior uveitis" : "low"
        }
    ),
    'kp_r_ul': new Question(
        "Question",
        "What type of keratic precipitates are seen in the uveitis?",
        [
            { label: "Granulomatous", nextQuestion: "viral_au_1_keratitis" },
            { label: "Stellate", nextQuestion: "fus_au_1_endotheliitis" },
            { label: "Non-granulomatous", nextQuestion: "heterochromia_mr_ul_ng" },
            { label: "Endothelial dusting", nextQuestion: "heterochromia_mr_ul_ng" },
            { label: "None", nextQuestion: "heterochromia_mr_ul_ng" }
        ],
        "",
        {
            "JIA Anterior uveitis" : "low",
            "TINU Anterior uveitis" : "low"
        }
    ),
    'kp_m_bl': new Question(
        "Question",
        "What type of keratic precipitates are seen in the uveitis?",
        [
            { label: "Granulomatous", nextQuestion: "ddx_mr_bl_g" },
            { label: "Non-granulomatous", nextQuestion: "tinu_mr_bl_ng" },
            { label: "Endothelial dusting", nextQuestion: "tinu_mr_bl_ng" },
            { label: "None", nextQuestion: "tinu_mr_bl_ng" }
        ],
        "",
        {
            "CMV Anterior uveitis" : "low",
            "HSV Anterior uveitis" : "low",
            "VZV Anterior uveitis" : "low",
            "FUS Anterior uveitis" : "low",
            "JIA Anterior uveitis" : "low",
            "HLA-B27 Anterior uveitis" : "low"
        }
    ),
    'kp_r_bl': new Question(
        "Question",
        "What type of keratic precipitates are seen in the uveitis?",
        [
            { label: "Granulomatous", nextQuestion: "ddx_mr_bl_g" },
            { label: "Non-granulomatous", nextQuestion: "tinu_mr_bl_ng" },
            { label: "Endothelial dusting", nextQuestion: "tinu_mr_bl_ng" },
            { label: "None", nextQuestion: "tinu_mr_bl_ng" }
        ],
        "",
        {
            "CMV Anterior uveitis" : "low",
            "HSV Anterior uveitis" : "low",
            "VZV Anterior uveitis" : "low",
            "FUS Anterior uveitis" : "low",
            "JIA Anterior uveitis" : "low",
            "HLA-B27 Anterior uveitis" : "low"
        }
    ),
    'kp_r_alt': new Question(
        "Question",
        "What type of keratic precipitates are seen in the uveitis?",
        [
            { label: "Granulomatous", nextQuestion: "ddx_r_alt_g" },
            { label: "Non-granulomatous", nextQuestion: "ddx_hlab27_r_alt_ng" },
            { label: "Endothelial dusting", nextQuestion: "ddx_hlab27_r_alt_ng" },
            { label: "None", nextQuestion: "ddx_hlab27_r_alt_ng" }
        ],
        "",
        {
            "CMV Anterior uveitis" : "low",
            "HSV Anterior uveitis" : "low",
            "VZV Anterior uveitis" : "low",
            "FUS Anterior uveitis" : "low",
            "JIA Anterior uveitis" : "low",
            "TINU Anterior uveitis" : "low",
        }
    ),
    'kp_c_ul': new Question(
        "Question",
        "What type of keratic precipitates are seen in the uveitis?",
        [
            { label: "Granulomatous", nextQuestion: "viral_au_1_keratitis" },
            { label: "Stellate", nextQuestion: "fus_au_1_endotheliitis" },
            { label: "Non-granulomatous", nextQuestion: "heterochromia_c_ul_ng" },
            { label: "Endothelial dusting", nextQuestion: "heterochromia_c_ul_ng" },
            { label: "None", nextQuestion: "heterochromia_c_ul_ng" }
        ],
        "",
        {
            "TINU Anterior uveitis" : "low",
        }
    ),
    'kp_c_bl': new Question(
        "Question",
        "What type of keratic precipitates are seen in the uveitis?",
        [
            { label: "Granulomatous", nextQuestion: "ddx_c_bl_g" },
            { label: "Non-granulomatous", nextQuestion: "jia_or_tinu_c_bl_ng" },
            { label: "Endothelial dusting", nextQuestion: "jia_or_tinu_c_bl_ng" },
            { label: "None", nextQuestion: "jia_or_tinu_c_bl_ng" }
        ],
        "",
        {
            "CMV Anterior uveitis" : "low",
            "HSV Anterior uveitis" : "low",
            "VZV Anterior uveitis" : "low",
            "FUS Anterior uveitis" : "low",
            "HLA-B27 Anterior uveitis" : "low"
        }
    ),
    'kp_c_hx_alt': new Question(
        "Question",
        "What type of keratic precipitates are seen in the uveitis?",
        [
            { label: "Granulomatous", nextQuestion: "ddx_c_alt_g" },
            { label: "Non-granulomatous", nextQuestion: "ddx_hlab27_c_alt_ng" },
            { label: "Endothelial dusting", nextQuestion: "ddx_hlab27_c_alt_ng" },
            { label: "None", nextQuestion: "ddx_hlab27_c_alt_ng" }
        ],
        "",
        {
            "CMV Anterior uveitis" : "low",
            "HSV Anterior uveitis" : "low",
            "VZV Anterior uveitis" : "low",
            "FUS Anterior uveitis" : "low",
            "JIA Anterior uveitis" : "low",
            "TINU Anterior uveitis" : "low"
        }
    ),
    'viral_au_1_keratitis': new Question(
        "Question",
        "Is dendritic keratitis present?",
        [
            { label: "Yes", nextQuestion: "ddx_hsv" },
            { label: "No", nextQuestion: "viral_au_2_zoster" },
        ],
        "",
        {
            "FUS Anterior uveitis" : "low",
            "JIA Anterior uveitis" : "low",
            "HLA-B27 Anterior uveitis" : "low",
            "TINU Anterior uveitis" : "low"
        }
    ),
    'viral_au_2_zoster': new Question(
        "Question",
        "Is there a history of concurrent or recent dermatomal Herpes Zoster?",
        [
            { label: "Yes", nextQuestion: "ddx_vzv" },
            { label: "No", nextQuestion: "viral_au_3_clinical_picture" },
        ],
        "",
        {

        }
    ),
    'viral_au_3_clinical_picture': new Question(
        "Question",
        "Which clinical feature aligns with the patient's presentation?",
        [
            { label: "Granulomatous cluster of small and medium-sized KPs in Arlt’s triangle \
             [with or without corneal scars]", nextQuestion: "viral_au_4_sa" },
            { label: "Few medium-sized KPs, minimal anterior chamber cells and extremely\
            high IOP", nextQuestion: "ddx_cmv_viral" },
            { label: "None above", nextQuestion: "ddx_viral_au_3_cp_none" }
        ],
        "",
        {

        }
    ),
    'viral_au_4_sa': new Question(
        "Question",
        "Which clinical feature aligns with the patient's presentation?",
        [
            { label: "Sectoral iris atrophy in a patient < 50 years of age", nextQuestion: "ddx_hsv" },
            { label: "Sectoral iris atrophy in a patient > 60 years of age", nextQuestion: "ddx_vzv" },
            { label: "None above", nextQuestion: "ddx_viral_au_4_sa_none" }
        ],
        "image",
        {
            "HSV Anterior uveitis" : "high",
            "VZV Anterior uveitis" : "high"
        }
    ),
    'fus_au_1_endotheliitis': new Question(
        "Question",
        "Is there evidence of endotheliitis or nodular, coin-shaped endothelial lesions?",
        [
            { label: "Yes", nextQuestion: "ddx_cmv_fus_algorithm" },
            { label: "No", nextQuestion: "ddx_fus" },
        ],
        "",
        {
            "HSV Anterior uveitis" : "low",
            "VZV Anterior uveitis" : "low",
            "JIA Anterior uveitis" : "low",
            "HLA-B27 Anterior uveitis" : "low",
            "TINU Anterior uveitis" : "low",
        }
    ),
    'heterochromia_mr_ul_ng': new Question(
        "Question",
        "Are there signs of heterochromia?",
        [
            { label: "Yes", nextQuestion: "fus_au_1_endotheliitis" },
            { label: "No", nextQuestion: "iop_mr_ul_ng_no_het" },
        ],
        "",
        {
            "JIA Anterior uveitis" : "low",
            "TINU Anterior uveitis" : "low",
        }
    ),
    'iop_mr_ul_ng_no_het': new Question(
        "Question",
        "Is there elevated Intraocular Pressure without prior steroid treatment and without iris atrophy/transillumination?",
        [
            { label: "Yes", nextQuestion: "viral_au_1_keratitis" },
            { label: "No", nextQuestion: "ddx_hlab27" },
        ],
        "",
        {
            "FUS Anterior uveitis" : "low",
            "JIA Anterior uveitis" : "low",
            "TINU Anterior uveitis" : "low",
        }
    ),
    'iop_c_ul_ng_cp_not_jia': new Question(
        "Question",
        "Is there elevated Intraocular Pressure without prior steroid treatment and without iris atrophy/transillumination?",
        [
            { label: "Yes", nextQuestion: "viral_au_1_keratitis" },
            { label: "No", nextQuestion: "ddx_hlab27" },
        ],
        "",
        {
            "FUS Anterior uveitis" : "low",
            "JIA Anterior uveitis" : "low",
            "TINU Anterior uveitis" : "low",
        }
    ),
    'tinu_mr_bl_ng': new Question(
        "Question",
        `Is there a history of acute renal dysfunction with corresponding symptoms and lab findings?
        ${imaging_render('<br><br>','Renal findings',['abnormal urinalysis tests','reduced renal function','elevated \
        urinary β-2 microglobulin'])} ${imaging_render('','Systemic findings',['anorexia', 'fever', 'weight loss', 'fatigue','polyuria'])}`,
        [
            { label: "Yes", nextQuestion: "ddx_tinu_mr_bl_ng" },
            { label: "No", nextQuestion: "ddx_mr_bl_ng_not_tinu" },
        ],
        "",
        {
            "CMV Anterior uveitis" : "low",
            "HSV Anterior uveitis" : "low",
            "VZV Anterior uveitis" : "low",
            "FUS Anterior uveitis" : "low",
            "JIA Anterior uveitis" : "low",
            "HLA-B27 Anterior uveitis" : "low",
        }
    ),
    'heterochromia_c_ul_ng': new Question(
        "Question",
        "Are there signs of heterochromia?",
        [
            { label: "Yes", nextQuestion: "fus_au_1_endotheliitis" },
            { label: "No", nextQuestion: "cp_c_ul_ng" },
        ],
        "",
        {
            "TINU Anterior uveitis" : "low"
        }
    ),
    'cp_c_ul_ng': new Question(
        "Question",
        "Which clinical feature aligns with the patient's presentation?",
        [
            { label: "History of symptomatic attacks", nextQuestion: "iop_c_ul_ng_cp_not_jia" },
            { label: "Age < 16 with insidious onset and mostly asymptomatic/minimally symptomatic history", nextQuestion: "ddx_jia_c_ul_ng" },
        ],
        "",
        {

            "FUS Anterior uveitis" : "low",
            "TINU Anterior uveitis" : "low"
        }
    ),
    'jia_or_tinu_c_bl_ng': new Question(
        "Question",
        "Which clinical feature aligns with the patient's presentation?",
        [
            { label: "Age < 16 with insidious onset and mostly asymptomatic/minimally \
            symptomatic history", nextQuestion: "ddx_jia_c_bl_ng" },
            { label: "Does the patient have a history of recent acute renal dysfunction that presents systemic symptoms \
            and lab findings consistent with abnormal urinalysis tests, reduced renal function, and/or elevated \
            urinary β-2 microglobulin?\
            <br><br>\
            Systemic symptoms include anorexia, fever, weight loss, fatigue, and polyuria.", nextQuestion: "ddx_tinu_c_bl_ng" },
            { label: "None above", nextQuestion: "ddx_not_jia_nor_tinu_c_bl_ng" }
        ],
        "",
        {
        }
    ),

    'q4': new Question(
        "<b>Question 4:</b> Finished",
        "Select the type of uveitis:",
        [],
        "Acute uveitis is characterized by...",
        {
            "JIA Anterior uveitis" : "low"
        }
    ),
    'ddx_hsv' : new Result(
        ["Herpes simplex virus anterior uveitis"], 
        [`Herpes simplex, along with varicella-zoster, comprise almost 10% of non-idiopathic anterior uveitis. 
        <br><br>
        Classically unilateral, herpetic anterior uveitis is mainly hypertensive, with mild anterior chamber cellular reaction and display medium to large size keratic precipitate. 
        <br><br>
        *Without dermal and corneal involvement, VZV anterior uveitis is clinically similar to HSV anterior uveitis and only PCR can confirm the identity on the involved virus.`],
        [
            {
                "signs" : ['Unilateral eye involvement','Increased IOP','Granulomatous keratic precipitate','Dendritic, disciform, or stromal keratitis (typically, dendrites with well-developed terminal bulbs and fluorescein staining at the base of the ulcer)','Posterior synechiae','Sectoral iris atrophy']
            }
        ],
        {
            "HSV Anterior uveitis" : "high"
        }
    ),
    'ddx_vzv' : new Result(
        ["Varicella zoster virus anterior uveitis"], 
        [`Varicella Zoster Virus reactivation may involve the anterior segment of the eye in the context of herpes zoster ophthalmicus.
        <br><br>
        Classically, unilateral anterior granulomatous uveitis could develop mostly after the typical zosteriform rash, even though isolated intraocular involvement is possible. 
        <br><br>
        *Without dermal and corneal involvement, VZV anterior uveitis is clinically similar to HSV anterior uveitis and only PCR can confirm the identity on the involved virus.`],
        [
            {
                "signs" : ['Unilateral eye involvement', 

                    'Herpes zoster ophthalmicus skin lesions', 
                    
                    'Increased IOP',
                    
                    'Granulomatous keratic precipitate',
                    
                    'Dendritic keratitis (typically, pseudo-dendrites with almost no terminal bulbs and fluorescein pooling at the borders)',
                    
                    'Sectoral iris atrophy']
            }
        ],
        {
            "VZV Anterior uveitis" : "high"
        }
    ),
    'ddx_cmv_viral' : new Result(
        ["Cytomegalovirus anterior uveitis"], 
        [`CMV-associated anterior uveitis is found in the immunocompetent host, apparently often leading to signs considered typical of the Posner-Schlossman syndrome. 
        <br><br>
        *CMV anterior uveitis requires a positive PCR on aqueous specimen to confirm the infection. `],
        [
            {
                "signs" : ['Posner-Schlossman syndrome - Recurrent episodes of mild anterior chamber inflammation associated with a disproportionate rise in IOP',

                'Diffuse corneal epithelial oedema',
                
                'Nodular, coin-shaped endothelial lesions']
            }
        ],
        {
            "CMV Anterior uveitis" : "high"
        }
    ),
    'ddx_viral_au_3_cp_none' : new Result(
        ["Undifferentiated anterior uveitis"], 
        [`The SUN Working Group has recommended that uveitis cases not meeting criteria for a specific disease be classified as undifferentiated with the course, laterality, and anatomic class. 
        <br><br>
        About 50% of uveitis are undifferentiated. 
        <br><br>
        Refer to <b>differential diagnosis</b> section below to see which causes are more likely.  `],
        [
            {
                "signs" : ['Course',

                'Laterality',
                
                'Anatomic class']
            }
        ],
        {
            "Undifferentiated Anterior uveitis" : "high"
        }
    ),
    'ddx_viral_au_4_sa_none' : new Result(
        ["Undifferentiated anterior uveitis"], 
        [`The SUN Working Group has recommended that uveitis cases not meeting criteria for a specific disease be classified as undifferentiated with the course, laterality, and anatomic class. 
        <br><br>
        About 50% of uveitis are undifferentiated. 
        <br><br>
        Refer to <b>differential diagnosis</b> section below to see which causes are more likely.  `],
        [
            {
                "signs" : ['Course',

                'Laterality',
                
                'Anatomic class']
            }
        ],
        {
            "Undifferentiated Anterior uveitis" : "high"
        }
    ),
    'ddx_cmv_fus_algorithm' : new Result(
        ["Cytomegaovirus anterior uveitis"], 
        [`CMV-associated anterior uveitis is found in the immunocompetent host, apparently often leading to signs considered typical of the Posner-Schlossman syndrome. 
        <br><br>
        *CMV anterior uveitis requires a positive PCR on aqueous specimen to confirm the infection. `],
        [
            {
                "signs" : ['Posner-Schlossman syndrome - Recurrent episodes of mild anterior chamber inflammation associated with a disproportionate rise in IOP',

                'Diffuse corneal epithelial oedema',
                
                'Nodular, coin-shaped endothelial lesions']
            }
        ],
        {
            "CMV Anterior uveitis" : "high"
        }
    ),
    'ddx_fus' : new Result(
        ["Fuchs uveitis syndrome"], 
        [`Fuchs uveitis syndrome is an eye-limited anterior uveitis. The diagnosis is based on typical clinical findings shown below. `],
        [
            {
                "signs" : ['Unilateral eye involvement',

                    'Mild anterior chamber inflammation',
                    
                    'Insidious onset with chronic course',
                    
                    'Younger patients',
                    
                    'stellate keratic preciptates',
                    
                    'Heterochromia',
                    
                    'Absence of posterior synechiae',
                    
                    'Diffuse anterior stromal iris atrophy',
                    
                    'Development of complications like cataract and glaucoma']
            }
        ],
        {
            "FUS Anterior uveitis" : "high"
        }
    ),
    'ddx_hlab27' : new Result(
        ["HLA-B27/Spondyloarthritis-associated anterior uveitis"], 
        [`Spondyloarthritis/HLA-B27-associated Anterior Uveitis is the commonest type of acute anterior uveitis seen in clinical practice. Depending on the population studied, up to 50% or more of patients presenting with episodes of acute anterior uveitis may carry the HLA-B27 gene. 
        <br><br>
        It is commonly associated with other HLA-B27 related diseases. Therefore, there may be symptoms and signs of rheumatic disorders, such as ankylosing spondylitis and reactive arthritis. 
        <br><br>
        *Refer to DUET algorithm to diagnose Spondyloarthritis/HLA-B27-associated Anterior Uveitis.
        <br><br>
        <div><img src="./img/duet.png" class="img-fluid"></div>`],
        [
            {
                "signs": ['Abrupt in onset',

                    'Unilateral eye involvement',
                    
                    'Alternate one eye from another',
                    
                    'Diagnosed rheumatic disorders (Ankylosing spondylitis, Reactive arthritis, Psoriatic arthritis, Enteropathic arthropathy)']
            }
        ],
        {
            "HLA-B27 Anterior uveitis" : "high"
        }
    ),
    'ddx_mr_bl_g' : new Result(
        ["Undifferentiated anterior uveitis"], 
        [`The SUN Working Group has recommended that uveitis cases not meeting criteria for a specific disease be classified as undifferentiated with the course, laterality, and anatomic class. 
        <br><br>
        About 50% of uveitis are undifferentiated. 
        <br><br>
        Refer to <b>differential diagnosis</b> section below to see which causes are more likely.  `],
        [
            {
                "signs" : ['Course',

                'Laterality',
                
                'Anatomic class']
            }
        ],
        {
            "Undifferentiated Anterior uveitis" : "high"
        }
    ),
    'ddx_tinu_mr_bl_ng' : new Result(
        ["Tubulointerstitial nephritis with uveitis sydnrome"], 
        [`Tubulointerstitial Nephritis with Uveitis Syndrome consists of uveitis and acute interstitial nephritis. 
        <br><br>
        They may occur at different times, so careful history is obtained and other systemic inflammatory or infectious diseases are ruled out. `],
        [
            {
                "signs" : ['Bilateral eye involvement', 

                    'Sudden onset',
                    
                    `Recent acute renal dysfunction:<br>
                    - Abnormal urinalysis test<br>
                    - Elevated urinary β-2 microglobulin`,
                    
                    `Systemic symptoms:<br>
                    
                    - Anorexia <br>
                    
                    - Fever <br>
                    
                    - Weightloss <br> 
                    
                    - Fatigue <br>
                    
                    - Polyuria <br>`,
                    
                    `“Spillover” vitritis`]
            }
        ],
        {
            "TINU Anterior uveitis" : "high"
        }
    ),
    'ddx_mr_bl_ng_not_tinu' : new Result(
        ["Undifferentiated anterior uveitis"], 
        [`The SUN Working Group has recommended that uveitis cases not meeting criteria for a specific disease be classified as undifferentiated with the course, laterality, and anatomic class. 
        <br><br>
        About 50% of uveitis are undifferentiated. 
        <br><br>
        Refer to <b>differential diagnosis</b> section below to see which causes are more likely.  `],
        [
            {
                "signs" : ['Course',

                'Laterality',
                
                'Anatomic class']
            }
        ],
        {
            "Undifferentiated Anterior uveitis" : "high"
        }
    ),
    'ddx_r_alt_g' : new Result(
        ["Undifferentiated anterior uveitis"], 
        [`The SUN Working Group has recommended that uveitis cases not meeting criteria for a specific disease be classified as undifferentiated with the course, laterality, and anatomic class. 
        <br><br>
        About 50% of uveitis are undifferentiated. 
        <br><br>
        Refer to <b>differential diagnosis</b> section below to see which causes are more likely.  `],
        [
            {
                "signs" : ['Course',

                'Laterality',
                
                'Anatomic class']
            }
        ],
        {
            "Undifferentiated Anterior uveitis" : "high"
        }
    ),
    'ddx_hlab27_r_alt_ng' : new Result(
        ["HLA-B27/Spondyloarthritis-associated anterior uveitis"], 
        [`Spondyloarthritis/HLA-B27-associated Anterior Uveitis is the commonest type of acute anterior uveitis seen in clinical practice. Depending on the population studied, up to 50% or more of patients presenting with episodes of acute anterior uveitis may carry the HLA-B27 gene. 
        <br><br>
        It is commonly associated with other HLA-B27 related diseases. Therefore, there may be symptoms and signs of rheumatic disorders, such as ankylosing spondylitis and reactive arthritis. 
        <br><br>
        *Refer to DUET algorithm to diagnose Spondyloarthritis/HLA-B27-associated Anterior Uveitis.
        <br><br>
        <div><img src="./img/duet.png" class="img-fluid"></div>`],
        [
            {
                "signs": ['Abrupt in onset',

                    'Unilateral eye involvement',
                    
                    'Alternate one eye from another',
                    
                    'Diagnosed rheumatic disorders (Ankylosing spondylitis, Reactive arthritis, Psoriatic arthritis, Enteropathic arthropathy)']
            }
        ],
        {
            "HLA-B27 Anterior uveitis" : "high"
        }
    ),
    'ddx_jia_c_ul_ng' : new Result(
        ["Juvenile idiopathic arthritis-associated chronic anterior uveitis"], 
        [`Juvenile Idiopathic Arthritis-associated Chronic Anterior Uveitis is the most common cause of uveitis in children, accounting for up to 47% of all types of uveitis seen in children. 
        <br><br>
        Risk factors include:
        <ul class="custom-list">
        <li><i class="bi bi-check"></i><span>Oligo-arthritis</span></li>
        <li><i class="bi bi-check"></i><span>Female</span></li>
        <li><i class="bi bi-check"></i><span>ANA positivity</span></li>
        <li><i class="bi bi-check"></i><span>Onset of arthritis before 4 years old</span></li>
        <li><i class="bi bi-check"></i><span>Presence of HLA-DRB1 or HLADRB1*</span></li>
        <li><i class="bi bi-check"></i><span>Rheumatoid factor negative test</span></li>`],
        [
            {
                "signs" : [
                    'Children',

                    'Diagnosed arthritis in young age',

                    'Insidious onset with chronic course',

                    'Non-granulomatous, with fine- to medium-sized keratic precipitates',

                    'Mostly asymptomatic',

                    'Posterior synechiae',

                    'Complications such as cataract, glaucoma, and band keratopathy',
                ]
            }
        ],
        {
            "JIA Anterior uveitis" : "high"
        }
    ),
    'ddx_c_alt_g' : new Result(
        ["Undifferentiated anterior uveitis"], 
        [`The SUN Working Group has recommended that uveitis cases not meeting criteria for a specific disease be classified as undifferentiated with the course, laterality, and anatomic class. 
        <br><br>
        About 50% of uveitis are undifferentiated. 
        <br><br>
        Refer to <b>differential diagnosis</b> section below to see which causes are more likely.  `],
        [
            {
                "signs" : ['Course',

                'Laterality',
                
                'Anatomic class']
            }
        ],
        {
            "Undifferentiated Anterior uveitis" : "high"
        }
    ),
    'ddx_hlab27_c_alt_ng' : new Result(
        ["HLA-B27/Spondyloarthritis-associated anterior uveitis"], 
        [`Spondyloarthritis/HLA-B27-associated Anterior Uveitis is the commonest type of acute anterior uveitis seen in clinical practice. Depending on the population studied, up to 50% or more of patients presenting with episodes of acute anterior uveitis may carry the HLA-B27 gene. 
        <br><br>
        It is commonly associated with other HLA-B27 related diseases. Therefore, there may be symptoms and signs of rheumatic disorders, such as ankylosing spondylitis and reactive arthritis. 
        <br><br>
        *Refer to DUET algorithm to diagnose Spondyloarthritis/HLA-B27-associated Anterior Uveitis.
        <br><br>
        <div><img src="./img/duet.png" class="img-fluid"></div>
        `],
        [
            {
                "signs": ['Abrupt in onset',

                    'Unilateral eye involvement',
                    
                    'Alternate one eye from another',
                    
                    'Diagnosed rheumatic disorders (Ankylosing spondylitis, Reactive arthritis, Psoriatic arthritis, Enteropathic arthropathy)']
            }
        ],
        {
            "HLA-B27 Anterior uveitis" : "high"
        }
    ),
    'ddx_c_bl_g' : new Result(
        ["Undifferentiated anterior uveitis"],
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
            "Undifferentiated Anterior uveitis" : "high"
        }
    ),
    'ddx_jia_c_bl_ng' : new Result(
        ["Juvenile idiopathic arthritis-associated chronic anterior uveitis"], 
        [`Juvenile Idiopathic Arthritis-associated Chronic Anterior Uveitis is the most common cause of uveitis in children, accounting for up to 47% of all types of uveitis seen in children. 
        <br><br>
        Risk factors include:
        <ul class="custom-list">
        <li><i class="bi bi-check"></i><span>Oligo-arthritis</span></li>
        <li><i class="bi bi-check"></i><span>Female</span></li>
        <li><i class="bi bi-check"></i><span>ANA positivity</span></li>
        <li><i class="bi bi-check"></i><span>Onset of arthritis before 4 years old</span></li>
        <li><i class="bi bi-check"></i><span>Presence of HLA-DRB1 or HLADRB1*</span></li>
        <li><i class="bi bi-check"></i><span>Rheumatoid factor negative test</span></li>`],
        [
            {
                "signs" : [
                    'Children',

                    'Diagnosed arthritis in young age',

                    'Insidious onset with chronic course',

                    'Non-granulomatous, with fine- to medium-sized keratic precipitates',

                    'Mostly asymptomatic',

                    'Posterior synechiae',

                    'Complications such as cataract, glaucoma, and band keratopathy',
                ]
            }
        ],
        {
            "JIA Anterior uveitis" : "high"
        }
    ),
    'ddx_tinu_c_bl_ng' : new Result(
        ["Tubulointerstitial nephritis with uveitis sydnrome"], 
        [`Tubulointerstitial Nephritis with Uveitis Syndrome consists of uveitis and acute interstitial nephritis. 
        <br><br>
        They may occur at different times, so careful history is obtained and other systemic inflammatory or infectious diseases are ruled out. `],
        [
            {
                "signs" : ['Bilateral eye involvement', 

                    'Sudden onset',
                    
                    `Recent acute renal dysfunction:<br>
                    - Abnormal urinalysis test<br>
                    - Elevated urinary β-2 microglobulin`,
                    
                    `Systemic symptoms:<br>
                    
                    - Anorexia <br>
                    
                    - Fever <br>
                    
                    - Weightloss <br> 
                    
                    - Fatigue <br>
                    
                    - Polyuria <br>`,
                    
                    `“Spillover” vitritis`]
            }
        ],
        {
            "TINU Anterior uveitis" : "high"
        }
    ),
    'ddx_not_tinu_nor_jia_c_bl_ng' : new Result(
        ["Undifferentiated anterior uveitis"], 
        [`The SUN Working Group has recommended that uveitis cases not meeting criteria for a specific disease be classified as undifferentiated with the course, laterality, and anatomic class. 
        <br><br>
        About 50% of uveitis are undifferentiated. 
        <br><br>
        Refer to <b>differential diagnosis</b> section below to see which causes are more likely.  `],
        [
            {
                "signs" : ['Course',

                'Laterality',
                
                'Anatomic class']
            }
        ],
        {
            "Undifferentiated Anterior uveitis" : "high"
        }
    ),
};

export const dummyQuestionsIU = {
    'intro': new Question(
        `<div class="alert alert-warning" role="alert">
        <b>Warning!</b><br>The use of Uveitis Tree does NOT replace clinical judgement. By selecting YES, I confirm that I am using Uveitis Tree with this understanding.
    </div>`,
        "Do you want to start?",
        [
            { label: "Yes", nextQuestion: "systemic" },
            { label: "Exit", nextQuestion: "intro" }
        ],
        "",
        {

        }
    ),
    'systemic': new Question(
        "Question",
        "Are there any systemic symptoms associated with uveitis?",
        [
            { label: "Yes", nextQuestion: "screening" },
            { label: "No, only eye-limited", nextQuestion: "snow" }
        ],
        "",
        {

        }
    ),
    'snow': new Question(
        "Question",
        "Are snowballs or snowbanks present?",
        [
            { label: "Yes", nextQuestion: "ddx_pp" },
            { label: "No", nextQuestion: "ddx_npp" }
        ],
        "",
        {
            
        }
    ),
    'screening': new Question(
        "Question",
        "Which systemic symptoms aligns with the patient's presentation?",
        [
            { label: `${imaging_render('Neurological symptoms','',['Limb weakness','Numbness','Tingling','Excessive fatigue'])}`, nextQuestion: "ddx_ms" },
            { label: `${imaging_render('Respiratory symptoms','',['Shortness of breath','Cough'])} ${imaging_render('Others','',['Skin lumps','Joint aches'])}`, nextQuestion: "ddx_sarcoidosis" },
            { label: `${imaging_render('History','',['Recent travel to a Lyme-endemic region',' Outdoor activities in wooded areas','Exposure to large animals'])} ${imaging_render('Dermatological symptoms','',['A characteristic pink or red erythema migrans rash'])}`, nextQuestion: "ddx_lyme" },
            { label: `${imaging_render('History','',[`Above the age of 50 presenting with uveitis for the first time`])} ${imaging_render('Neurological symptoms','',['Balance issues','Cognitive impairment','Palsies','Seizures','Dizziness'])}   
            ${imaging_render('Ophthalmic','',[`Patches or subretinal tumour infiltration`])}`
            , nextQuestion: "ddx_piol"},
            { label: "None above", nextQuestion: "snow-2" }
        ],
        "",
        {
            
        }
    ),
    'snow-2': new Question(
        "Question",
        "Are snowballs or snowbanks present?",
        [
            { label: "Yes", nextQuestion: "ddx_pp" },
            { label: "No", nextQuestion: "ddx_npp" }
        ],
        "",
        {
            
        }
    ),

    'ddx_ms' : new Result(
        ["Multiple Sclerosis-associated Intermediate Uveitis"],
        [`Uveitis in patients with multiple sclerosis is generally bilateral and most often manifests as intermediate uveitis. 
        <br><br>
        Uveitis can precede the onset of neurological symptoms by many years. In patients with intermediate uveitis, the diagnosis of multiple sclerosis should be periodically reconsidered, and an appropriate consult with a neurologist is advisable.`],
        [
            {
                "signs" : ['Snowball / snowbank',

                'Retinal vasculitis (often periphlebitis)', 
                
                'Venous sclerosis', 
                
                'Diagnosed multiple sclerosis or signs of multiple sclerosis']
            }
        ],
        {
            "MS Intermediate uveitis" : "high"
        }
    ),
    'ddx_sarcoidosis' : new Result(
        ["Sarcoidosis-associated Intermediate Uveitis"],
        [`Uveitis is seen in a significant number of patients with sarcoidosis. 
        <br><br>
        Snowball are typical features of sarcoidosis. The vitreous opacities are mostly situated in the inferior vitreous. Retinal perivasculitis is frequently found in sarcoidosis. In many cases, perivasculitis is seen as segmental sheathing, and the vascular changes are often located at the equatorial or peripheral retina.`],
        [
            {
                "signs" : [`<i>Signs often associated with intermediate uveitis</i>`,

                    'Snowball / snowbank',
                    
                    'Vitreous opacities',
                    
                    'Retinal perivasculitis', 
                    
                    'Diagnosed sarcoidosis or signs of sarcoidosis']
            }
        ],
        {
            "Sarcoid Intermediate uveitis" : "high"
        }
    ),
    'ddx_syphilis' : new Result(
        ["Syphilitic Intermediate Uveitis"],
        [`Syphilitic uveitis most often presents in the secondary stage. It causes a wide variety of ocular inflammatory conditions. 
        <br><br>
        It may lead to intermediate uveitis especially if mild inflammation of the anterior segment is associated with a more pronounced vitreous reaction. 
        <br><br>
        *Because of the wide variety of syphilitic ocular manifestations and the fact that this disease may mimic other etiologic entities, routine use of serologic tests for syphilis in adult patients with intraocular inflammation of unknown origin is mandatory, unless the diagnosis is quite obvious or a well-known systemic disease is present andcan explain the ocular inflammation.`],
        [
            {
                "signs" : [`<i>Signs often associated with intermediate uveitis</i>`,

                'Retinal vasculitis',

                'Cystoid macular edema',
                
                'Hot disk', 
                
                'Absence of a frank pars plana exudate',
                
                'Diagnosed syphilis or signs of syphilis infection']
            }
        ],
        {
            "Syphilis Intermediate uveitis" : "high"
        }
    ),
    'ddx_lyme' : new Result(
        ["Lyme disease Intermediate Uveitis"],
        [`Intermediate uveitis is one of the more common ophthalmologic manifestations of Lyme disease. 
        <br><br>
        Testing patients with intermediate uveitis for Lyme disease is appropriate only from Lyme-endemic regions (or in Lyme disease-exposed individuals). 
        <br><br>
        The presence of a positive Lyme serology (with appropriate confirmatory testing) excludes the diagnosis of pars planitis.`],
        [
            {
                "signs" : [`Tick exposure in a Lyme-endemic region`,

                `Erythema migrans`,
                
                `Vitreous exudation`,
                
                `“Spillover” anterior chamber inflammation`]
            }
        ],
        {
            "Lyme Intermediate uveitis" : "high"
        }
    ),
    'ddx_piol' : new Result(
        ["Primary Intraocular Lymphoma"],
        [`Primary intraocular lymphoma (PIOL) is mainly a diffuse large B-cell tumor belonging to non-Hodgkin 's tumors. 
        <br><br>
        Clinically, PIOL often emulates ocular inflammatory process and resembles uveitis; thus, it is the most common <b>masquerade syndrome</b>
        <br><br>
        Presence of vitreous cells is a prominent feature.`],
        [
            {
                "signs" : [`Vitreous cells`,

                `Snow balls / snow banks`,
                
                `Subretinal infiltrates (uni- or multifocal with different sizes, cream or yellow colored)`,
                
                `Vascular sheathing`, 
                
                `Retinal artery occlusion`,
                
                `Diagnosed PIOL / CNS lymphoma or any signs of PIOL / CNS lymphoma`]
            }
        ],
        {
            "PIOL Intermediate uveitis" : "high"
        }
    ),
    'ddx_pp' : new Result(
        ["Pars Planitis"],
        [`Pars planitis represents a subset of intermediate uveitis characterized by fibroinflammatory material overlying the pars plana and peripheral retina (“snowbanks”).
        <br><br>
        The uveitis should be unassociated with a systemic disease and it should be distinguished from intermediate uveitis, non- pars planitis type.
        <br><br>
        The SUN working group recognized that pars planitis may have peripheral retinal vascular sheathing and non-perfusion (more easily seen on wide-field fluorescein angiography) but should not have posterior pole or mid-peripheral occlusive retinal vasculitis.`],
        [
            {
                "signs" : [`Snow ball / snow bank`,

                `Absence of systemic associations`, 
                
                `Peripheral retinal vascular sheathing`]
            }
        ],
        {
            "PP Intermediate uveitis" : "high",
            "NPP Intermediate uveitis" : "low"
        }
    ),
    'ddx_npp' : new Result(
        ["Intermediate Uveitis, Non-Pars Planitis Type"],
        [`Intermediate uveitis, non-pars planitis type is a uveitis disorder occurring as an intermediate uveitis without snowbanks or snowballs. It could also be considered an “undifferentiated intermediate uveitis.”
        <br><br>
        It is to some extent a diagnosis of exclusion. It must have the features of an intermediate uveitis, but not be pars planitis, multiple sclerosis–associated intermediate uveitis, sarcoidosis, syphilis, or Lyme disease.`],
        [
            {
                "signs" : [`Absence of snow ball / snowbank`,

                `Absence of systemic associations`]
            }
        ],
        {
            "NPP Intermediate uveitis" : "high",
            "PP Intermediate uveitis" : "low"
        }
    )
}

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
            { label: "Chorioretinitis", nextQuestion: "choroiditis-1" },
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
            "SC" : "low",
            "SO" : "low",
            "VKH-early" : "low",
            "VKH-late" : "low",
        }
    ),
    'rvasculitis': new Question(
        "Question",
        "Which clinical feature aligns with the patient's presentation?",
        [
            { label: `Vision threatening retinitis`, nextQuestion: "retinitis" },
            { label: `Occlusive retinal vasculitis WITH <br><br>${imaging_render('History','',['Exposure to individuals diagnosed with TB','Travelled to a TB-endemic region recently'])}`, nextQuestion: "ddx_tb_rvasculitis" },
            { label: `${other_feature_render('Retinal vasculitis and/or focal retinal infiltrates','Other findings include',['Oral aphthous ulcers','Genital ulcers',"Typical defined Behcet's disease skin lesions"])}`, nextQuestion: "ddx_behcet_rvasculitis" },
            { label: `Retinal vasculitis WITH <br><br>${imaging_render('Respiratory symptoms','',['Shortness of breath','Cough'])} ${imaging_render('Others','',['Skin lumps','Joint aches'])}`, nextQuestion: "ddx_sarcoid_rvasculitis" },
            { label: `None above`, nextQuestion: "ddx_un_rvasculitis" }
        ],
        "",
        {   
            "APMPPE" : "low",
            "BSCR" : "low",
            "MEWDS" : "low",
            "MFCPU" : "low",
            "PIC" : "low",
            "SC" : "low",
            "SO" : "low",
            "VKH-early" : "low",
            "VKH-late" : "low",
        }
    ),
    'choroiditis-1': new Question(
        "Question",
        "Is the lesion pauci-focal or multi-focal?",
        [
            { label: `Pauci-focal`, nextQuestion: "choroiditis-pauci" },
            { label: `Multi-focal`, nextQuestion: "choroiditis-multi" },
        ],
        "",
        {
            "ARN" : "low",
            "CMV retinitis" : "low",
            "Toxoplasmic retinitis" : "low",
            "Behcet Disease uveitis" : "low",
            "SO" : "low",
            "VKH-early" : "low",
            "VKH-late" : "low",
        }
    ),
    'choroiditis-pauci': new Question(
        "Question",
        "Which clinical feature aligns with the patient's presentation?",
        [
            { label: `${imaging_render('','Morphology',['Ameboid or serpentine shape'])} ${imaging_render('','Imaging',['FA<br>Early diffuse hypo-fluorescent lesion, late hyper-fluorescent lesion border','FAF<br>Hypo-autofluorescent lesion with hyper-autofluorescent border'])}`, nextQuestion: "check-tb-sc" },
            { label: `${imaging_render('','Morphology',['Plaque-like placoid appearance'])} ${imaging_render('','Imaging',['FA<br>Early hypo-fluorescent lesion and late diffuse hyper-fluorescent lesion<br>*During acute phase of the disease'])}`, nextQuestion: "ddx_apmppe" },
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
            
            { label: `None above`, nextQuestion: "ddx_un_choroiditis" }
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
            "SC" : "high",
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
        "Does the patient have bilateral panuveitis with a history of unilateral ocular trauma or surgery?",
        [
            { label: 'Yes (and not endophthalmitis)', nextQuestion: 'ddx_so'},
            { label: 'No', nextQuestion: 'panuveitis-2'}
        ],
        "",
        {
            "APMPPE" : "low",
            "BSCR" : "low",
            "MEWDS" : "low",
            "MFCPU" : "low",
            "PIC" : "low",
            "SC" : "low",
        }
    ),

    'panuveitis-2': new Question(
        "Question",
        "Which clinical feature aligns with the patient's presentation?",
        [
            { label: `${imaging_render('',`Evidence of Harada's disease`,['Exudative retinal detachment','FA - Multiple-loculated appearance','OCT - Septae'])} ${imaging_render('','Neurologic symptoms',['Headache','Tinnitus','Dysacusis','Meningism','CSF pleocytosis'])}`, nextQuestion: "ddx_vkh_early" },
            { label: `${imaging_render('','History of early stage VKH disease',['Sunset glow fundus'])} ${imaging_render('','Cutaneous findings',['Vitiligo','Poliosis','Alopecia'])}`, nextQuestion: "ddx_vkh_late" },
            { label: `Retinal vasculitis or choroidal nodule(s)`, nextQuestion: 'panuveitis-3'},
            { label: `None above`, nextQuestion: "ddx_un_panuveitis" }
        ],
        "",
        {
            "SO" : "low"
        }
    ),

    'panuveitis-3': new Question(
        "Question",
        "Which clinical feature aligns with the patient's presentation?",
        [
            { label: `Occlusive retinal vasculitis WITH <br><br>${imaging_render('History','',['Exposure to individuals diagnosed with TB','Travelled to a TB-endemic region recently'])}`, nextQuestion: "ddx_tb_panuveitis" },
            { label: `${other_feature_render('Retinal vasculitis and/or focal retinal infiltrates','Other findings include',['Oral aphthous ulcers','Genital ulcers',"Typical defined Behcet's disease skin lesions"])}`, nextQuestion: "ddx_behcet_panuveitis" },
            { label: `Retinal vasculitis WITH <br><br>${imaging_render('Respiratory symptoms','',['Shortness of breath','Cough'])} ${imaging_render('Others','',['Skin lumps','Joint aches'])}`, nextQuestion: "ddx_sarcoid_panuveitis" },
            { label: `None above`, nextQuestion: "ddx_un_panuveitis" }
        ],
        "",
        {
            
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
            
        }
    ),'ddx_toxo' : new Result(
        ["Toxoplasmic Retinitis"],
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
            
        }
    ),

    'ddx_tb_rvasculitis' : new Result(
        ["Tubercular Uveitis"],
        [`Tubercular Uveitis is ...`],
        [
            {
                "signs" : [`sign 1`, `sign 2`, `sign 3`]
            }
        ],
        {
            
        }
    ),
    'ddx_tb_panuveitis' : new Result(
        ["Tubercular Uveitis"],
        [`Tubercular Uveitis is ...`],
        [
            {
                "signs" : [`sign 1`, `sign 2`, `sign 3`]
            }
        ],
        {
            
        }
    ),

    'ddx_sarcoid_rvasculitis' : new Result(
        ["Sarcoid Uveitis"],
        [`Sarcoid Uveitis is ...`],
        [
            {
                "signs" : [`sign 1`, `sign 2`, `sign 3`]
            }
        ],
        {
            
        }
    ),
    'ddx_sarcoid_panuveitis' : new Result(
        ["Sarcoid Uveitis"],
        [`Sarcoid Uveitis is ...`],
        [
            {
                "signs" : [`sign 1`, `sign 2`, `sign 3`]
            }
        ],
        {
            
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
            
        }
    ),

    'ddx_mewds' : new Result(
        ["Multiple Evanescent White Dot Syndrome"],
        [`Multiple Evanescent White Dot Syndrome is ...`],
        [
            {
                "signs" : [`sign 1`, `sign 2`, `sign 3`]
            }
        ],
        {
            
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
            
        }
    ),

    'ddx_mfcpu' : new Result(
        ["Multifocal Choroiditis with Panuveitis"],
        [`Multifocal Choroiditis with Panuveitis is ...`],
        [
            {
                "signs" : [`Chronic, recurrent`,

                `Usually bilateral`,
                
                `Check SUN morphology and imaging criteria`]
            }
        ],
        {
            
        }
    ),

    'ddx_pic' : new Result(
        ["Punctate Inner Choroiditis"],
        [`Punctate Inner Choroiditis is ...`],
        [
            {
                "signs" : [`Typically unilateral`,

                    `Complications: CNV, Subretinal fibrosis`,
                    
                    `Absence of anterior or vitreous inflammation`,
                    
                    `Check SUN morphology and imaging criteria`]
            }
        ],
        {
            
        }
    ),

    'ddx_tb_mfcpu' : new Result(
        ["Tubercular Uveitis"],
        [`Tubercular Uveitis is ...`],
        [
            {
                "signs" : [`sign 1`, `sign 2`, `sign 3`]
            }
        ],
        {
            
        }
    ),

    'ddx_tb_sc' : new Result(
        ["Tubercular Uveitis"],
        [`Tubercular Uveitis is ...`],
        [
            {
                "signs" : [`sign 1`, `sign 2`, `sign 3`]
            }
        ],
        {
            
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
            
        }
    ),
    


    
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
    let text = '';
    text += text1;
    text += `${text2}`
    text += `<ul class='custom-list'>`
    textList.forEach(item => {
        text += `<li><i class='bi bi-check'></i><span>${item}</span></li>`
    })
    text += `</ul>`
    console.log(text)
    return text;
}
