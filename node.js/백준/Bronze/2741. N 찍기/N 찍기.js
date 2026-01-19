const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number);

for(let i = 1; i <= input[0]; i++){
    console.log(i);
}