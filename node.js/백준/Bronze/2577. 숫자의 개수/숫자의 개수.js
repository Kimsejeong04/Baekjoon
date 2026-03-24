const { count } = require('console');
const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n').map(Number);

let result = input[0] * input[1] * input[2];
let strResult = String(result);
let counts = new Array(10).fill(0);

for(let i = 0; i < strResult.length; i++){
    let current = Number(strResult[i]);

    if(current === 0){
        counts[0] ++;
    }
    else if(current === 1){
        counts[1] ++;
    }
    else if(current === 2){
        counts[2] ++;
    }
    else if(current === 3){
        counts[3] ++;
    }
    else if(current === 4){
        counts[4] ++;
    }
    else if(current === 5){
        counts[5] ++;
    }
    else if(current === 6){
        counts[6] ++;
    }
    else if(current === 7){
        counts[7] ++;
    }
    else if(current === 8){
        counts[8] ++;
    }
    else{
        counts[9] ++;
    }
}

for(let j = 0; j < 10; j++){
    console.log(counts[j])
}