let answers = [
    //[asked_question, asked_answer]
];

let DDx = [];

const questionList = {
    snow_ball_bank :
    {   
        description: ``,
        question: "Are there snowballs or snowbanks?",
        options: [
            { label: "Yes", nextQuestion: "yes_snow"},
            { label: "No", nextQuestion: "no_snow"},
        ],
        ddx : {
            most_likely: ``,
            possible: [`${disButtonModal('ms')}`, `${disButtonModal('pp')}`, `${disButtonModal('npp')}`,
             `${disButtonModal('syphilis')}`, `${disButtonModal('sarcoidosis')}`, `${disButtonModal('lyme')}`,
             `${disButtonModal('iol')}`],
            less_likely: ``
        }
    },
    yes_snow : {
        description: `To rule out multiple sclerosis`,
        question: "Any weakness, numbness or tingling in any part of your body or any other neurological symptoms?",
        options: [
            { label: "Yes", nextQuestion: "yes_snow_ms"},
            { label: "No", nextQuestion: "yes_snow_no_ms" },
        ],
        ddx : {
            most_likely: ``,
            possible: [`${disButtonModal('ms')}`,`${disButtonModal('pp')}`,`${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`, `${disButtonModal('lyme')}`],
            less_likely: [`${disButtonModal('npp')}`,`${disButtonModal('iol')}`]
        }
    },
    yes_snow_ms : {
        description: `Consult with the neurologist`,
        question: "",
        options: [
        ],
        ddx : {
            most_likely: [`${disButtonModal('ms')}`],
            possible: [`${disButtonModal('pp')}`,`${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`, `${disButtonModal('lyme')}`],
            less_likely:[`${disButtonModal('npp')}`,`${disButtonModal('iol')}`]
        }   
    },
    yes_snow_no_ms : {
        description: `To rule out sarcoidosis
        `,
        question: "Does the patient cough? Any shortness of breath? Any aches in joints or lumps in the skin?",
        options: [
            { label: "Yes", nextQuestion: "yes_snow_sarcoidosis"},
            { label: "No", nextQuestion: "yes_snow_no_sarcoidosis"}
        ],
    },
    yes_snow_sarcoidosis : {
        description: `Serum ACE and calcium, CXR`,
        question: "",
        options: [
        ],
        ddx : {
            most_likely: [`${disButtonModal('sarcoidosis')}`],
            possible: [`${disButtonModal('pp')}`,`${disButtonModal('syphilis')}`,`${disButtonModal('ms')}`, `${disButtonModal('lyme')}`],
            less_likely:[`${disButtonModal('npp')}`,`${disButtonModal('iol')}`]
        }  
    },
    yes_snow_no_sarcoidosis:{
        description: `To rule out syphilis
        `,
        question: `(under development) Syphilis question
        `,
        options: [
            { label: "Yes", nextQuestion: "yes_snow_syphilis"},
            { label: "No", nextQuestion: "yes_snow_no_syphilis"}
        ]
    },
    yes_snow_syphilis : {
        description: `Trepnemal serology`,
        question: "",
        options: [
        ],
        ddx : {
            most_likely: [`${disButtonModal('syphilis')}`],
            possible: [`${disButtonModal('pp')}`,`${disButtonModal('sarcoidosis')}`,`${disButtonModal('ms')}`, `${disButtonModal('lyme')}`],
            less_likely:[`${disButtonModal('npp')}`,`${disButtonModal('iol')}`]
        }  
    },
    yes_snow_no_syphilis: {
        description: `To rule out lyme disease`,
        question: "(under development) Recent travel history (lyme endemic?), walking/hiking/camping in the forest? Near large animals such as horses or deer?",
        options: [
            { label: "Yes", nextQuestion: "yes_snow_lyme"},
            { label: "No", nextQuestion: "yes_snow_no_lyme"}
        ]
    },
    yes_snow_lyme : {
        description: `Consult with infectious disease specialist`,
        question: "",
        options: [
        ],
        ddx : {
            most_likely: [`${disButtonModal('lyme')}`],
            possible: [`${disButtonModal('pp')}`,`${disButtonModal('sarcoidosis')}`,`${disButtonModal('ms')}`, `${disButtonModal('syphilis')}`],
            less_likely:[`${disButtonModal('npp')}`,`${disButtonModal('iol')}`]
        }  
    },
    yes_snow_no_lyme : {
        description: `Suspected diagnosis is <b>Pars Planities<b>`,
        question: "",
        options: [
        ],
        ddx : {
            most_likely: [`${disButtonModal('pp')}`],
            possible: [`${disButtonModal('sarcoidosis')}`,`${disButtonModal('ms')}`, `${disButtonModal('syphilis')}`,`${disButtonModal('lyme')}`],
            less_likely:[`${disButtonModal('npp')}`,`${disButtonModal('iol')}`]
        }  
    },
    no_snow : {
        description: `Multiple sclerosis-associated intermediate uveitis is more likely to have snowballs/snowbanks. Still, we want to rule out it as the cause.`,
        question: "Any weakness, numbness or tingling in any part of your body or any other neurological symptoms?",
        options: [
            { label: "Yes", nextQuestion: "no_snow_ms"},
            { label: "No", nextQuestion: "no_snow_no_ms" },
        ],
        ddx : {
            most_likely: ``,
            possible: [`${disButtonModal('ms')}`,`${disButtonModal('npp')}`,`${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`, `${disButtonModal('lyme')}`,`${disButtonModal('iol')}`],
            less_likely: [`${disButtonModal('pp')}`]
        }
    },
    no_snow_ms : {
        description: `Consult with the neurologist`,
        question: "",
        options: [
        ],
        ddx : {
            most_likely: [`${disButtonModal('ms')}`],
            possible: [`${disButtonModal('npp')}`,`${disButtonModal('syphilis')}`,`${disButtonModal('sarcoidosis')}`, `${disButtonModal('lyme')}`,`${disButtonModal('iol')}`],
            less_likely:[`${disButtonModal('pp')}`]
        }   
    },
    no_snow_no_ms : {
        description: `Sarcoidosis-associated intermediate uveitis is more likely to have snowballs/snowbanks. Still, we want to rule out it as the cause.
        `,
        question: "Does the patient cough? Any shortness of breath? Any aches in joints or lumps in the skin?",
        options: [
            { label: "Yes", nextQuestion: "no_snow_sarcoidosis"},
            { label: "No", nextQuestion: "no_snow_no_sarcoidosis"}
        ],
    },
    no_snow_sarcoidosis : {
        description: `Serum ACE and calcium, CXR`,
        question: "",
        options: [
        ],
        ddx : {
            most_likely: [`${disButtonModal('sarcoidosis')}`],
            possible: [`${disButtonModal('npp')}`,`${disButtonModal('syphilis')}`,`${disButtonModal('ms')}`, `${disButtonModal('lyme')}`,`${disButtonModal('iol')}`],
            less_likely:[`${disButtonModal('pp')}`]
        }  
    },
    no_snow_no_sarcoidosis:{
        description: `To rule out syphilis
        `,
        question: `(under development) Syphilis question
        `,
        options: [
            { label: "Yes", nextQuestion: "no_snow_syphilis"},
            { label: "No", nextQuestion: "no_snow_no_syphilis"}
        ]
    },
    no_snow_syphilis : {
        description: `Trepnemal serology`,
        question: "",
        options: [
        ],
        ddx : {
            most_likely: [`${disButtonModal('syphilis')}`],
            possible: [`${disButtonModal('npp')}`,`${disButtonModal('sarcoidosis')}`,`${disButtonModal('ms')}`, `${disButtonModal('lyme')}`,`${disButtonModal('iol')}`],
            less_likely:[`${disButtonModal('pp')}`]
        }  
    },
    no_snow_no_syphilis: {
        description: `To rule out lyme disease`,
        question: "(under development) Recent travel history (lyme endemic?), walking/hiking/camping in the forest? Near large animals such as horses or deer?",
        options: [
            { label: "Yes", nextQuestion: "no_snow_lyme"},
            { label: "No", nextQuestion: "no_snow_no_lyme"}
        ]
    },
    no_snow_lyme : {
        description: `Consult with infectious disease specialist`,
        question: "",
        options: [
        ],
        most_likely: [`${disButtonModal('lyme')}`],
            possible: [`${disButtonModal('npp')}`,`${disButtonModal('syphilis')}`,`${disButtonModal('ms')}`, `${disButtonModal('sarcoidosis')}`,`${disButtonModal('iol')}`],
            less_likely:[`${disButtonModal('pp')}`]
    },
    no_snow_no_lyme : {
        description: `To rule out intraocular lymphoma - masquerade syndrome`,
        question: "(under development) Does the patient have intraocular lymphoma?",
        options: [
        ],
        options: [
            { label: "Yes", nextQuestion: "no_snow_iol"},
            { label: "No", nextQuestion: "no_snow_no_iol"}
        ] 
    },
    no_snow_iol : {
        description: `Consult with ocular oncologist`,
        question: "",
        options: [
        ],
        most_likely: [`${disButtonModal('iol')}`],
            possible: [`${disButtonModal('npp')}`,`${disButtonModal('syphilis')}`,`${disButtonModal('ms')}`, `${disButtonModal('lyme')}`,`${disButtonModal('sarcoidosis')}`],
            less_likely:[`${disButtonModal('pp')}`]
    },
    no_snow_no_iol : {
        description: `Suspected diagnosis is <b>Non-Pars Planitis</b>`,
        question: "",
        options: [
        ],
        most_likely: [`${disButtonModal('npp')}`],
            possible: [`${disButtonModal('sarcoidosis')}`,`${disButtonModal('syphilis')}`,`${disButtonModal('ms')}`, `${disButtonModal('lyme')}`,`${disButtonModal('iol')}`],
            less_likely:[`${disButtonModal('pp')}`]
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
        ddxBox.innerHTML = `<span style="font-weight: 500">Differentials </span><br>`
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
            return;
        }
        
        document.getElementById("container").innerHTML = "";
        questionBoxes(answers[answers.length-1][0], back=true)
    })
}

