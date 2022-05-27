'use strict'
// console.log('connected')



const KELVIN = 273;
const key = "82005d27a116c2880c8f0fcb866998a0";
function get(latitude, longitude){
const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
}

// fetch('api.json')
//   .then((res) => res.json())
//   .then(data => console.log(data))
  

  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  // .then(response => response.json())
  // .then(json => console.log(json))
  

const myAge = 16;
const  isOldEnough = myAge >= 18;
console.log(isOldEnough)

const inputYear = "1991"
console.log (Number(inputYear) + 18)

const money = 100;
if(money){
  console.log("Don't spend it all")
}else{
  console.log("Go get  JOB")
}

const favourite = Number(prompt("Whats your favourite number?"));
console.log(favourite)
if(favourite === 23){
  console.log('Cool! 23 is an amazing number!')
} else if(favourite === 7){
  console.log(' 7 is also a cool number')
}else if(favourite === 9){
  console.log('9 is also a cool number')
}else{
  console.log('Number is not 23 , 7 or 9')
}




// Traffic ligths App
// const ligths = "Yellow"
// if(ligths  === "Green") {
//   console.log('Go')
// } else if(ligths === "Yellow") {
//   console.log('Get ready to stop')
// }
// else if(ligths === "Red");{
//   console.log('Stop ')
// // }else{
// //   console.log('None')
// // }

const dolphinsScore = (98 + 108 + 100) /3
const koalasScore = (88 + 91+ 110)/3;
console.log(dolphinsScore,koalasScore);

if(dolphinsScore > koalasScore && dolphinsScore >= 100){
  console.log("dolphins win the trophy")
} else if(koalasScore > dolphinsScore && koalasScore >= 100){
  console.log('Koalas win the trophy')
}else if(dolphinsScore === koalasScore){
  console.log("Its a tie")       
}else{
  console.log('No one wins');
}

const today = 'Sunday'
switch(today){
  case 'Monday':
  console.log(" Going to work");
  break;
  case 'Tuesday':
  console.log(" Go to Code meetUp");
  case 'Wednesday':
  console.log(" Going to the gym");
  break;
  case 'Thursday':
  console.log(" Meeting with team");
  console.log(" Going to work");
  break;
  case 'Friday':
  console.log(" Fly to NY");
  console.log(" Meeting with brands");
  break;
  case 'Saturday':
    console.log(" Enjoy the weekend");
  case 'Sunday':
    console.log(" Go to Chruch");
    break;
    default:
      console.log("Not a valid day")
}
 
const day = ('Thursday')
if(day === 'Monday'){
  console.log('Going to work')
} else if( day === 'Tuesday'){
  console.log('Going to code meeting')
} else if(day === 'Wednesday'){
  console.log(' Going to the gym')
}else if(day === 'Thursday'|| day === 'Friday' ){
  console.log('flying to NY')
}else if(day === 'Saturday' || day === 'Sunday'){
  console.log('Enjot the weekend')
}else{
  console.log('not applicable')
}


// THE CONDITIONAL OPERATOR
const age = 15;
age >= 18? 
console.log('I like ti drink wine'):
console.log('Ilike to drink water');


// 'use strick';

// Functions in js
// fuction declation
function calcAge1(birthYear){
  return 2037 - birthYear
}
 const age1 =calcAge1 (1991)
 console.log(age1)

//  fuction Expression

const calcAge2 = function(birthYear){
  return 2037 - birthYear
}
const age2 = calcAge2(1991)
console.log(age2)

// Arrow Fuctions
const calcAge3 = birthYear => 2037- birthYear
const age3 = calcAge3(1991)
console.log(age3);

// Array
const friends = ['Michael','Steven','Peter']
friends.push('Jay')
friends.unshift('John')
friends.indexOf('Seven')
console.log(friends);
console.log(friends[2])
