/*
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
  
  
  
  const currencies = new Map([
    ['USD', 'United States Dollar'],
    ['EUR','Euro'],
    ['GBP', 'Pound Sterling']
  ])
  
  currencies.forEach(function(value,key,map){
    console.log(`${key} : ${value}`);
  })
  
  const currenciesSet = new Set(['USD', 'GBP','USD','EUR','EUR'])
  currenciesSet.forEach(function(value,__,map){
    console.log(`${value}: ${value}`)
  })



  */
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
let cars = ['GTR','Mitsubishi','Toyota','Hyundai','Foton']
/**
 * Filter array items based on search criteria (query)
 */
// function filterItems(arr, query) {
//   return arr.filter(function(el) {
//     return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//   })
// }
filterItems((arr, query)=>arr.filter((el)=>el.toLowerCase().indexOf(query.toLowerCase() !== -1))) 


console.log(filterItems(fruits, 'app'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']
console.log(filterItems(cars,'on'))