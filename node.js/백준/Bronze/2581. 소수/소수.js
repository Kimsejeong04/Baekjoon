const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number);

const min = input[0];  //? M (시작)
const max = input[1];  //? N (끝)
let minValue = -1;
let sum = 0;  //? 소수들의 합을 저장하는 변수

function logic(num){   //? 소수 판별 함수
    if (num < 2) return false;  //? 0과 1은 소수가 아니므로 

    for (let i = 2; i < num; i++){  //? 2부터 자기자신 -1 까지 나눔
        if(num % i === 0)  //? 만약 나누어 떨어지는 수가 있으면 약수가 존재한다는 의미이므로 소수가 아니다
            return false;
    }
    return true;  //? 위 반복문을 통과했다면 약수가 없다는 의미 => 소수
}

for(let i = min; i <= max; i++){   //? M부터 N까지 반복하며 소수 찾음
    if (logic(i)){ 
        sum += i;   //? 소수라면 해당 값을 sum에 더한다
    
        if(minValue === -1){  //? minValue가 여전히 -1이면 발견한 소수가 첫 번째 소수라는 의미
            minValue = i;
        }
    }
}

if(minValue === -1){  //? 소수를 한 번도 발견하지 못한 경우
    console.log(-1);
}
else{
    console.log(sum);
    console.log(minValue);
}
