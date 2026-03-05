const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);  //? 첫 줄(체스칸의 크기)을 세로, 가로 숫자를 뽑아냄
const board = input.slice(1);  //? 첫 줄을 제외한 나미지 줄만 잘라서 배열에 저장
let minretry = Infinity;  //? 최솟값을 찾기 위해 가장 큰 값으로 초기화

for(let i = 0; i <= N - 8; i++){  //? 세로 방향으로 내려갈 수 있는 한계선
    for(let j = 0; j <= M - 8; j++){  //? 가로 방향

        let whiteStart = 0;   //? 새로운 구역을 검사할 때 마다 칠해야 하는 휫수를 카운트하기 위해 0으로 초기화
        let blackStart = 0;

        for(let k = 0; k < 8; k++){   //? 정해진 시작점안에서 8x8 구역의 색깔을 하나씩 검사
            for(let l = 0; l < 8; l++){
                const current = board[i + k][j + l];  //? 현재 보고 있는 보드판의 색깔을 저장하는 변수 생성 후 저장
                if((k + l) % 2 === 0){  //? 가로 인덱스와 세로 인덱스의 합이 짝수인지 홀수인지로 패턴을 찾음

                    //? (k + l)이 짝수인 칸은 맨 왼쪽 위 첫 칸과 색이 같아야 한다
                    if(current != 'W') whiteStart++;  //? W 시작판인데 현재 칸이 W가 아닐 때 칠하기
                    if(current != 'B') blackStart++;  //? B 시작판인데 현재 칸이 B가 아닐 때 칠하기
                }
                else{
                    //if((l + 1) % 2 === 0){
                        if(current != 'W') blackStart++;   //? B 시작판인데 현재 칸이 W가 아날 때 칠하기
                        if(current != 'B') whiteStart++;   //? W 시작판인데 현재 칸이 B가 아날 때 칠하기
                    }
                }
            }

        //? 모든 8x8 구역을 살펴봤다면 지금까지 찾은 최솟값과 방금 구한 whiteStart, blackStart 중 가장 작은 값으로 기록 갱신
        minretry = Math.min(minretry, whiteStart, blackStart);
    }
}

console.log(minretry);
