const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim();

//** MenOfPassion 알고리즘
/* MenOfPassion(A[], n) {
    sum <- 0;
    for i <- 1 to n
        for j <- 1 to n
            for k <- 1 to n
                sum <- sum + A[i] × A[j] × A[k]; # 코드1
    return sum;
} */
const n = BigInt(input);
const result = n * n * n 

console.log(result.toString());
console.log(3);