const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);

let sum = 0;
input.sort((a, b) => a - b);
const mid = Math.floor(input.length/2); 
for(let i = 0; i < input.length; i++){
    sum += input[i];
}

console.log(sum / input.length);
console.log(input[mid]);