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
        "Course",
        "What is the course of the uveitis?",
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
        "Laterality",
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
        "Laterality",
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
        "Laterality",
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
        "Laterality",
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
        "Keratic Precipitate",
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