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

setTimeout(fullName, 5000);


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