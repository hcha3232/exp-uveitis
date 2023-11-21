import { Question } from "./new-decision.js";

export const dummyQuestions = {
    'q1': new Question(
        "<b>Warning!</b><br>The use of Uveitis Tree does NOT replace clinical judgement. By selecting YES I confirm that I am using Uveitis Tree with this understanding.",
        "Do you want to start?",
        [
            { label: "Yes", nextQuestion: "q2" },
            { label: "No", nextQuestion: "q3" }
        ],
        "",
        {}
    ),
    'q2': new Question(
        "<b>Question 2:</b> Is the uveitis acute or chronic?",
        "Is the uveitis acute or chronic?",
        [
            { label: "Acute", nextQuestion: "q4" },
            { label: "Chronic", nextQuestion: "q5" }
        ],
        "Acute uveitis is characterized by...",
        {
            "HSV Anterior uveitis" : "high",
            "FUS Anterior uveitis" : "low"
        }
    ),
    'q4': new Question(
        "<b>Question 4:</b> Finished",
        "Select the type of uveitis:",
        [],
        "Acute uveitis is characterized by..."
    )
};