const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim();

const N = Number(input);
let count = 0;
let num = 665;

while(count < N){
    num ++;

    if(String(num).includes('666')){
        count ++;
    }
}

console.log(num);