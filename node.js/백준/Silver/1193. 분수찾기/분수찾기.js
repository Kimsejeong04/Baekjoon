const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim();

let x = Number(input);
let line = 1;
let denominator = 0;
let numerator = 0;

while(x > line){
    x -= line;
    line++;
}

if(line % 2 === 0){
    numerator = x;
    denominator = line-x+1;
}
else{
    numerator = line-x+1;
    denominator = x;
}

console.log(`${numerator}/${denominator}`);