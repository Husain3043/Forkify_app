// Test data 1:
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / (markWeight ** 2);
const johnBMI = johnWeight / (johnWeight ** 2);

const markHigherBMI = markBMI > johnBMI;
console.log("Does mark has higher BMI? " + markHigherBMI);
