// ex1
function multi(max: number = 10): string[]{
    let multiArr: string[] = [];
    for(let i: number = 1; i <= max; i++){
        for(let j: number = 1; j <= 10; j++){
            let result: number = i * j;
            let resultString: string = `${j} x ${i} = ${result}`;
            // console.log(resultString);
            multiArr.push(resultString);
        }
    }
    // console.log(multiArr);
    return multiArr;
}
// console.table(multi());


// ex2
const nameArr: {fName?: string, lName?:string}[] = [{
        fName : "Manuel",
        lName : "Wid"
    },{
        fName : "Manuel",
        lName : "Wid"
    },{
        fName : "Manuel",
        lName : "Wid"
    },{
        fName : "Manuel",
        lName : "Wid"
    },{
        fName : "Manuel",
        lName : "Wid"
    },{
        fName : "Manuel",
        lName : "Wid"
    },{
        fName : "Manuel",
        lName : "Wid"
    },{
        fName : "Manuel",
        lName : "Wid"
    },{
        fName : "Manuel",
        lName : "Wid"
    },{
        fName : "Manuel",
        lName : "Wid"
    }
];

function fullName(){
    nameArr.forEach(function(e){
        let result: string = `${e.fName} ${e.lName}`;
        console.log(result);
    });
}

fullName();

function calc(sec: number = 0, min: number = 0, hour:number = 0){
    let result: number = 0;
    let milsec: number = sec;
    let milmin: number = min;
    let milh: number = hour;
    milsec = sec * 1000;
    if(min){milmin = min * 60 * 1000;}
    if(hour){milh = hour * 60 * 60 * 1000;}
    result = milsec + milmin + milh;
    return result;
}
// console.log(calc(0,0,1));
setTimeout(fullName, calc(5));


// ex3
const names: string[] = ["serri", "manuel", "maria", "acilio"];
for(let index in names){
    console.log(index);
}

for(let value of names){
    console.log(value);
}

names.forEach((e) => {
    console.log(names.indexOf(e), e)
});