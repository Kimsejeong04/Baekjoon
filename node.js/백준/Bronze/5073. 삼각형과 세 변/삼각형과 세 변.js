const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

for(let i = 0; i < input.length; i++){
  const [a, b, c] = input[i].split(' ').map(Number);
  
  if(a === 0 && b === 0 && c === 0){
    break;
  }

  const maxNum = Math.max(a, b, c);
  const sum = a + b + c;
  const otherSum = sum - maxNum;

    if(maxNum >= otherSum){
        console.log('Invalid');
    }
    else if(a === b && b === c && a === c){
        console.log('Equilateral');
    }
    else if(a === b || a === c || b === c){
        console.log('Isosceles');
    }
    else{
        console.log('Scalene');
    }
}