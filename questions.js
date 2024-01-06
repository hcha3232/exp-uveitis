import { Question, Result } from "./new-decision.js";

export const dummyQuestions = {
    'intro': new Question(
        "<b>Warning!</b><br>The use of Uveitis Tree does NOT replace clinical judgement. By selecting YES I confirm that I am using Uveitis Tree with this understanding.",
        "Do you want to start?",
        [
            { label: "Yes", nextQuestion: "course_type" },
            { label: "No", nextQuestion: "intro" }
        ],
        "",
        {

        }
    ),
    'course_type': new Question(
        "Question",
        "What is the course of the uveitis?",
        [
            { label: "Acute, monophasic", nextQuestion: "laterality_m" },
            { label: "Acute, recurrent", nextQuestion: "laterality_r" },
            { label: "Chronic", nextQuestion: "laterality_c" }
        ],
        "course",
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
        "What type of keratic precipitates is seen in the uveitis?",
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
        "What type of keratic precipitates is seen in the uveitis?",
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
        "What type of keratic precipitates is seen in the uveitis?",
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
        "What type of keratic precipitates is seen in the uveitis?",
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
        "What type of keratic precipitates is seen in the uveitis?",
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
        "What type of keratic precipitates is seen in the uveitis?",
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
        "What type of keratic precipitates is seen in the uveitis?",
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
        "What type of keratic precipitates is seen in the uveitis?",
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
        "Does the patient have dendritic keratitis?",
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
        "Does the patient have concurrent or recent dermatomal Herpes Zoster?",
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
        "Which clinical feature is most similar to the patient’s presentation?",
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
        "Which clinical feature is most similar to the patient’s presentation?",
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
        "Does the patient have endotheliitis or nodular, coin-shaped endothelial lesion?",
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
        "Does the patient have heterochromia?",
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
        "Does the patient have an elevated IOP with no prior steroid treatment nor iris atrophy / transillumination?",
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
        "Does the patient have an elevated IOP with no prior steroid treatment nor iris atrophy / transillumination?",
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
        "Does the patient have a history of recent acute renal dysfunction that presents systemic symptoms \
        and lab findings consistent with abnormal urinalysis tests, reduced renal function, and/or elevated \
        urinary β-2 microglobulin?\
        <br><br>\
        Systemic symptoms include anorexia, fever, weight loss, fatigue, and polyuria.",
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
        "Does the patient have heterochromia?",
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
        "Which clinical feature is most similar to the patient’s presentation?",
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
        "Which clinical feature is most similar to the patient’s presentation?",
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
        *Refer to DUET algorithm to diagnose Spondyloarthritis/HLA-B27-associated Anterior Uveitis.`],
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
        *Refer to DUET algorithm to diagnose Spondyloarthritis/HLA-B27-associated Anterior Uveitis.`],
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
        *Refer to DUET algorithm to diagnose Spondyloarthritis/HLA-B27-associated Anterior Uveitis.`],
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