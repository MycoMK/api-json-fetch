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
  

const age = 16;
const  isOldEnough = age >= 18;
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
}
