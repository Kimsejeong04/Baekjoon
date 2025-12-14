const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

let result = [];

for (i = 1; i <= input[0]; i++){
    let [a, b] = input[i].split(',').map(Number);

    result[i] = a + b;

    console.log(result[i]);
}