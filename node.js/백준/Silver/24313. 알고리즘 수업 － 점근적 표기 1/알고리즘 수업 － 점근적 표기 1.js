const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const a0_a1 = input[0].split(' ').map(Number);
const a0 = a0_a1[1];
const a1 = a0_a1[0];

const c = Number(input[1]);
const n0 = Number(input[2]);

if(a1 * n0 + a0 <= c * n0 && (a1 <= c)){
    console.log(1);
}
else{
    console.log(0);
}