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

//Coding challenge 5:
const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > 2 * avgKoalas) {
        console.log(`Dolphins win ( ${avgDolphins} vs. ${avgKoalas} )`);
    } else if (avgKoalas > 2 * avgDolphins) {
        console.log(`Koalas win ( ${avgKoalas} vs. ${avgDolphins} )`);
    } else {
        console.log("No team wins!");
    }
};

const avgDolphins = calcAverage(44, 23, 71); // Test data 1
const avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);


//Coding challenge 6:
const calcTip = bill => bill > 50 && bill < 300 ? 0.15 * bill : 0.2 * bill;
const billValues = [125, 555, 44];
const tipValues = [];
const totalValues = [];
billValues.forEach((bill, index) => {
    tipValues.push(calcTip(bill));
    totalValues.push(tipValues[index] + bill);
});
console.log("Tip values: " + tipValues);
console.log("Total values: " + totalValues);

//Coding challenge 7:
const markData = {
    fullName: "Mark Miller",
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        return this.BMI = this.weight / (this.height ** 2);
    }
}

const johnData = {
    fullName: "John Smith",
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        return this.BMI = this.weight / (this.height ** 2);
    }
}
if (markData.calcBMI() > johnData.calcBMI()) {
    console.log(`${markData.fullName}'s BMI (${markData.BMI}) is higher than  ${johnData.fullName}'s (${johnData.BMI}).`)
} else if (johnData.calcBMI() > markData.calcBMI()) {
    console.log(`${johnData.fullName}'s BMI (${johnData.BMI}) is higher than  ${markData.fullName}'s (${markData.BMI}).`)
}