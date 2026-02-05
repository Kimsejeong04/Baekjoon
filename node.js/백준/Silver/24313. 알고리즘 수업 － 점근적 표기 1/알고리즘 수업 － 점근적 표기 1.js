const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const a0_a1 = input[0].split(' ').map(Number);  //? 첫번째 줄 데이터 처리
const a0 = a0_a1[1];  //? f(n)의 기울기
const a1 = a0_a1[0];  //? f(n)의 상수항

const c = Number(input[1]);  //? g(n)의 기울기
const n0 = Number(input[2]);  //? 비교를 시작할 기준점 n

//? 조건 1: (a1 * n0 + a0 <= c * n0) -> 시작점(n0)에서 f(n)이 c*g(n)보다 작거나 같아야 한다
//? 조건 2: (a1 <= c) -> f(n)의 기울기가 c보다 작거나 같아야 역전되지 않는다
if(a1 * n0 + a0 <= c * n0 && (a1 <= c)){
    console.log(1);  //? 두 조건을 모두 만족할 시 O(n) 정의 부합
}
else{
    console.log(0);  //? 하나라도 만족하지 않으면 정의에 부합되지 않음
}
