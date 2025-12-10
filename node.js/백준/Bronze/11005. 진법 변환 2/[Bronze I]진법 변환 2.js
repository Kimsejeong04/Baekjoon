const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split(' ');

let N = Number(input[0]);
let B = Number(input[1]);

const charList = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";  //? 숫자를 문자로 바꾸기 위한 변환표 (인덱스 0 -> '0'  인덱스 10 -> 'A'  인덱스 35 -> 'Z')
let result ="";

while (N > 0){  //? N이 0보다 큰 동안 계속 반복
   let remainder = N % B;  //? 나머지 구하기 (가장 오른쪽 자릿수 찾기)

   result = charList[remainder] + result;  //? chatList[remainder]: 나머지 숫자를 문자로 바꾼다. 새로 찾은 자릿수를 기존 결과의 '앞'에 붙임

   N = Math.floor(N / B);  //? 몫 갱신 (다음 자릿수로 이동)  N을 B로 나누어 소수점을 버려 정수 몫만 남긴다. -> 무한 루프 방지
}

if(result === ""){  //? 만약 처음부터 입력값이 0이라면 예외 처리 while문 조건이 거짓이라 루프가 한 번도 안 돈다. result는 여전히 빈 문자열이므로 0을 출력해야 함
   console.log(0);
} else{
   console.log(result);
}
