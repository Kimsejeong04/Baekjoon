const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ');

let N = Number(input[0]);
let B = Number(input[1]);

const charList = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let result ="";

while (N > 0){
   let remainder = N % B;

   result = charList[remainder] + result;

   N = Math.floor(N / B);
}

if(result === ""){
   console.log(0);
} else{
   console.log(result);
}