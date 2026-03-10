const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim();

let bag = Number(0);

while(input >= 0){
    if(input % 5 == 0){
        bag += input / 5;
        break;
    }
    else{
        input -= 3;
        bag ++;
        continue;
    }
}

if(input < 0){
    console.log(-1);
}
else{
    console.log(bag);
}