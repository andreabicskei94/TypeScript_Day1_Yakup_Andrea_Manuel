let myArray : Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i=1; i<=myArray.length; i++)
{
    for (let j=1; j<=myArray.length; j++)
    {
      
        let result : string=`${i} x ${j} = ${i*j}`

        console.log(result);
    }}

     


let names:  {fName: string, lName?: string} [] = [{
    fName:'Andrea',
    lName: 'Bicskei'
},
{
    fName:'Andrea',
    lName: 'Bicskei'
},
{
    fName:'Andrea',
    lName: 'Bicskei'
},
{
    fName:'Andrea',
    lName: 'Bicskei'
},
{
    fName:'Andrea',
    lName: 'Bicskei'
},
{
    fName:'Andrea',
    lName: 'Bicskei'
},
{
    fName:'Andrea',
    lName: 'Bicskei'
},
{
    fName:'Andrea',
    lName: 'Bicskei'
},

{
    fName:'Andrea',
    lName: 'Bicskei'
},
{
    fName:'Andrea',
    lName: 'Bicskei'
},


]


names.forEach((item) => {
  console.log(item);
});



function sleep(ms: number) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }
  ​
  async function delayedNames() {
 
    await sleep(5000);
    
    names.forEach((item) => {
        console.log(names[0].lName);
      });
   
  }
  ​
  delayedNames();
  ​
  
/*for (let i = 0; i < 10; i++) {
   
  }
  myName.forEach(function(value){
    console.log(value)
  })

myName.forEach(function(value, index){
    console.log(`My full Name is ${value} ${index}`);
})*/
