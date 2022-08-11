// Test data 1:
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / (markWeight ** 2);
const johnBMI = johnWeight / (johnWeight ** 2);

const markHigherBMI = markBMI > johnBMI;
console.log("Does mark has higher BMI? " + markHigherBMI);

// Coding challenge 2:
if (markHigherBMI) {
    console.log(`Mark has higher BMI (${markBMI}) than John (${johnBMI})`);
} else {
    console.log(`John has higher BMI (${johnBMI}) than Mark (${markBMI})`);
}


// Coding challenge 3:
//Test data 1 :
const dolphinScoreAvg = (96 + 108 + 89) / 3;
const koalasScoreAvg = (88 + 91 + 110) / 3;
if (dolphinScoreAvg > koalasScoreAvg) {
    console.log("Team Dolphin are the winners!!");
} else if (dolphinScoreAvg < koalasScoreAvg) {
    console.log("Team Koala are the winners!!");
} else {
    console.log("Competition tied!!");
}