const fs = require('fs');
const input = fs.readFileSync(0,'utf-8').toString().trim().split(' ').map(Number);

let N = input[0];
let K = input[1];
let cnt = 0;

for(let i = 1; i <= N; i++){  //? 자기 자신(N)도 약수이므로 등호를 포함해야 함
    if(N % i === 0){
        cnt ++;  //? N을 i로 나눴을 때 나머지가 0이면 약수임

        if(cnt === K){   //? 찾는 K번 째 약수인지 확인하기
            console.log(i);  //? K번 째라면 바로 i를 출력함
            break;  //? 반복문 탈출
        }
    }
}

if(cnt < K){   //? N의 약수의 개수가 K보다 적어서 K번째 약수가 존재하지 않은 경우
    console.log(0);
}