'use strict';
function print(value){
  return console.log(value)
}
/*
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const i of movements){
  if(i > 0){
    console.log(`You Deposited ${i}`)
  }
  else{
    console.log(`You Withdrew `,Math.abs(i))
  }
}
movements.forEach(function(mov,i,arr){
  if(mov > 0){
    console.log(`${i+1}. You Deposited in forEach ${mov}`)
  }
  else{
    console.log(`${i+1}. You Withdrew in forEach`,Math.abs(mov))
  }
})
*/

const OnePiece = [
  {name: 'Sabo',  price: 602_000_000},
  {name: 'Charlotte Perospero',  price:700_000_000},
  {name: 'Charlotte Cracker'        ,  price:860_000_000},
  {name: 'Charlotte Smoothie'       ,  price:932_000_000},
  {name: 'Jack The Drought'         ,  price:1_000_000_000},
  {name: 'Charlotte Katakuri'       ,  price:1_057_000_000},
  {name: 'Queen The Plague'         ,  price:1_320_000_000},
  {name: 'Marco The Phoenix'        ,  price:1_374_000_000},
  {name: 'King The Wildfire'        ,  price:1_390_000_000},
  {name: 'Monkey D. Luffy '         ,  price:1_500_000_000},
  {name: 'Marshall D. Teach'        ,  price:2_246_600_000},
  {name: 'Red Haired Shanks'        ,  price:4_048_900_000},
  {name: 'Charlotte Linlin'         ,  price:4_388_000_000},
  {name: 'The King of Beasts, Kaido',  price:4_611_100_000}, 
] 

// Filter
const filteredItemsLowerBoundary = OnePiece.filter((item)=>{
  return item.price <= 1_500_000_000;
})
const filteredItemsHigherBoundary = OnePiece.filter((item)=>{
  return item.price > 1_500_000_000;
})
const findOnePieceCharacter = (name) =>{
  
}
// Map
const itemNames = OnePiece.map((item)=>{
  return item.name;
})
const itemBounty = OnePiece.map((bounty)=>{
  return bounty.price
})
print(`Maps Called: ${itemNames}`)
print(`Maps Called: ${itemBounty.length}`)
print(`Maps Called:\n   Name: ${itemNames[0]}\n   Bounty: ${itemBounty[0]}`)

//Find
const foundItem = OnePiece.find((item) => {
  return item.name ==='Sabo'
})
print(`Find Method:`);
  foundItem;
// print(`Find Called: ${print(foundItem)}`)

//ForEach
const foreachName = OnePiece.forEach((item) =>{
  print(`foreachName: ${item.name}`)
 
})
const foreachBounty = OnePiece.forEach((item)=>{
  console.log(item.price)
})

//Some
const hasInexpenpensiveBoundary = OnePiece.some((item) =>{
  return item.price <= 1_500_000_000;
  
})
console.log(hasInexpenpensiveBoundary)

// print(hasInexpenpensiveBoundary)

// Every
const everyBoundary = OnePiece.some((item) =>{
  return item.price <= 1_500_000_000;
})
console.log(everyBoundary)


// Reduce
const totalBounty = OnePiece.reduce((currentTotal,item) =>{
  return item.price +currentTotal;
},0)

print(`Total Bounty is ${totalBounty}`)

// Includes
const arr1 = [1,2,3,4,5,6,7,8,10]
const includeTwo = arr1.includes(11);
print(includeTwo)



const currencies = new map([
  ['USD', 'United States Dollar'],
  ['EUR','Euro'],
  ['GBP', 'Pound Sterling']
])

currencies.forEach(function(value,key,map){
  console.log(`${key} : ${value}`);
})

const currenciesSet = new Set(['USD', 'GBP','USD','EUR','EUR'])
console.log(currenciesSet)