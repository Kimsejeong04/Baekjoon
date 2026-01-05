const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

let X = input[0];
let Y = input[1];
let W = input[2];
let H = input[3];

let mindist = Math.min(X, Y, W - X, H - Y);
console.log(mindist);