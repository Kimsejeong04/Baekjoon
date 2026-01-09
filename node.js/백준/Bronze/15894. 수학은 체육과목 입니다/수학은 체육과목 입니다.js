const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim();

let n = Number(input);
let result = n * 4;

console.log(result);