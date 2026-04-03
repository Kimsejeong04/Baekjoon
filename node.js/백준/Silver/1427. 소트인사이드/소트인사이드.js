const fs = require('fs');
const score = fs.readFileSync(0, 'utf-8').toString().trim().split('').map(Number);

let temp = 0;

for(let i = 0; i <= score.length; i++){
    for(let j = i + 1; j < score.length; j++){
        if(score[i] < score[j]){
            temp = score[i];
            score[i] = score[j];
            score[j] = temp;
        }
    }
}

console.log(score.join(''));
