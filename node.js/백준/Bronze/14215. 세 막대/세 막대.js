const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

let max_side = Math.max(...input);
let sum = input[0] + input[1] + input[2];
let other_sum = sum - max_side;

if(max_side < other_sum){
    console.log(sum);
}
else{
    console.log(other_sum + (other_sum - 1))
}

//console.log(other_sum);