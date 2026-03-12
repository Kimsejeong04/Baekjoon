const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);

const N = input[0];
const number = [];
let temp = 0;

for(let n = 1; n < input.length; n++){
    number.push(input[n]);
}

for(let i = 0; i <= N; i++){
    for(let j = i + 1; j < N; j++){
        if(number[i] > number[j]){
            temp = number[i];
            number[i] = number[j];
            number[j] = temp;
        }
    }
}
const result = [...new Set(number)];

for(let k = 0; k < result.length; k++){
    console.log(result[k]);
}