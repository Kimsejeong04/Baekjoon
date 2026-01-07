const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const xMap = [];
const yMap = [];
let xResult = 0;
let yResult = 0;

for(let i = 0; i < input.length; i++){
    const [x, y] = input[i].split(' ');
    xMap.push(x);
    yMap.push(y);
}

if(xMap[0] == xMap[1]){
    xResult = xMap[2];
}
else if(xMap[1] == xMap[2]){
    xResult = xMap[0];
}
else{
    xResult = xMap[1];
}

if(yMap[0] == yMap[1]){
    yResult = yMap[2];
}
else if(yMap[1] == yMap[2]){
    yResult = yMap[0];
}
else{
    yResult = yMap[1];
}

console.log(xResult, yResult);