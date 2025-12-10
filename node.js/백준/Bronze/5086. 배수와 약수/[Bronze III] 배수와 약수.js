const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split(/\s+/).map(Number);  //? .split(/\s+/): 줄바꿈이든 뛰어쓰기든 상관없이 모든 공백을 기준으로 잘라냄

//? i가 1부터 시작하여, 끝에서 두번째 전까지 돎(0 0은 끝을 표현한 것이라 생각)
//? i += 2: 숫자 두개가 한쌍이므로 한 번에 두칸씩 점프
for(i = 0; i < input.length - 2; i += 2){ 
   const A = input[i];  //? 현재 쌍의 첫 번째 숫자 저장(예를 들어 8 16 이면 A는 8, B는 16을 저장) 
   const B = input[i + 1];  //? 현재 쌍의 두 번째 숫자 저장

   if(B % A === 0){  //? 약수 판별 -> B를 A로 나누었을 때 나머지가 0이면 약수
      console.log('factor');
   }
   else if(A % B === 0){  //? 배수 판별 -> A를 B로 나누었을 때 나머지가 0이면 배수 
      console.log('multiple');
   }
   else{  //? 둘 다 아님
      console.log('neither')
   }
}
