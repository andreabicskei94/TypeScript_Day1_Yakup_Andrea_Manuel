"use strict";
// ex1
function multi(max = 10) {
    let multiArr = [];
    for (let i = 1; i <= max; i++) {
        for (let j = 1; j <= 10; j++) {
            let result = i * j;
            let resultString = `${j} x ${i} = ${result}`;
            // console.log(resultString);
            multiArr.push(resultString);
        }
    }
    // console.log(multiArr);
    return multiArr;
}
// console.table(multi());
// ex2
const nameArr = [{
        fName: "Manuel",
        lName: "Wid"
    }, {
        fName: "Manuel",
        lName: "Wid"
    }, {
        fName: "Manuel",
        lName: "Wid"
    }, {
        fName: "Manuel",
        lName: "Wid"
    }, {
        fName: "Manuel",
        lName: "Wid"
    }, {
        fName: "Manuel",
        lName: "Wid"
    }, {
        fName: "Manuel",
        lName: "Wid"
    }, {
        fName: "Manuel",
        lName: "Wid"
    }, {
        fName: "Manuel",
        lName: "Wid"
    }, {
        fName: "Manuel",
        lName: "Wid"
    }
];
function fullName() {
    nameArr.forEach(function (e) {
        let result = `${e.fName} ${e.lName}`;
        console.log(result);
    });
}
fullName();
function calc(sec = 0, min = 0, hour = 0) {
    let result = 0;
    let milsec = sec * 1000;
    let milmin = min * 60 * 1000;
    let milh = hour * 60 * 60 * 1000;
    result = milsec + milmin + milh;
    return result;
}
// console.log(calc(0,0,1));
setTimeout(fullName, calc(5));
// ex3
const names = ["serri", "manuel", "maria", "acilio"];
for (let index in names) {
    console.log(index);
}
for (let value of names) {
    console.log(value);
}
names.forEach((e) => {
    console.log(names.indexOf(e), e);
});
