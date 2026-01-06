const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim();

let x = Number(input);
let line = 1;  //? 대각선에서 몇 번째 분수인지를 나타냄
let denominator = 0;  //? 분모
let numerator = 0;  //? 분자

while(x > line){  //? 몇 번째 대각선 줄에 있는지 찾기
    x -= line;  //? 앞선 줄에 있는 분수 개수만큼 빼기 (순서 건너뛰기)
    line++;  //? 다음 대각선 줄로 이동
}

if(line % 2 === 0){  //? 현재 줄이 짝수일 때 (위에서 아래로 내려가는 방향) -> 순서(x)가 커질수록 분자는 커지고, 분모는 작아진다
    numerator = x;
    denominator = line - x + 1;
}
else{
    numerator = line - x + 1;  //? 현재 줄이 홀수일 때 (아래에서 위로 올라가는 방향) -> 순서(x)가 커질수록 분자는 작아지고, 분모는 커진다
    denominator = x;
}

console.log(`${numerator}/${denominator}`);  //? 문자열 탬플릿 사용하여 출력
