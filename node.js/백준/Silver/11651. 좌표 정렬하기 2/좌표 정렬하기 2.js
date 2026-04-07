const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const N =  Number(input[0]);
let arr = [];

for(let i = 1; i <= N; i++){
   let current = input[i].split(' ').map(Number);
   arr.push(current); 
}

arr.sort((a, b) => {
    if(a[1] !== b[1]){
        return a[1] - b[1];
    }
    return a[0] - b[0];
});

const result = arr.map(point => point.join(' ')).join('\n');

console.log(result);