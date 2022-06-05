'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300,5500,-1000],
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
  movements : [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5= {
  owner: 'Jomari Sarmiento Abejo',
  movements: [100,500,-300,900,100],
  interestRate: 1,
  pin: 1234,
}


/////////////////////////////////////////////////
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

const accounts = [account1, account2, account3, account4 , account5];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;
const movementsUSD = movements.map(function(mov){
  
  return mov*eurToUSD;
})

const movementsUSDarrowfunction = movements.map(mov=>mov*eurToUSD)
movementsUSDarrowfunction.push("Arrow Function")
// console.log(movementsUSDarrowfunction)

const movementsUSDfor = [];
for(const x of movements){
  movementsUSDfor.push(x*eurToUSD)
}
// console.log(movements)
// console.log(movementsUSD)
// console.log(movementsUSDfor)


const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);


const displayMovements = function (movements)
// [200, 450, -400, 3000, -650, -130, 70, 1300]
{
  //clear the div using dom
  containerMovements.innerHTML = '';

  movements.forEach(function(mov,i) //(the value of the element (mov) ,the index of the element (i))
  {
    const type = mov > 0 ? `deposit` : `withdrawal`
    const html = 
    `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>

    `
    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
};
displayMovements(account1.movements)


/*
const createUsernames = function(accs){
  accs.forEach(function(acc){
    acc.username = acc.owner
    .toLowefrCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  })
}

createUsernames(accounts)
console.log(accounts)
console.log("qwerty")
*/

const deposits = movements.filter(mov => (mov > 0));
deposits.push("Deposits")
console.log(deposits)

movements.push(-1500)

const withdrawals = movements.filter(mov  =>  (mov<0));
console.log(withdrawals)

const balance = movements.reduce(function(acc, cur,i,arr){
  console.log(`Number ${i} : ${acc}`)
  return acc+=cur
},0)

console.log(balance)

let balance2 = 0;
for (const mov of movements) balance2 += 2;
console.log(balance2)





