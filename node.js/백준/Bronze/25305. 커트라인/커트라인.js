const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
let score = input[1].split(' ').map(Number);
let temp = 0;

for(let i = 0; i <= N; i++){
    for(let j = i + 1; j < N; j++){
        if(score[i] < score[j]){
            temp = score[i];
            score[i] = score[j];
            score[j] = temp;
        }
    }
}

//console.log(score);
console.log(score[K-1]);