const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim();

//** MenOfPassion 알고리즘
/* MenOfPassion(A[], n) {
    sum <- 0;
    for i <- 1 to n - 2
        for j <- i + 1 to n - 1
            for k <- j + 1 to n
                sum <- sum + A[i] × A[j] × A[k]; # 코드1
    return sum;
} */
const n = BigInt(input);
const result = n * (n - 1n) * (n - 2n) / 6n

console.log(result.toString());
console.log(3);