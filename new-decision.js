import { Phenotype } from "./phenotype.js";

export class Question {
    constructor(description, question, options, footer, phenotypeImpact){
        this.description = description;
        this.question = question;
        this.options = options; //Array of option objects 
        this.footer = footer;
        this.phenotypeImpact = phenotypeImpact;
    }

    // Method to render the question
    render() {
        let htmlContent = `<div class="question-description">${this.description}</div>`
        htmlContent += `<div class="question-text">${this.question}</div>`
        

        this.options.forEach((option, index) => {
            htmlContent += `
            <div class="form-check border-unpressed" style="margin-bottom: 10px;">
                <div class="form-block" style="padding-left: 10px;">
                    <input class="form-check-input border-secondary" type="radio" name="flexRadioDefault" id="flexRadioDefault${index}" value="${option.label}">
                    <label class="form-check-label" for="flexRadioDefault${index}">
                        ${option.label}
                    </label>
                </div>
            </div>`
        });

        if (this.footer) {
            htmlContent += `<div class="question-footer" style="margin-top: 20px;">${this.footer}</div>`;
        }

        htmlContent += `
            <div class="back-next" style="margin-top: 20px;">
                <button type='button' class='btn btn-outline-primary btn-back shadow-sm'>
                    Back
                </button>`;

        const nextButtonText = this.options.length === 0 ? 'Finish' : 'Next';
        htmlContent += `
                <button type='button' class='btn btn-outline-primary btn-next shadow-sm'>${nextButtonText}</button>
            </div>
            <div id='message' style="color:red;"></div>`;

    
        return htmlContent;
    }
}

export class DecisionTree {
    constructor(questions, phenotypes){
        this.questions = questions;
        this.phenotypes = phenotypes;
        this.initialPhenotypes = structuredClone(phenotypes);
        this.currentQuestion = null;
        this.uiHandler = null;
        this.selectedAnswer = null;
        this.questionHistory = []
    }

    setUIHandler(uiHandler) {
        this.uiHandler = uiHandler;
    }

    start(questionKey) {
        this.currentQuestion = this.questions[questionKey];
        this.uiHandler.updateUI(this.currentQuestion.render())
    }

    goBack() { // Move to the previous question 
        if (this.questionHistory.length > 0) {
            const lastState = this.questionHistory.pop();
            this.currentQuestion = lastState.storedQuestion;
            this.phenotypes = lastState.storedPhenotypes;
            this.uiHandler.updateUI(this.currentQuestion.render());
        } else {
            this.uiHandler.showMessage("There is no previous question");
        }
    } 

    selectAnswer(answer){
        this.selectedAnswer = answer;
        console.log("selectedAnswer", this.selectedAnswer)
    }

    goNext() { // Move to the next question based on the stored answer
        if(this.selectedAnswer) {
            this.questionHistory.push({
                storedQuestion: this.currentQuestion, 
                storedSelectedAnswer: this.selectedAnswer,
                storedPhenotypes: structuredClone(this.phenotypes)
            });
            this.nextQuestion(this.selectedAnswer);
            this.selectedAnswer = null;
        } else {
            // If not selected, show a message 
            this.uiHandler.showMessage("please select an option");
        }
    }

    // Navigate to the next question based on the current answer
    nextQuestion(answer) {
        // Update this.currentQuestion
        let nextQuestionKey = this.currentQuestion.options.find(option => option.label === answer).nextQuestion;

        if (!this.questions[nextQuestionKey]) {
            console.error(`Question not found for key: ${nextQuestionKey}`);
            return;
            // Be careful that this could mess up the question history -> not going to fix  
        }
        else {
            this.currentQuestion = this.questions[nextQuestionKey];
        }

        this.updatePhenotypes();

        // <div container>.innerHTML = Current question's HTML
        // + attach the event listener 
        this.uiHandler.updateUI(this.currentQuestion.render());
    }

    updatePhenotypes() {
        let impact = this.currentQuestion.phenotypeImpact;
        if (impact) {
            this.phenotypes = this.phenotypes.map(item => {
                // Ensure item is a Phenotype instance
                const phenotypeItem = new Phenotype(item.name, item.criteria, item.probability);
                return impact[item.name] ? phenotypeItem.updateProbability(impact[item.name]) : phenotypeItem;
            });
        }
        console.log("Phenotypes in DecisionTree after update:", this.phenotypes);
    }
    
}

export class UIHandler {
    constructor(containerId, decisionTree) {
        this.container = document.getElementById(containerId);
        this.decisionTree = decisionTree;
        this.tempSelectedOption = null;
    }

