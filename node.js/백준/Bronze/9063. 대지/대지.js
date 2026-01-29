const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const N = Number(input[0]);

if(N < 2){  //? 점이 1개 이하면 직사각형을 만들 수 없으므로 0을 출력하고 종료
    console.log(0);
    return;
}

//? 최댓값을 찾으려면 초기값은 세상에서 제일 작은 수이어야 함
//? 최솟값을 찾으려면 초기값은 세상에서 제일 큰 수이어야 함
let max_x = -Infinity, min_x = Infinity;
let max_y = -Infinity, min_y = Infinity;

for(let i = 1; i <= N; i++){
    const [x, y] = input[i].split(' ').map(Number);

    max_x = Math.max(max_x, x);
    min_x = Math.min(min_x, x);

    max_y = Math.max(max_y, y);
    min_y = Math.min(min_y, y);
}

//? 넓이 계산 및 출력
console.log((max_x - min_x) * (max_y - min_y));