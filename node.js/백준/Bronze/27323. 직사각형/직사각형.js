const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);

let high = input[0];
let width = input[1];
let area = high * width;

console.log(area);