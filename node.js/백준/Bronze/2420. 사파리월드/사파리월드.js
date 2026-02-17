const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ');

const N = Number(input[0]);
const M = Number(input[1]);

console.log(Math.abs(N - M));