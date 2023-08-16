let answers = [
    //[asked_question, asked_answer]
];

let DDx = [];

const questionList = {
    course :
    {   
        description: ``,
        question: "What is the course of the uveitis?",
        options: [
            { label: "Acute, monophasic", nextQuestion: "laterality_m"},
            { label: "Acute, recurrent", nextQuestion: "laterality_r"},
            { label: "Chronic", nextQuestion: "laterality_c" }
        ],
        ddx : {
            most_likely: ``,
            possible: [`${disButtonModal('cmv')}`, `${disButtonModal('hsv')}`, `${disButtonModal('vzv')}`,
             `${disButtonModal('fus')}`, `${disButtonModal('hlab27')}`, `${disButtonModal('jia')}`,
             `${disButtonModal('tinu')}`, `${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`,
              `${disButtonModal('uau')}`],
            less_likely: ``
        },

        footer: `${buttonModal('Course','Course',database['course'],'course')}`
    },
    laterality_c : {
        description: ``,
        question: "What is the laterality of the uveitis?",
        options: [
            { label: "Unilateral", nextQuestion: "chronic_ul_kp"},
            { label: "Bilateral", nextQuestion: "chronic_bl_kp" },
            //history of alternating anterior uveitis will be asked same questions as recurrent alternating
            { label: "History of Alternating", nextQuestion: "acute_r_al_kp" }
        ]
    },
    chronic_bl_kp : {
        description: ``,
        question: "What are the types of keratic precipitates seen in the uveitis?",
        options: [
            { label: "Granulomatous", nextQuestion: "acute_m_bl_g_ddx"},
            //chronic granulomatous bilateral AU is just acute_m_bl_g_ddx
            { label: "Non-granulomatous", nextQuestion: "chronic_bl_ng_ddx" },
            { label: "Endothelial dusting", nextQuestion: "chronic_bl_ng_ddx" },
            { label: "None", nextQuestion: "chronic_bl_ng_ddx" }
        ],

        footer: 'Stellate KPs are hardly seen in Chronic bilateral anterior uveitis'
    },
    chronic_bl_ng_ddx : {
        description: `
        `,
        question: "Is the patient's age < 16 with insidious onset and mostly asymptomatic/minimally symptomatic history?",
        options: [
            { label: "Yes", nextQuestion: "is_it_jia"},
            { label: "No", nextQuestion: "chronic_bl_ng_not_jia"}
        ],
        ddx : {
            most_likely: ``,
            possible: [`${disButtonModal('jia')}`,`${disButtonModal('tinu')}`,`${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`, `${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('cmv')}`,`${disButtonModal('hsv')}`,`${disButtonModal('vzv')}`,`${disButtonModal('fus')}`,`${disButtonModal('hlab27')}`]
        }   
    },
    chronic_bl_ng_not_jia : {
        description: ``,
        question: "(under development) Does the patient have systemic symptoms? (anorexia, fever, weight loss, fatigue, and polyuria)",
        options: [
            //CCBAU => childrean chronic bilateral anterior uveitis
            { label: "Yes", nextQuestion: "TINU"},
            { label: "No", nextQuestion: "NOT_TINU_c"},
        ]
    },
    NOT_TINU_c:{
        description: `
        `,
        question: `
        `,
        options: [
        ],
        ddx: {
            most_likely: ``,
            possible: [`${disButtonModal('jia')}`,`${disButtonModal('tinu')}`,`${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`,`${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('cmv')}`,`${disButtonModal('hsv')}`,` ${disButtonModal('vzv')}`,
            `${disButtonModal('fus')}`,`${disButtonModal('hlab27')}`]
        }
    },
    chronic_ul_kp: {
        description: ``,
        question: "What are the types of keratic precipitates seen in the uveitis?",
        options: [
            { label: "Granulomatous", nextQuestion: "acute_m_ul_g_ddx"},
            //chronic granulomatous unilateral AU is viral algorithm
            { label: "Stellate", nextQuestion: "fus_algorithm"},
            { label: "Non-granulomatous", nextQuestion: "chronic_ul_ng_ddx" },
            { label: "Endothelial dusting", nextQuestion: "chronic_ul_ng_ddx" },
            { label: "None", nextQuestion: "chronic_ul_ng_ddx" }
            //non-granulomatous alternating is HLA_B27
        ]
    },
    fus_algorithm : {
        description: `
        `,
        question: `Does the patient have endotheliitis or nodular, coin-shaped endothelial lesions?`,
        options: [
            { label: "Yes", nextQuestion: "CMV"},
            { label: "No", nextQuestion: "FUS"}
        ],
        ddx: {
            most_likely: ``,
            possible: [`${disButtonModal('fus')}`,`${disButtonModal('cmv')}`,
            `${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`, `${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('hsv')}`,`${disButtonModal('vzv')}`,
            `${disButtonModal('hlab27')}`,`${disButtonModal('jia')}`, `${disButtonModal('tinu')}`]
        }
    },
    chronic_ul_ng_ddx : {
        description: `
        `,
        question: "Does the patient have heterochromia",
        options: [
            { label: "Yes", nextQuestion: "fus_algorithm"},
            { label: "No", nextQuestion: "chronic_ul_ng_clinical_picture"}
        ],
        ddx : {
            most_likely: ``,
            possible: [`${disButtonModal('cmv')}`, `${disButtonModal('hsv')}`,`${disButtonModal('vzv')}`, `${disButtonModal('fus')}`,
            `${disButtonModal('hlab27')}`, `${disButtonModal('jia')}`,`${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`, `${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('tinu')}`]
        }
    },
    chronic_ul_ng_clinical_picture :{
        description: `
        `,
        question: "Which clinical feature is most similar to the patient's presentation",
        options: [
            { label: "History of symptomatic attacks", nextQuestion: "acute_m_ul_ng_ddx"},
            //asking if it is viau or hlab27
            { label: "Age < 16 with insidious onset and mostly asymptomatic/minimally symptomatic history", nextQuestion: "is_it_jia"}
        ],
        ddx : {
            most_likely: ``,
            possible: [`${disButtonModal('cmv')}`, `${disButtonModal('hsv')}`,`${disButtonModal('vzv')}`, 
            `${disButtonModal('hlab27')}`, `${disButtonModal('jia')}`,`${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`, `${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('fus')}`, `${disButtonModal('tinu')}`]
        }
    },
    is_it_jia: {
        description: `
        `,
        question: "Does the patient have diagnosed juvenile idiopathic arthritis?",
        options: [
            { label: "Yes", nextQuestion: "JIA"},
            { label: "No", nextQuestion: "NOT_DIAGNOSED_JIA"}
        ],
        ddx : {
            most_likely: [`${disButtonModal('jia')}`],
            possible: [`${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}` ,`${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('cmv')}`,`${disButtonModal('hsv')}`,`${disButtonModal('vzv')}`, `${disButtonModal('fus')}`,`${disButtonModal('hlab27')}`,`${disButtonModal('tinu')}`]
        }
    },
    JIA :
    {
        description: `
        <div class="alert alert-primary" role="alert">
            Most likely diagnosis is <b>Juvenile idiopathic arthritis-associated chronic anterior uveitis</b>. 
        </div>`,
        question: `
        `,
        options: [
        ],
        ddx : {
            most_likely: [`${disButtonModal('jia')}`],
            possible: [`${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}` ,`${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('cmv')}`,`${disButtonModal('hsv')}`,`${disButtonModal('vzv')}`,`${disButtonModal('fus')}`,`${disButtonModal('hlab27')}`,`${disButtonModal('tinu')}`]
        }
    },
    NOT_DIAGNOSED_JIA : {
        description: `
        <div class="alert alert-primary" role="alert">
            Most likely diagnosis is <b>Juvenile idiopathic arthritis-associated chronic anterior uveitis</b>. Consult with the paediatrician.
        </div>
        `,
        question: `
        `,
        options: [
        ],
        ddx: {
            most_likely: [`${disButtonModal('jia')}`],
            possible: [`${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}` ,`${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('cmv')}`,`${disButtonModal('hsv')}`, `${disButtonModal('vzv')}`,
            `${disButtonModal('fus')}`,`${disButtonModal('hlab27')}`, `${disButtonModal('tinu')}`]
        }
    },
    laterality_m :
    {
        description: ``,
        question: "What is the laterality of the uveitis?",
        options: [
            { label: "Unilateral", nextQuestion: "acute_m_ul_kp"},
            { label: "Bilateral", nextQuestion: "acute_m_bl_kp" }
        ]
    },
    laterality_r : {
        description: ``,
        question: "What is the laterality of the uveitis?",
        options: [
            { label: "Unilateral", nextQuestion: "acute_m_ul_kp"},
            { label: "Bilateral", nextQuestion: "acute_m_bl_kp" },
            //recurrent anterior uveitis will be asked with same questions as acute monophasic unilateral and bilateral
            { label: "Alternating", nextQuestion: "acute_r_al_kp" }
        ]
    },
    acute_r_al_kp:{
        description: ``,
        question: "What are the types of keratic precipitates seen in the uveitis?",
        options: [
            { label: "Granulomatous", nextQuestion: "acute_r_al_g_ddx"},
            { label: "Non-granulomatous", nextQuestion: "HLA_B27" },
            { label: "Endothelial dusting", nextQuestion: "HLA_B27" },
            { label: "None", nextQuestion: "HLA_B27" }
            //non-granulomatous alternating is HLA_B27
        ],

        footer: 'Stellate KPs are hardly seen in Acute, recurrent alternating anterior uveitis'
    },
    acute_r_al_g_ddx :{
        description: `
        <div class="alert alert-primary" role="alert">
            Rule out <b>Syphilis-associated anterior uveitis</b> and <b>Sarcoidosis-associated anterior uveitis</b>. 
            If both are not the case, most likely diagnosis is <b>Undifferentiated anterior uveitis</b>
        </div>
            `,
        question: "",
        options: [
        ],
        ddx: {
            most_likely: ``,
            possible: [`${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`, `${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('cmv')}`,`${disButtonModal('hsv')}`, `${disButtonModal('vzv')}`,
            `${disButtonModal('fus')}`,`${disButtonModal('hlab27')}`, `${disButtonModal('jia')}`,`${disButtonModal('tinu')}`]
        }
    },
    acute_m_ul_kp : {
        description: ``,
        question: "What are the types of keratic precipitates seen in the uveitis?",
        options: [
            { label: "Granulomatous", nextQuestion: "acute_m_ul_g_ddx"},
            { label: "Non-granulomatous", nextQuestion: "acute_m_ul_ng_ddx" },
            { label: "Endothelial dusting", nextQuestion: "acute_m_ul_ng_ddx" },
            { label: "None", nextQuestion: "acute_m_ul_ng_ddx" }
        ],

        footer: 'Stellate KPs are hardly seen in Acute, monophasic unilateral anterior uveitis'
    },
    acute_m_ul_g_ddx :
    {
        description: `
        `,
        question: `Does the patient have dendritic keratitis?`,
        options: [
            { label: "Yes", nextQuestion: "HSV"},
            { label: "No", nextQuestion: "viau_q2"}
        ],
        ddx: {
            most_likely: ``,
            possible: [`${disButtonModal('cmv')}`, `${disButtonModal('hsv')}`,`${disButtonModal('vzv')}`, 
            `${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`, `${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('fus')}`,`${disButtonModal('hlab27')}`, 
            `${disButtonModal('jia')}`,`${disButtonModal('tinu')}`]
        }
    },  
    HSV : {
        description: `
        <div class="alert alert-primary" role="alert">
            Most likely diagnosis is <b>Herpes Simplex Virus Anterior Uveitis<b>
        </div>
        `,
        question: ``,
        options: [],
        ddx: {
            most_likely: [`${disButtonModal('hsv')}`],
            possible: [`${disButtonModal('cmv')}`,`${disButtonModal('vzv')}`, 
            `${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`, `${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('fus')}`,`${disButtonModal('hlab27')}`, 
            `${disButtonModal('jia')}`,`${disButtonModal('tinu')}`]    
        }
    },
    viau_q2 : {
        description: ``,
        question: `Does the patient have concurrent or recent dermatomal Herpes Zoster?`,
        options: [
            { label: "Yes", nextQuestion: "VZV"},
            { label: "No", nextQuestion: "viau_q3"}
        ]
    },
    VZV : {
        description: `
        <div class="alert alert-primary" role="alert">
            Most likely diagnosis is <b>Varicella Zoster Virus Anterior Uveitis<b>
        </div>
        `,
        question: ``,
        options: [],
        ddx: {
            most_likely: [`${disButtonModal('vzv')}`],
            possible: [`${disButtonModal('cmv')}`,`${disButtonModal('hsv')}`, 
            `${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}` ,`${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('fus')}`,`${disButtonModal('hlab27')}`, 
            `${disButtonModal('jia')}`,`${disButtonModal('tinu')}`]    
        }
    },
    viau_q3 : {
        description: ``,
        question: `Which clinical feature is most similar to the patient's presentation`,
        options: [
            { label: "Granulomatous cluster of small and medium-sized KPs in Arlt's triangle [with or without corneal scars]", nextQuestion: "hsv_or_vzv"},
            { label: "PSS with few medium-sized KPs, minimal anterior chamber cells and extremely high IOP", nextQuestion: "pss_like_cmv"},
            { label: "None above", nextQuestion: "NO_VIRAL_PICTURE"}
        ]
    },
    NO_VIRAL_PICTURE : {
        description: `
        <div class="alert alert-primary" role="alert">
            Uveitis is likely to be viral-induced. Rule out <b>Herpes Simplex Virus Anterior Uveitis</b>, <b>Varicella Zoster Virus Anterior Uveitis</b>, 
            and <b>Cytomegalovirus Anterior Uveitis</b>. Then, rule out <b>Syphilis-associated anterior uveitis</b> and <b>Sarcoidosis-associated anterior uveitis</b>. 
            If all uveitis are not the case, most likely diagnosis is <b>Undifferentiated anterior uveitis</b>.
        </div>
        `,
        question: ``,
        options: [],
        ddx: {
            most_likely: ``,
            possible: [`${disButtonModal('cmv')}`,`${disButtonModal('hsv')}`, `${disButtonModal('vzv')}`, 
            `${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`,`${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('fus')}`,`${disButtonModal('hlab27')}`, 
            `${disButtonModal('jia')}`,`${disButtonModal('tinu')}`]    
        }
    },
    hsv_or_vzv : {
        description: `
        `,
        question: `Which clinical feature is most similar to the patient's presentation`,
        options: [
            { label: "Sectoral iris atrophy in a patient < 50 years of age", nextQuestion: "HSV"},
            { label: "Sectoral iris atrophy in a patient > 60 years of age", nextQuestion: "VZV"},
            { label: "None", nextQuestion: "NO_VIRAL_PICTURE"}
        ],
    },
    pss_like_cmv : {
        description: `
        <div class="alert alert-primary" role="alert">
            To diagnose Cytomegalovirus anterior uveitis, a positive PCR should be obtained
        </div>`,
        question: ``,
        options: [
        ],
        ddx: {
            most_likely: [`${disButtonModal('cmv')}`],
            possible: [`${disButtonModal('hsv')}`,`${disButtonModal('vzv')}`, 
            `${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`, `${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('fus')}`,`${disButtonModal('hlab27')}`, 
            `${disButtonModal('jia')}`,`${disButtonModal('tinu')}`]    
        }
    },
    CMV : {
        description: `
        <div class="alert alert-primary" role="alert">
            To diagnose Cytomegalovirus anterior uveitis, a positive PCR should be obtained
        </div>`,
        question: ``,
        options: [
        ],
        ddx: {
            most_likely: [`${disButtonModal('cmv')}`],
            possible: [`${disButtonModal('fus')}`,
            `${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`, `${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('hsv')}`,`${disButtonModal('vzv')}`,`${disButtonModal('hlab27')}`, 
            `${disButtonModal('jia')}`,`${disButtonModal('tinu')}`]
        }
    },
    FUS: {
        description: `
        <div class="alert alert-primary" role="alert">
            Most likely diagnosis is <b>Fuchs Uveitis Syndrome</b>.
        </div>
        `,
        question: ``,
        options: [],
        ddx: {
            most_likely: [`${disButtonModal('fus')}`],
            possible: [`${disButtonModal('cmv')}`,
            `${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`, `${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('hsv')}`,`${disButtonModal('vzv')}`,`${disButtonModal('hlab27')}`, 
            `${disButtonModal('jia')}`,`${disButtonModal('tinu')}`]
        }
    },
    acute_m_ul_ng_ddx: {
        description: `
        `,
        question: `Does the patient have elevated IOP in the absence of prior steroid treatment or iris atrophy/transillumination?`,
        options: [
            { label: "Yes", nextQuestion: "acute_m_ul_g_ddx"},
            //going to acute_m_ul_g because it ask whether the user wants to do VIAU algorithm
            { label: "No", nextQuestion: "HLA_B27" }
        ],
        ddx: {
            most_likely: ``,
            possible: [`${disButtonModal('cmv')}`,`${disButtonModal('hsv')}`,`${disButtonModal('vzv')}`,`${disButtonModal('hlab27')}`
            ,`${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`, `${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('fus')}`,`${disButtonModal('jia')}`,`${disButtonModal('tinu')}`]
        }
    },
    HLA_B27 :
    {
        description: `
        <div class="alert alert-primary" role="alert">
        <span style='font-weight:400'>Most likely diagnosis is <b>HLA-B27 Spondyloarthropathies-associated Anterior Uveitis</b>. We recommend following the DUET algorithm</span>
        </div>  
        <br>
        <img src="/img/duet.png" class="img-fluid"></img>`,
        question: ``,
        options: [
        ],
        ddx: {
            most_likely: [`${disButtonModal('hlab27')}`],
            possible: [`${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`, `${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('cmv')}`,`${disButtonModal('hsv')}`,`${disButtonModal('vzv')}`,`${disButtonModal('fus')}`,`${disButtonModal('jia')}`,`${disButtonModal('tinu')}`]
        }
    },
    acute_m_bl_kp: {
        description: ``,
        question: "What are the types of keratic precipitates seen in the uveitis?",
        options: [
            { label: "Granulomatous", nextQuestion: "acute_m_bl_g_ddx"},
            { label: "Non-granulomatous", nextQuestion: "acute_m_bl_ng_ddx" },
            { label: "Endothelial dusting", nextQuestion: "acute_m_bl_ng_ddx" },
            { label: "None", nextQuestion: "acute_m_bl_ng_ddx" }
        ],

        footer: 'Stellate KPs are hardly seen in Acute, monophasic bilateral anterior uveitis'
    },
    acute_m_bl_g_ddx :{
        description: `
        <div class="alert alert-primary" role="alert">
            Rule out <b>Syphilis-associated anterior uveitis</b> and <b>Sarcoidosis-associated anterior uveitis</b>. 
            If both are not the case, most likely diagnosis is <b>Undifferentiated anterior uveitis</b>
        </div>
        `,
        question: "",
        options: [
        ],
        ddx: {
            most_likely: ``,
            possible: [`${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`, `${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('cmv')}`,`${disButtonModal('hsv')}`, `${disButtonModal('vzv')}`,
            `${disButtonModal('fus')}`,`${disButtonModal('hlab27')}`, `${disButtonModal('jia')}`,`${disButtonModal('tinu')}`]
        }
    },
    acute_m_bl_ng_ddx : {
        description: `
        `,
        question: "(under development) Does the patient have systemic symptoms? (anorexia, fever, weight loss, fatigue, and polyuria)",
        options: [
            { label: "Yes", nextQuestion: "TINU"},
            { label: "No", nextQuestion: "NOT_TINU_a" }
        ],
        ddx: {
            most_likely: ``,
            possible: [`${disButtonModal('tinu')}`,`${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`,`${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('cmv')}`,`${disButtonModal('hsv')}`, `${disButtonModal('vzv')}`,
            `${disButtonModal('fus')}`,`${disButtonModal('hlab27')}`, `${disButtonModal('jia')}`]
        }
    },
    TINU : {
        description: `
        <div class="alert alert-primary" role="alert">
            Most likely diagnosis is <b>Tubulointerstitial Nephritis with Uveitis</b>. Consult with the nephrologist
        </div>
        `,
        question: `
        `,
        options: [
        ],
        ddx: {
            most_likely: [`${disButtonModal('tinu')}`],
            possible: [`${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`, `${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('cmv')}`,`${disButtonModal('hsv')}`, `${disButtonModal('vzv')}`,
            `${disButtonModal('fus')}`,`${disButtonModal('hlab27')}`, `${disButtonModal('jia')}`]
        }
    },
    NOT_TINU_a : {
        description: `
        <div class="alert alert-primary" role="alert">
            Rule out <b>Syphilis-associated anterior uveitis</b> and <b>Sarcoidosis-associated anterior uveitis</b>. 
            If both are not the case, most likely diagnosis is <b>Undifferentiated anterior uveitis</b>.
        </div>
        `,
        question: `
        `,
        options: [
        ],
        ddx: {
            most_likely: ``,
            possible: [`${disButtonModal('tinu')}`,`${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`,`${disButtonModal('uau')}`],
            less_likely: [`${disButtonModal('cmv')}`,`${disButtonModal('hsv')}`, `${disButtonModal('vzv')}`,
            `${disButtonModal('fus')}`,`${disButtonModal('hlab27')}`, `${disButtonModal('jia')}`]
        }
    },
    In_progress :
    {
        description: ``,
        question: "In progress",
        options: [
        ]
    },
    finish :
    {
        description: ``,
        question: "Thank you",
        options: [
        ]
    }
}

