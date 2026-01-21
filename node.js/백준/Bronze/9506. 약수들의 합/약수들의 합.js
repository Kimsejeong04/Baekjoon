const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);

for(let i = 0; i < input.length; i++){   //? 테스트 케이스 반복(입력된 숫자만큼 반복)
    let num = input[i];  //? 현재 검사할 숫자를 꺼냄

    if(num == -1){  //? 테스트 케이스가 -1이 나올 시 반복문 종료
        break;
    }

    let aliquot = [];  //? 약수를 담을 배열
    let sum = 0;  //? 약수들의 합

    for(let j = 1; j < num; j++){  //? 1부터 자기 자신 전까지 반복하며 나눔
        if(num % j === 0){   //? 나누어 떨어질 시 약수
            aliquot.push(j);  //? 배열에 해당 약수 추가
            sum += j;  //? 합계에 약수 더함(약수의 합들이 자기자신을 제외한 테스트케이스와 같을시 완전수이므로)
        }
    }

    if(sum === num){  //? 약수들의 합이 원래 숫자(num)와 같은지 확인 (완전수 판별)
        console.log(num + ' = ' + aliquot.join(" + "));
    }
    else{
        console.log(num + ' is NOT perfect.');
    }
}