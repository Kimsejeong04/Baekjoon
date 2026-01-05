const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n');

const gradeMap = {
    'A+': 4.5,
    'A0': 4.0,
    'B+': 3.5,
    'B0': 3.0,
    'C+': 2.5,
    'C0': 2.0,
    'D+': 1.5,
    'D0': 1.0,
    'F': 0.0
};

let totalMajor = 0;
let totalSocre = 0;

for (let i = 0; i < input.length; i++){
    const line = input[i];
    const [subject, scores, grade] = line.split(' ');
    const score = Number(scores);

    if(grade === 'P'){
        continue;
    }
    totalSocre += score;
    totalMajor += score * gradeMap[grade];
}

console.log(totalMajor / totalSocre);