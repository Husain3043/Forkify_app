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

//Coding challenge 4:
const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

const tipPercent1 = bill1 > 50 && bill1 < 300 ? 0.15 : 0.2;
const tipPercent2 = bill2 > 50 && bill2 < 300 ? 0.15 : 0.2;
const tipPercent3 = bill3 > 50 && bill3 < 300 ? 0.15 : 0.2;
console.log(`The bill 1 was ${bill1}, the tip 1 was ${tipPercent1 * bill1} and the total value 1 ${bill1 + tipPercent1 * bill1}.`)
console.log(`The bill 2 was ${bill2}, the tip 2 was ${tipPercent2 * bill2} and the total value 2 ${bill2 + tipPercent2 * bill2}.`)
console.log(`The bill 3 was ${bill3}, the tip 3 was ${tipPercent3 * bill3} and the total value 3 ${bill3 + tipPercent3 * bill3}.`)