import { DecisionTree } from "./new-decision.js";
import { UIHandler } from "./new-decision.js";
import {  dummyQuestions } from "./questions.js";
import { auPhenotypes } from "./phenotype.js";

const decisionTree = new DecisionTree(dummyQuestions,auPhenotypes);
const uiHandler = new UIHandler('container', decisionTree)
decisionTree.setUIHandler(uiHandler);
decisionTree.start('intro');





