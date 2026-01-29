const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim();

const N = Number(input);

console.log(N * (N - 1));