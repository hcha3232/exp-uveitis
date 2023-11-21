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
            <div class="form-check" style="margin-bottom: 10px;">
                <input class="form-check-input border-primary" type="radio" name="flexRadioDefault" id="flexRadioDefault${index}" value="${option.label}">
                <label class="form-check-label" for="flexRadioDefault${index}">
                    ${option.label}
                </label>
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

    selectAnswer(answer){
        this.selectedAnswer = answer;
    }

    goBack() {
        // Move to the previous question 
        if(this.questionHistory.length > 0) {
            console.log('here')
            // Remove the last question from history and set it as the current question 
            this.currentQuestion = this.questionHistory[this.questionHistory.length - 1]['question'];
            this.questionHistory.pop()
            this.uiHandler.updateUI(this.currentQuestion.render());
        } else {
            // If no previous questions, show a message 
            this.uiHandler.showMessage("There is no previous question");
        }
    }

    goNext() {
        // Move to the next question based on the stored answer
        if(this.selectedAnswer) {
            console.log(this.selectedAnswer)
            this.questionHistory.push({question: this.currentQuestion, selectedAnswer: this.selectedAnswer});
            this.nextQuestion(this.selectedAnswer);
            this.selectedAnswer = null;
        } else {
            // If not selected, show a message 
            this.uiHandler.showMessage("please select an option");
        }
    }

    // Navigate to the next question based on the current answer
    nextQuestion(answer) {
        console.log(this.questionHistory)
        // Update this.currentQuestion
        let nextQuestionKey = this.currentQuestion.options.find(option => option.label === answer).nextQuestion;
        this.currentQuestion = this.questions[nextQuestionKey];

        if (!this.currentQuestion) {
            console.error(`Question not found for key: ${nextQuestionKey}`);
            return;
        }

        this.updatePhenotypes(answer);

        // <div container>.innerHTML = Current question's HTML
        // + attach the event listener 
        this.uiHandler.updateUI(this.currentQuestion.render())
    }

    updatePhenotypes(answer) {
        const impact = this.currentQuestion.phenotypeImpact;
        if(impact){    
            this.phenotypes.forEach(phenotype => {
                if(impact[phenotype.name]) {
                    phenotype.updateProbability(impact[phenotype.name]);
                }
            })
        }
    }

    getCurrentPhenotypes(){
        return this.phenotypes;
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
    }

    attachEventListener() {
        // Code to attach event listeners to the new HTML content
        // i.e. listening for a click on an option 
        this.container.querySelectorAll('.form-check-input').forEach(input => {
            input.addEventListener('click', (event) => {
                this.tempSelectedOption = event.target.value;
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
                historyHtmlContent += `<div>${item.question.question}<br>&nbsp&nbsp<i>${item.selectedAnswer}</i></div>`;
            });
            historyContainer.innerHTML = historyHtmlContent;
        }
    }

    updateDifferentialUI() {
        const phenotypes = this.decisionTree.getCurrentPhenotypes();
        const differentialContainer = document.getElementById("diff-container");
        differentialContainer.innerHTML = '';
        
        const sortedPhenotypes = this.sortPhenotypes();

        // Create and append sections for each probability category
        this.createDiagnosisSection(differentialContainer, 'High Probability', sortedPhenotypes.high,'high-probability');
        this.createDiagnosisSection(differentialContainer, 'Moderate Probability', sortedPhenotypes.moderate,'moderate-probability');
        this.createDiagnosisSection(differentialContainer, 'Low Probability', sortedPhenotypes.low,'low-probability');
    }

    createDiagnosisSection(container, title, phenotypes, probabilityLevel){
        if (phenotypes.length > 0) {
            const sectionTitle = document.createElement('h3');
            sectionTitle.textContent = title;
            container.appendChild(sectionTitle);

            phenotypes.forEach(phenotype => {
                const item = document.createElement('div');
                item.className = `diagnosis-item ${probabilityLevel}`;
                item.textContent = phenotype.name;
                container.appendChild(item);
            });
        }
    }

    sortPhenotypes() {
        return {
            high: this.decisionTree.phenotypes.filter(p => p.probability === "high"),
            moderate: this.decisionTree.phenotypes.filter(p => p.probability === "moderate"),
            low: this.decisionTree.phenotypes.filter(p => p.probability === "low")
        }
    }


}

