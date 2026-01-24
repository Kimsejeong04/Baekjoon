const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim();

let num = Number(input);

if(num === 1){
    //console.log();
}

for(let i = 2; i < num; i++){  //? 2부터 나누기 시작
    while(num % i === 0){   //? num이 i로 나누어 떨어지는 동안 계속 나눔
        console.log(i);  //? 찾은 약수 출력
        num = num / i;  //? num을 나눈 몫으로 갱신
    }
}

if(num > 1){  //? 반복문을 다 돌고 num의 숫자가 1보다 크게 남은 경우 약수 출력
    console.log(num);
}