questionBoxes("snow_ball_bank");


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
        style="--bs-btn-padding-y: 0rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
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

function disDatabase(dis){
    database = {
        ms : `
        <img src="/img/SUN-CMV.png" class="img-fluid container-gap"></img>
        `,
        pp : `
        <img src="/img/SUN-HSV.png" class="img-fluid container-gap"></img>
        `,
        npp : `
        <img src="/img/SUN-VZV.png" class="img-fluid container-gap"></img>
        `,
        sarcoidosis : `
        <img src="/img/SUN-SARCOIDOSIS.png" class="img-fluid container-gap"></img>
        `,
        syphilis : `
        <img src="/img/SUN-SYPHILIS.png" class="img-fluid container-gap"></img>
        <img src="/img/SUN-SYPHILIS-SCREENING.png" class="img-fluid container-gap"></img>
        `,
        lyme : `
        Lyme disease
        `,
        iol : `
        Intraocular lymphoma
        `,
    }
    return database[dis]
}

function disButtonModal(dis){
    if(dis==='ms'){
        return buttonModal('MS','Multiple Sclerosis',disDatabase('ms'),'ms')
    }
    if(dis==='pp'){
        return buttonModal('PP','Pars Planitis',disDatabase('pp'),'pp')
    }
    if(dis==='npp'){
        return buttonModal('NPP','Non-Pars Planitis',disDatabase('npp'),'npp')
    }
    if(dis==='sarcoidosis'){
        return buttonModal('Sarcoid IU','Sarcoid Uveitis',disDatabase('sarcoidosis'),'sarcoidosis')
    }
    if(dis==='syphilis'){
        return buttonModal('Syphilitic IU','Syphilitic Uveitis',disDatabase('syphilis'),'syphilis')
    }
    if(dis==='lyme'){
        return buttonModal('Lyme','Lyme disease',disDatabase('lyme'),'lyme')
    }
    if(dis==='iol'){
        return buttonModal('IOL','Intraocular Lymphoma',disDatabase('iol'),'iol')
    }
}

function listify(arr){
    if(arr.length===0 || arr===``){
        return "";
    }
    let x = "<ul class=`list-unstyled`>"
    for (let i = 0; i < arr.length; i++){
        x += "<li>"
        x += arr[i]
        x += "</li>"
    }
    x += "</ul>"
    return x;
}