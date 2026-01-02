const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

let day = input[0];
let night = input[1];
let high = input[2];

let result = Math.ceil((high - night) / (day - night));

console.log(result); 