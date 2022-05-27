'use strict'
///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const Julia = [3, 5, 2, 12, 7]
// Julia.shift();
// Julia.pop();
// const Kate =  [4, 1, 15, 8, 3]
// const Jomari =  [25,2,5,17,1]
// const Kate_Jom = Kate.concat(Jomari)
// const Julia_Final = Kate_Jom.concat(Julia)

// function checkDogs(arr){
//     let mySet1 = new Set(arr)
//     let num = 0;
//     console.log(mySet1)
//     mySet1.forEach(arr => {
//         let result = arr>3 ? "Adult" : "Puppy";
//         num++;
//         console.log(`Dog number ${num} is an ${result} `)
//     });
// }
// checkDogs(Julia_Final)
// console.log(Julia_Final.length)
const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    // dogsJulia.slice(1, 3);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);
  
    dogs.forEach(function (dog, i) {
      if (dog >= 3) {
        console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
      } else {
        console.log(`Dog number ${i + 1} is still a puppy 🐶`);
      }
    });
  };
  // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
  checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
//   const arrMay = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
//   const total = 0;
//   const arrMayReduce = arrMay.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     total

//   );
// let forthis = 0;
// for(let i = 0; i<arrMay.length;i++){
//   forthis+=arrMay[i]
//   console.log(forthis)
// }
// console.log(arrMayReduce)





