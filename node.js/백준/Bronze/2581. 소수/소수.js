const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);

const min = input[0];
const max = input[1];
let minValue = -1;
let sum = 0;

function logic(num){
    if (num < 2) return false;  

    for (let i = 2; i < num; i++){  
        if(num % i === 0)  
            return false;
    }
    return true;  
}

for(let i = min; i <= max; i++){  
    if (logic(i)){ 
        sum += i;
    
        if(minValue === -1){
            minValue = i;
        }
    }
}

if(minValue === -1){
    console.log(-1);
}
else{
    console.log(sum);
    console.log(minValue);
}