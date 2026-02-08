const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);  
let max = 0;
let cards = input[1].split(' ').map(Number);

for(let i = 0; i <= N; i++){   //? 첫 번째 카드
    for(let j = i + 1; j <= N; j++){  //? 두 번째 카드
        for(let k = j + 1; k <= N; k++){  //? 세 번째 카드
            let sum = cards[i] + cards[j] + cards[k];  //? 세 카드의 합 구하기
            if(sum <= M && sum > max){  //? 반복문을 돌다가 M과 최대한 비슷한 시점에서 변수 max에 저장하고 반복문 탈출
                max = sum;
            }
        }
    }
}

console.log(max);