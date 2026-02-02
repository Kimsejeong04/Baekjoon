const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim();

//** MenOfPassion 알고리즘
/* MenOfPassion(A[], n) {
    sum <- 0;
    for i <- 1 to n - 1
        for j <- i + 1 to n
            sum <- sum + A[i] × A[j]; # 코드1
    return sum;
} */

let n = Number(input);

console.log(n * (n-1) / 2);
console.log(2);