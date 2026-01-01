const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const loop = Number(input[0]);
const number = input[1].split(' ').map(Number);
let primeNum = 0;

function logic(num){
   if (num < 2) return false;

   for (let i = 2; i < num; i++){
      if(num % i === 0)
         return false;
   }
   return true;
}

for(let i = 0; i < loop; i++){
   if (logic(number[i])){
      primeNum ++;
   }
}

console.log(primeNum);