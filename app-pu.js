import { DecisionTree } from "./new-decision.js";
import { UIHandler } from "./new-decision.js";
import {  dummyQuestionsPU } from "./questions.js";
import { puPhenotypes } from "./phenotype.js";

const decisionTree = new DecisionTree(dummyQuestionsPU,puPhenotypes);
const uiHandler = new UIHandler('container', decisionTree)
decisionTree.setUIHandler(uiHandler);
decisionTree.start('intro');