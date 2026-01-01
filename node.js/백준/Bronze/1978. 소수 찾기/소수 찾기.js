const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const loop = Number(input[0]);
const number = input[1].split(' ').map(Number);
let primeNum = 0;

function logic(num){
   if (num < 2) return false;  //? 0과 1은 소수가 아니므로 flase

   for (let i = 2; i < num; i++){  //? 2부터 자기자신까지 반복한다
      if(num % i === 0)  //? 나누어 떨어지는 수가 있다면 약수가 있다는 의미이므로 소수가 아니다
         return false;
   }
   return true;  //? 위 조건을 무사히 통과하면 소수
}

for(let i = 0; i < loop; i++){  //? 숫자의 개수만큼 반복
   if (logic(number[i])){   //? i번째 숫자가 소수인지 확인(위에서 작성한 함수 불러옴)
      primeNum ++;  //? 소수라면 1증가
   }
}

console.log(primeNum);
