const fs = require('fs');
const N = fs.readFileSync(0, 'utf-8').toString().trim();

console.log(Number(2 ** N));