    // Method to update the UI based on user actions
    updateUI(htmlContent) {
        this.container.innerHTML = htmlContent;
        this.attachEventListener();
        this.displayPastQuestions();
        this.updateDifferentialUI();
        console.log("Current History:", this.decisionTree.questionHistory);

    }

    attachEventListener() {
        // Code to attach event listeners to the new HTML content
        // i.e. listening for a click on an option 
        this.container.querySelectorAll('.form-check').forEach(formCheck => {
            formCheck.addEventListener('click', (event) => {
                const input = formCheck.querySelector('.form-check-input');

                // Trigger click event
                if (input) {
                    input.click();
                }

                this.container.querySelectorAll('.form-check').forEach(formCheck => {
                    formCheck.classList.remove('border-pressed');
                    formCheck.classList.add('border-unpressed');
                });

                // Add 'border-pressed' class to the selected element
                formCheck.classList.remove('border-unpressed');
                formCheck.classList.add('border-pressed');
                
                this.tempSelectedOption = input ? input.value : null;
            });
        });

        // Add event listener for 'Back' button, if it exists
        const backButton = this.container.querySelector('.btn-back');
        backButton.addEventListener('click', () => {
            this.decisionTree.goBack();
        })

        // Add event listener for 'Next' button, if it exists
        const nextButton = this.container.querySelector('.btn-next');
        nextButton.addEventListener('click', () => {
            if(nextButton.textContent === 'Next') {
                console.log("tempSelectedOption: ", this.tempSelectedOption)
                this.decisionTree.selectAnswer(this.tempSelectedOption);
                this.decisionTree.goNext();
                this.tempSelectedOption = null;
            } else {
                console.log("Finished")
            }
        })
    }

    showMessage(message) {
        const messageElement = this.container.querySelector('#message');
        if (messageElement) {
            messageElement.innerHTML = message;
            setTimeout(() => messageElement.innerHTML = '', 1500);
        }
    }

    displayPastQuestions() {
        const historyContainer = document.getElementById("exp-container");
        if (historyContainer) {
            let historyHtmlContent = '';
            this.decisionTree.questionHistory.forEach(item => {
                historyHtmlContent += `<div>${item.storedQuestion.question}<br>&nbsp&nbsp<i>${item.storedSelectedAnswer}</i></div>`;
            });
            historyContainer.innerHTML = historyHtmlContent;
        }
    }

    updateDifferentialUI() {
        const differentialContainer = document.getElementById("diff-container");
        differentialContainer.innerHTML = '';
        const sortedPhenotypes = this.sortPhenotypes();
        console.log("Sorted Phenotypes after update:", sortedPhenotypes);
        // Create and append sections for each probability category
        this.createDiagnosisSection(differentialContainer, 'High Probability', sortedPhenotypes.high,'high-probability');
        this.createDiagnosisSection(differentialContainer, 'Moderate Probability', sortedPhenotypes.moderate,'moderate-probability');
        this.createDiagnosisSection(differentialContainer, 'Low Probability', sortedPhenotypes.low,'low-probability');
    }

    createDiagnosisSection(container, title, phenotypes, probabilityLevel){
        if (phenotypes.length > 0) {
            const sectionTitle = document.createElement('div');
            sectionTitle.style = "font-size: 20px; color: black; font-weight: 500; margin-bottom: 10px;"
            sectionTitle.textContent = title;
            container.appendChild(sectionTitle);

            phenotypes.forEach((phenotype, index) => {
                const modalItem = this.createModalItem(phenotype, index, probabilityLevel);
                container.appendChild(modalItem);
            });
        }
    }

    createModalItem(phenotype, index, probabilityLevel) {
        // Create a unique ID for the modal
        const modalId = `modal-${phenotype.name.replace(/\s+/g, '-')}-${index}`;
    
        const item = document.createElement('div');
        item.className = `diagnosis-item ${probabilityLevel}`;
        item.innerHTML = `
            <button type="button" class="btn-full-width" data-bs-toggle="modal" data-bs-target="#${modalId}"
            style="--bs-btn-padding-y: 0rem; --bs-btn-padding-x: 0rem; --bs-btn-font-size: .75rem; color: #333333;">
                <strong>+ ${phenotype.name}</strong>
            </button>
            <div class="modal" id="${modalId}" tabindex="-1">
                <div class="modal-dialog modal-lg modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5">${phenotype.name}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ${phenotype.criteria}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return item;
    }
    
    sortPhenotypes() {
        return {
            high: this.decisionTree.phenotypes.filter(p => p.probability === "high"),
            moderate: this.decisionTree.phenotypes.filter(p => p.probability === "moderate"),
            low: this.decisionTree.phenotypes.filter(p => p.probability === "low")
        };
    }


}

