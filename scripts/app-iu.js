import { DecisionTree } from "./new-decision.js";
import { UIHandler } from "./new-decision.js";
import {  dummyQuestionsIU } from "./questions.js";
import { iuPhenotypes } from "./phenotype.js";

const decisionTree = new DecisionTree(dummyQuestionsIU,iuPhenotypes);
const uiHandler = new UIHandler('container', decisionTree)
decisionTree.setUIHandler(uiHandler);
decisionTree.start('intro');