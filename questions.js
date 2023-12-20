import { Question } from "./new-decision.js";

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
    )
};