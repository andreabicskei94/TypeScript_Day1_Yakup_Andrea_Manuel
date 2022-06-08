// let myArray: Array<Number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//whitout array

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     let result: string = `${j} * ${i} = ${i * j}`;
//     console.log(result);
//   }
// }

let names = [
  {
    fname: "Yakup ",
    lname: " Duygun",
  },
  {
    fname: "Yakup ",
    lname: " Duygun",
  },
  {
    fname: "Yakup ",
    lname: " Duygun",
  },
  {
    fname: "Yakup ",
    lname: " Duygun",
  },
  {
    fname: "Yakup ",
    lname: " Duygun",
  },
  {
    fname: "Yakup ",
    lname: " Duygun",
  },
  {
    fname: "Yakup ",
    lname: " Duygun",
  },
  {
    fname: "Yakup ",
    lname: " Duygun",
  },
  {
    fname: "Yakup ",
    lname: " Duygun",
  },
  {
    fname: "Yakup ",
    lname: " Duygun",
  },
];

// names.forEach(() {

//      document.write(x.fname + x.lname + " //");
// }
// });

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function x() {
  await sleep(5000);
  console.log(names);
}
