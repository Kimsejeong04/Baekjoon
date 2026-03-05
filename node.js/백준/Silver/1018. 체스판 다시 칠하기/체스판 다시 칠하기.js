const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1);
let minretry = Infinity;

for(let i = 0; i <= N - 8; i++){
    for(let j = 0; j <= M - 8; j++){

        let whiteStart = 0;
        let blackStart = 0;

        for(let k = 0; k < 8; k++){
            for(let l = 0; l < 8; l++){
                const current = board[i + k][j + l];
                if((k + l) % 2 === 0){
                    if(current != 'W') whiteStart++;
                    if(current != 'B') blackStart++;
                }
                else{
                    //if((l + 1) % 2 === 0){
                        if(current != 'W') blackStart++;
                        if(current != 'B') whiteStart++;
                    }
                }
            }
        minretry = Math.min(minretry, whiteStart, blackStart);
    }
}

console.log(minretry);