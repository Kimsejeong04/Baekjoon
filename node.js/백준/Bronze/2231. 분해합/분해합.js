const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim();

const N = Number(input);
let result = 0;

for(let i = 0; i < N; i++){
    let sum = 0;
    let teardown_sum = 0;  //? 각 자리수를 저장할 변수

    const string_i = String(i);  //? 숫자를 문자열로 변환(각 자리에 접근하기 위해)

    for(let j = 0; j < string_i.length; j++){  //? 문자열 길이만큼 반복하여 각 자리 숫자를 더한다
        teardown_sum += Number(string_i[j]);  
    }
    sum = i + teardown_sum;  //? 분해합 계산

    if(sum === N){  //? 계산한 분해합이 입력값과 같다면, i는 N의 생성자
        result = i;
        break;
    }
}

console.log(result);