function questionBoxes(currentQuestion,back){
    if(answers.length!=0 && back==true){
        answers.pop();
        pastquestions();      
    }
    if(answers.length!=0 && back==false){
        pastquestions();
    }


    let box = document.createElement('div');
    box.id= `box-${currentQuestion}`
    box.classList = "shadow-sm p-3 mb-3 bg-body rounded"
    box.style = "background-color: #ffffff;"
    let questionBox = document.createElement('div'); 
    questionBox.id = `question-${currentQuestion}`;
    let optionsBox = document.createElement('div');
    optionsBox.id = `options-${currentQuestion}`;
    
    let descriptionBox = document.createElement('div');
    descriptionBox.id = `description-${currentQuestion}`
    descriptionBox.classList = "lh-lg"
    descriptionBox.innerHTML = questionList[currentQuestion].description;

    questionBox.innerHTML = `<h6>${questionList[currentQuestion].question}</h6>`;

    //options
    for (let i = 0; i < questionList[currentQuestion].options.length; i++){
        let div = document.createElement('div');
        div.class = "form-check";
        div.innerHTML = `
        <div class="form-check">
            <input class="form-check-input  border-primary" type="radio" name="flexRadioDefault" id="flexRadioDefault${currentQuestion}${i}" value="${questionList[currentQuestion].options[i].label}">
            <label class="form-check-label" for="flexRadioDefault${currentQuestion}${i}">
                ${questionList[currentQuestion].options[i].label}
            </label>
        </div>`;
        optionsBox.appendChild(div)
    }

    //append question and options
    box.appendChild(descriptionBox);
    box.appendChild(questionBox);
    box.appendChild(optionsBox);

    if (questionList[currentQuestion].hasOwnProperty('footer')) {
        let footerBox = document.createElement('div');
        footerBox.classList = "container-gap"
        footerBox.id = `footer-${currentQuestion}`
        footerBox.innerHTML = '<br><br><span style="font-weight: 500">Note: </span>'
        footerBox.innerHTML += questionList[currentQuestion].footer;
        box.appendChild(footerBox);
    }
    else{
        let footerBox = document.createElement('div');
        footerBox.classList = "container-gap"
        footerBox.innerHTML = '<br><br>'
        box.appendChild(footerBox);
    }

    //Create button Back and Next [Finish if no option left]
    if(questionList[currentQuestion].options.length==0){
        box.innerHTML += `
        <div class="back-next" style="">
            <button type='button' class='btn btn-outline-primary btn-back shadow-sm' id='back-${currentQuestion}'>
                Back
            </button>
            <button type='button' class='btn btn-outline-primary btn-next shadow-sm' id='submit-${currentQuestion}'>
                Finish
            </button>
        </div>
        <div id='message-${currentQuestion}' style="color:red;"></div>
        `;
    }
    else {
        box.innerHTML += `
        <div class="back-next" style="">
            <button type='button' class='btn btn-outline-primary btn-back shadow-sm' id='back-${currentQuestion}'>
                Back
            </button>
            <button type='button' class='btn btn-outline-primary btn-next shadow-sm' id='submit-${currentQuestion}'>
                Next
            </button>
        </div>
        <div id='message-${currentQuestion}' style="color:red;"></div>
        `;
    }

    //append everything into container
    document.getElementById("container").appendChild(box);

    //create differenial container
    let differentials = document.getElementById("differentials")
    differentials.innerHTML = "";
    if(questionList[currentQuestion].hasOwnProperty('ddx')){
        let ddxBox = document.createElement('div');
        ddxBox.classList = "shadow-sm p-3 mb-3 bg-body rounded"
        ddxBox.style = "background-color: #ffffff;"
        let mostlikely = listify(questionList[currentQuestion].ddx.most_likely)
        let possible = listify(questionList[currentQuestion].ddx.possible)
        let lesslikely = listify(questionList[currentQuestion].ddx.less_likely)
        ddxBox.innerHTML = `<span style="font-weight: 500">Differential Diagnosis </span><br>`
        ddxBox.innerHTML += '<span style="color:grey; font-size: 0.8rem;">Most likely diagnosis</span><br>'
        ddxBox.innerHTML += mostlikely
        ddxBox.innerHTML += '<span style="color:grey; font-size: 0.8rem;">Possible diagnosis</span><br>'
        ddxBox.innerHTML += possible
        ddxBox.innerHTML += '<span style="color:grey; font-size: 0.8rem;">Less likely diagnosis</span><br>'
        ddxBox.innerHTML += lesslikely
        differentials.appendChild(ddxBox)
    }

    

    //eventlistener to button
    let submitBtn = document.getElementById(`submit-${currentQuestion}`);
    submitBtn.addEventListener("click",function(){
        let selected = document.querySelector('input[name="flexRadioDefault"]:checked');


        
        //if the question reaches last => go to index, if the question has no answer, ask for a click
        if (selected === null && questionList[currentQuestion].options.length!=0) {
            document.getElementById(`message-${currentQuestion}`).innerHTML = "please select an option";
            setTimeout(function() {
                document.getElementById(`message-${currentQuestion}`).innerHTML = '';
            }, 1500);
            return;
        }
        if (selected === null && questionList[currentQuestion].options.length==0){
            window.location.href = '/'
            return;
        }
        //if the question is clicked propertly, next question is retrieved
        let selectedOption = selected.value;
        let nextQuestion = questionList[currentQuestion].options.find(option => option.label === selectedOption).nextQuestion;
        
        //Debugging
        console.log("Selected option: " + selectedOption);
        console.log("Next question: " + nextQuestion);

        //once submited, the original question is deleted
        //this is accessed by list of past answers being pushed in "answers"
        answers.push([currentQuestion,questionList[currentQuestion].question,selectedOption]);
        
        //Old question being deleted and getting new question box
        document.getElementById("container").innerHTML = "";
        questionBoxes(nextQuestion, back=false);
    })

    let backBtn = document.getElementById(`back-${currentQuestion}`);
    backBtn.addEventListener("click",function(){
        //check if first question 
        if(answers.length == 0){
            document.getElementById(`message-${currentQuestion}`).innerHTML = "There is no previous question";
            setTimeout(function() {
                document.getElementById(`message-${currentQuestion}`).innerHTML = '';
            }, 1500);
            return;
        }
        
        document.getElementById("container").innerHTML = "";
        questionBoxes(answers[answers.length-1][0], back=true)
    })
}

