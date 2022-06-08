"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i <= myArray.length; i++) {
    for (let j = 1; j <= myArray.length; j++) {
        let result = `${i} x ${j} = ${i * j}`;
        console.log(result);
    }
}
let names = [{
        fName: 'Andrea',
        lName: 'Bicskei'
    },
    {
        fName: 'Andrea',
        lName: 'Bicskei'
    },
    {
        fName: 'Andrea',
        lName: 'Bicskei'
    },
    {
        fName: 'Andrea',
        lName: 'Bicskei'
    },
    {
        fName: 'Andrea',
        lName: 'Bicskei'
    },
    {
        fName: 'Andrea',
        lName: 'Bicskei'
    },
    {
        fName: 'Andrea',
        lName: 'Bicskei'
    },
    {
        fName: 'Andrea',
        lName: 'Bicskei'
    },
    {
        fName: 'Andrea',
        lName: 'Bicskei'
    },
    {
        fName: 'Andrea',
        lName: 'Bicskei'
    },
];
names.forEach((item) => {
    console.log(item);
});
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function delayedNames() {
    return __awaiter(this, void 0, void 0, function* () {
        yield sleep(5000);
        names.forEach((item) => {
            console.log(names[0].lName);
        });
    });
}
delayedNames();
/*for (let i = 0; i < 10; i++) {
   
  }
  myName.forEach(function(value){
    console.log(value)
  })

myName.forEach(function(value, index){
    console.log(`My full Name is ${value} ${index}`);
})*/
