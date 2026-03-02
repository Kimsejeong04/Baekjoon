const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const A = BigInt(input[0]);
const B = BigInt(input[1]);

console.log((A + B).toString());
console.log((A - B).toString());
console.log((A * B).toString());