/////////////////////////////////////// START OF THE QUESTION ////////////////////
questionBoxes("course");
///////////////////////////////////////////////////////////////////////////////////

function pastquestions(){
    //retrieve entire pastquestions and display
    let pq = ``;
    for(let i = 0; i < answers.length; i++){
        pq += `<div>${answers[i][1]} <br>&nbsp&nbsp<i>${answers[i][2]}</i></div>`
    }
    let exp = document.getElementById("exp-container");
    exp.innerHTML = pq;
}


function buttonModal(btnName,headerName,disName_database,disId){
    let btnModalHTML = 
    `
    <button type="button" class="text-nowrap btn btn-link" data-bs-toggle="modal" data-bs-target="#${disId}"
        style="--bs-btn-padding-y: 0rem; --bs-btn-padding-x: 0rem; --bs-btn-font-size: .75rem;">
            ${btnName}
    </button>

    <div class="modal" id="${disId}" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">${headerName}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ${disName_database}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    `
    return btnModalHTML;
}


    

function disButtonModal(dis){
    if(dis==='cmv'){
        return buttonModal('CMV AU','Cytomegalovirus Anterior Uveitis',database['cmv'],'cmv')
    }
    if(dis==='hsv'){
        return buttonModal('HSV AU','Herpes Simplex Virus Anterior Uveitis',database['hsv'],'hsv')
    }
    if(dis==='vzv'){
        return buttonModal('VZV AU','Varicella Zoster Virus Anterior Uveitis',database['vzv'],'vzv')
    }
    if(dis==='fus'){
        return buttonModal('FUS','Fuchs Uveitis Syndrome',database['fus'],'fus')
    }
    if(dis==='hlab27'){
        return buttonModal('HLA-B27 SpA AU','HLA-B27 Spondyloarthritis Anterior Uveitis',database['hlab27'],'hlab27')
    }
    if(dis==='jia'){
        return buttonModal('JIA AU','Juvenile Idiopathic Arthritis Anterior Uveitis',database['jia'],'jia')
    }
    if(dis==='tinu'){
        return buttonModal('TINU','Tubulointerstitial Nephritis with Uveitis',database['tinu'],'tinu')
    }
    if(dis==='sarcoidosis'){
        return buttonModal('Sarcoid AU','Sarcoid Uveitis',database['sarcoidosis'],'sarcoidosis')
    }
    if(dis==='syphilis'){
        return buttonModal('Syphilitic AU','Syphilitic Uveitis',database['syphilis'],'syphilis')
    }
    if(dis==='uau'){
        return buttonModal('Undifferentiated AU','Undifferentiated anterior uveitis',database['uau'],'uau')
    }
}

function listify(arr){
    let x = ""
    if(arr.length===0 || arr===``){
        x += "<div style='font-size:12px;'>N/A</div>"
        return x;
    }
    else {
        for (let i = 0; i < arr.length; i++){
            x += "<div>"
            x += arr[i]
            x += "<i class='bi bi-tag' style='font-size: 12px; color:#7d99c7; '></i></div>"
        }
        return x;
    }
}

