const fs = require('fs');
const input = fs.readFileSync(0,'utf-8').toString().trim();

let n = Number(input);
let factorial = 1;

for(let i = 1; i < n + 1; i++){
    factorial = factorial * i;
}

console.log(factorial);